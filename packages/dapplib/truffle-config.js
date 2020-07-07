require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess clock off tooth warrior ridge remember unit grace gloom orange theme'; 
let testAccounts = [
"0x12b59101ecb5e3c60d0db890ad2f0564b90e1d3f96ee0d8a7391c55fe153b3d1",
"0x5076c0a323b8fc17e5f1601d16d2393117f2562621912c6a136132661d65b7b0",
"0x8bbac4ebafa624c7cc14866398679ab83fe50278652cf73b30989c04c0023815",
"0x92d9658963b8e0c1f01df9b4a9e9d6cb1519134339842c480f2e6c3db00dc897",
"0xf2e30dda296458f40f356fbedbdb1e25129e013c4b82e8d97635b6f4e36c77e7",
"0x0cb3881ded91562e5040b32398f0865b21d2e1c5731802f455e0b4b9b6b6f4c2",
"0xadae6acc52b5d2a66414891e7c72cee00f096a6e58e8d25a28049bda957e5f1a",
"0x9a8b3b7b806de4c03332b19fb496f0b970a0ac7ae9f8edda6a935cc130d11752",
"0x124352f4b43c7a7c84b90c5505687e3696fc7c4ebf8ba4e446c38c061f291d09",
"0xb068abd1d87e121995bd3b8f5623a4598b300fb52dd9dac7a857a6c59783e7a0"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
