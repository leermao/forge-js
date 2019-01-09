/* eslint no-console:"off" */
const ForgeRpc = require('./src/rpc');
const { enums } = require('@arcblock/forge-proto');
const debug = require('debug')(require('./package.json').name);

const walletInfo = {
  passphrase: '123456',
  moniker: 'wangshijun',
  type: {
    pk: enums.KeyType.SECP256K1,
    hash: enums.HashType.KECCAK,
    address: enums.EncodingType.BASE16,
  },
};

console.log(enums, walletInfo);

(async () => {
  try {
    const sdk = new ForgeRpc({});

    // ChainRpc
    const res = await sdk.getChainInfo();
    debug('chainInfo', res.info);

    const stream = sdk.getBlock({ height: 11 });
    stream
      .on('data', function({ block }) {
        debug('blockInfo:', block);
      })
      .on('error', err => {
        console.error('error', err);
      });

    // WalletRpc
    // const wallet = await sdk.createWallet(walletInfo);
    // debug('walletInfo', wallet);

    // StateRpc
    const account = await sdk.getAccountState({
      address: 'f525b15c6f31041aa17f1e3e0a436c3c114343956',
    });
    account.on('data', function({ state }) {
      debug('accountInfo:', state);
    });
  } catch (err) {
    console.error('error', err);
  }
})();
