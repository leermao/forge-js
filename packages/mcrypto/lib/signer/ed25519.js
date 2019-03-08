const ed25519 = require('tweetnacl').sign;
const randomBytes = require('randombytes');
const { toHex, isHexStrict, hexToBytes, bytesToHex } = require('@arcblock/forge-util');

const Signer = require('../protocols/signer');

class Ed25519Signer extends Signer {
  constructor() {
    super();
  }

  toUint8Array(input) {
    let bytes = input;
    if (typeof input === 'string') {
      bytes = hexToBytes(this.toHex(input));
    }
    return Uint8Array.from(bytes);
  }

  toHex(input) {
    return (isHexStrict(input) ? input : toHex(input)).replace(/^0x/i, '');
  }

  genKeyPair(encoding = 'hex') {
    const keyPair = ed25519.keyPair.fromSecretKey(Uint8Array.from(randomBytes(64)));
    if (encoding === 'hex') {
      keyPair.publicKey = bytesToHex(keyPair.publicKey);
      keyPair.secretKey = bytesToHex(keyPair.secretKey);
    }

    return keyPair;
  }

  getPublicKey(sk, encoding = 'hex') {
    const skBytes = this.toUint8Array(sk);
    const pk = ed25519.keyPair.fromSecretKey(skBytes).publicKey;
    return encoding === 'hex' ? bytesToHex(pk) : pk;
  }

  sign(message, sk, encoding = 'hex') {
    const skBytes = this.toUint8Array(sk);
    const messageBytes = this.toUint8Array(message);
    const signature = ed25519.detached(messageBytes, skBytes);
    return encoding === 'hex' ? bytesToHex(signature) : signature;
  }

  verify(message, signature, pk) {
    const pkBytes = this.toUint8Array(pk);
    const messageBytes = this.toUint8Array(message);
    const signatureBytes = this.toUint8Array(signature);
    return ed25519.detached.verify(messageBytes, signatureBytes, pkBytes);
  }
}

module.exports = new Ed25519Signer();