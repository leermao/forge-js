const { toBase58, toUint8Array, toBuffer, toHex } = require('@arcblock/forge-util');
const hasher = require('../../lib/hasher/keccak');

const testVectors = {
  '': {
    224: '0XF71837502BA8E10837BDD8D365ADB85591895602FC552B48B7390ABD',
    256: '0XC5D2460186F7233C927E7DB2DCC703C0E500B653CA82273B7BFAD8045D85A470',
    384: '0X2C23146A63A29ACF99E73B88F8C24EAA7DC60AA771780CCC006AFBFA8FE2479B2DD2B21362337441AC12B515911957FF',
    512: '0X0EAB42DE4C3CEB9235FC91ACFFE746B29C29A8C366B7C60E4E67C466F36A4304C00FA9CAF9D87976BA469BCBE06713B435F091EF2769FB160CDAB33D3670680E',
  },
  abcd: {
    224: '0XBE2EC6C1CCE305A0BA88300BFCAD0AB0B9F480F964BE34B2CD253199',
    256: '0X48BED44D1BCD124A28C27F343A817E5F5243190D3C52BF347DAF876DE1DBBF77',
    384: '0X565C4034428749960AD82523596B0BB422986C1941463CE4678E81391C6EB3E47BE5D85B9394217DC7D25DDA8328F392',
    512: '0XE4A7E8F5572F4853EF26A862F31687C249B1CD7922DF2AAC1F4348D8CEEF944C74D1949E3465704A5F3F89FB53E0DCCE3EA142C90AF04C84CC7E548F144F8F0B',
  },
  1234: {
    224: '0XE397E35F226ABB2F146AEB89BCFD81107CF4F1D11C37B13EA476A711',
    256: '0X387A8233C96E1FC0AD5E284353276177AF2186E7AFA85296F106336E376669F7',
    384: '0X014B4EF4A6155A90C6038620AE7AF7698307E6FFA33DC255D8265DDF5742078975231C2C601226CF8EDDAF8DD61995A5',
    512: '0X927EDA538A92DD17D6775F37D3AF2DB8AB3DD811E71999401BC1B26C49A0A8DBB7C8471CB1FC806105138ED52E68224611FB67F150E7AA10F7C5516056A71130',
  },
  'ABC!234*': {
    224: '0X88ECA8E6F7EB07E5CC3386BB502E8C461426A4F06501723B6AC81956',
    256: '0X449D941E47D36854A0B2BA437857584A76B5B308273F702C43CD0D22525EBB3F',
    384: '0X15635E9C842D56E48ADCE3F6C854691C0ABD8E87D38DA9E4BEDB0FDEDE09BDE68DF39E2383713C299911D967CA22926D',
    512: '0XB37FAF23A855C27D6B7AA94553D14B5C7DA0787C42ACDDB41062B56D9B6F2AB7BA6CBFCA705F863D09718B8C8080B5D2EB034C4A2A4CFFD193A1EAEE304C99CE',
  },
};

describe('#keccak', () => {
  const keys = Object.keys(testVectors);
  const lengthList = Object.keys(testVectors[keys[0]]);
  lengthList.forEach(length => {
    Object.keys(testVectors).forEach(key => {
      test(`should hash value: ${JSON.stringify(key)} at length ${length}`, () => {
        const fn = `hash${length}`;
        expect(hasher[fn](key.toString(), 1).toUpperCase()).toEqual(testVectors[key][length]);
      });
    });
  });

  test('should return same result on different input formats', () => {
    const input = '0xDD886B5FD8421FB3871D24E39E53967CE4FC80DD348BEDBEA0109C0E';
    const output = '0xb065c23e0070ba119b8ad3df9b5dd404afda357cfe8cde535d7b15d836c6f14c';
    expect(hasher.hash256(input)).toEqual(output);
    expect(hasher.hash256(toBase58(input))).toEqual(output);
    expect(hasher.hash256(toUint8Array(input))).toEqual(output);
    expect(hasher.hash256(toHex(input))).toEqual(output);
    expect(hasher.hash256(toBuffer(input))).toEqual(output);
  });
});