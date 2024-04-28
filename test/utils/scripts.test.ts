import { applyParamsToScript, getV2ScriptHash } from '../../src';

describe('Scripts', () => {
    test('getV2ScriptHash', () => {
        const scriptCbor =
            '5902130100003332323232323232323223222232533300932323232533300d3370e9000180600089919191919191919191919299980d980f0010991919299980d99b874800000454ccc06cc8cc004004030894ccc08000452809919299980f99baf3024301d00201a14a2266008008002604800460440022a66603666e1c009200213371e00602e29405854ccc06ccdc380124002266e3c00c05c528180c80a1bad301b002375c60320022c6038002646464a66603266e1d200200114bd6f7b63009bab301e30170023017001323300100100222533301c00114c103d87a8000132323232533301d3371e01e004266e95200033021374c00297ae01330060060033756603c0066eb8c070008c080008c078004c8cc004004008894ccc06c00452f5bded8c0264646464a66603866e3d221000021003133020337606ea4008dd3000998030030019bab301d003375c6036004603e004603a0026eacc068004c068004c064004c060004c05c008dd6180a80098068029bae3013001300b0011630110013011002300f001300700214984d958c94ccc024cdc3a40000022a666018600e0062930b0a99980499b874800800454ccc030c01c00c52616163007002375c0024600a6ea80048c00cdd5000ab9a5573aaae7955cfaba05742ae8930010544666f6f64004c012bd8799fd8799f58201b62387919a52907670edca0942af3fe5128eccd075d497ad56e62ee0d402867ff03ff0001';
        const expectedHash = 'f4b22e1d689db1a060e8f7fb9c22fad4e0437efe0cd993549bbc46dc';
        expect(getV2ScriptHash(scriptCbor)).toBe(expectedHash);
    });
    test('getV2ScriptHash 2', () => {
        const scriptCbor =
            '5902130100003332323232323232323223222232533300932323232533300d3370e9000180600089919191919191919191919299980d980f0010991919299980d99b874800000454ccc06cc8cc004004030894ccc08000452809919299980f99baf3024301d00201a14a2266008008002604800460440022a66603666e1c009200213371e00602e29405854ccc06ccdc380124002266e3c00c05c528180c80a1bad301b002375c60320022c6038002646464a66603266e1d200200114bd6f7b63009bab301e30170023017001323300100100222533301c00114c103d87a8000132323232533301d3371e01e004266e95200033021374c00297ae01330060060033756603c0066eb8c070008c080008c078004c8cc004004008894ccc06c00452f5bded8c0264646464a66603866e3d221000021003133020337606ea4008dd3000998030030019bab301d003375c6036004603e004603a0026eacc068004c068004c064004c060004c05c008dd6180a80098068029bae3013001300b0011630110013011002300f001300700214984d958c94ccc024cdc3a40000022a666018600e0062930b0a99980499b874800800454ccc030c01c00c52616163007002375c0024600a6ea80048c00cdd5000ab9a5573aaae7955cfaba05742ae8930010544666f6f64004c012bd8799fd8799f58201b62387919a52907670edca0942af3fe5128eccd075d497ad56e62ee0d402867ff03ff0001';
        const expectedHash = 'b3676ddb7727f513866a43f54caa2f3123751d317bf7cde17ebc68ed';
        expect(getV2ScriptHash(applyParamsToScript(scriptCbor, []))).toBe(expectedHash);
    });
});
