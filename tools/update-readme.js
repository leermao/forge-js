/* eslint-disable max-len */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable import/no-dynamic-require */
/* eslint-disable global-require */
/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');

const { getPackages } = require('./util');

const packageList = getPackages({ publicOnly: true }).map(x => {
  return `- [${x.name.split('/').pop()} <img src="https://img.shields.io/npm/v/${
    x.name
  }.svg" alt="Version">](https://www.npmjs.com/package/${x.name})`;
});

const readmeFile = path.join(__dirname, '../README.md');
const readmeContent = `![forge-javascript-sdk](https://www.arcblock.io/.netlify/functions/badge/?text=Forge%20Javascript%20SDK)

## Table of Contents

- [Table of Contents](#Table-of-Contents)
- [Introduction](#Introduction)
- [Packages](#Packages)
- [Install](#Install)
- [Usage](#Usage)
  - [ES5(commonjs)](#ES5commonjs)
  - [ES6](#ES6)
  - [Util](#Util)
  - [Wallet](#Wallet)
  - [Message](#Message)
- [Documentation](#Documentation)
- [Contribution](#Contribution)
- [Compatibility](#Compatibility)
- [Report a Bug?](#Report-a-Bug)
- [License](#License)

## Introduction

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lernajs.io/)
[![docs](https://img.shields.io/badge/powered%20by-arcblock-green.svg)](https://docs.arcblock.io)
[![Gitter](https://badges.gitter.im/ArcBlock/community.svg)](https://gitter.im/ArcBlock/community?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> Last updated at ${new Date().toLocaleString()}

Javascript SDK for [forge](https://docs.arcblock.io/forge/latest/), which is an awesome framework to write distributed blockchain applications.

## Packages

${packageList.join('\n')}

## Install

\`\`\`sh
npm i @arcblock/forge-sdk
// OR
yarn add @arcblock/forge-sdk
\`\`\`

## Usage

### ES5(commonjs)

> Support Node.js

\`\`\`js
const ForgeSDK = require('@arcblock/forge-sdk');

// Connect to multi endpoints
ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });
ForgeSDK.connect('https://zinc.abtnetwork.io/api', { name: 'zinc' });
ForgeSDK.connect('tcp://127.0.0.1:28210', { name: 'local' });

// Declare on test chain
ForgeSDK.sendDeclareTx({
  tx: { itx: { moniker: 'abcd' } },
  wallet: ForgeSDK.Wallet.fromRandom(),
}).then(console.log);

// Get zinc chain info
ForgeSDK.getChainInfo({ conn: 'zinc' }).then(console.log);

// Get local chain info
ForgeSDK.getChainInfo({ conn: 'local' }).then(console.log);
\`\`\`

### ES6

> If you want to support both node.js and browser, please use lite version
> And the lite version only supports http connections

\`\`\`js
import ForgeSDK from '@arcblock/forge-sdk/lite';

ForgeSDK.connect('https://test.abtnetwork.io/api', { name: 'test' });

ForgeSDK.getChainInfo().then(console.log);
\`\`\`

### Util

\`\`\`javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const bn = ForgeSDK.Util.fromTokenToUnit(10, 16);
console.log(bn);
\`\`\`

### Wallet

\`\`\`javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const wallet = ForgeSDK.Wallet.fromRandom();
console.log(wallet.toJSON());
\`\`\`

### Message

\`\`\`javascript
const ForgeSDK = require('@arcblock/forge-sdk');

const message = ForgeSDK.Message.createMessage('Transaction', { from: 'abcd' });
console.log(message);
\`\`\`

## Documentation

[https://docs.arcblock.io/forge/sdks/javascript/latest/](https://docs.arcblock.io/forge/sdks/javascript/latest/)

## Contribution

Checkout [CONTRIBUTION.md](https://github.com/ArcBlock/forge-js/blob/master/CONTRIBUTION.md)

## Compatibility

Forge javascript sdk works with node.js v8.x or above, checkout [Travis](https://travis-ci.com/ArcBlock/forge-js/builds) for status.

## Report a Bug?

Bugs and feature requests please create new issues [here](https://github.com/ArcBlock/forge-js/issues)

## License

Copyright 2018-2019 ArcBlock

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
`;

fs.writeFileSync(readmeFile, readmeContent);
console.log('README.md updated');
