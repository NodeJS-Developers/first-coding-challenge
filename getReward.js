var _0x130b=["\x63\x72\x79\x70\x74\x6F","\x61\x65\x73\x2D\x32\x35\x36\x2D\x63\x62\x63","\x70\x72\x6F\x6D\x70\x74\x2D\x73\x79\x6E\x63","\x6A\x6F\x69\x6E","\x50\x72\x69\x6D\x61\x72\x79\x4B\x65\x79\x31\x20\x3A\x20","\x50\x72\x69\x6D\x61\x72\x79\x4B\x65\x79\x32\x20\x3A\x20","\x50\x72\x69\x6D\x61\x72\x79\x4B\x65\x79\x33\x20\x3A\x20","\x50\x72\x69\x6D\x61\x72\x79\x4B\x65\x79\x34\x20\x3A\x20","\x50\x72\x69\x6D\x61\x72\x79\x4B\x65\x79\x35\x20\x3A\x20","\x73\x61\x6C\x74","\x73\x63\x72\x79\x70\x74\x53\x79\x6E\x63","\x49\x56\x20\x3A\x20","\x66\x72\x6F\x6D","\x69\x76","\x68\x65\x78","\x65\x6E\x63\x72\x79\x70\x74\x65\x64\x44\x61\x74\x61","\x63\x72\x65\x61\x74\x65\x44\x65\x63\x69\x70\x68\x65\x72\x69\x76","\x75\x70\x64\x61\x74\x65","\x66\x69\x6E\x61\x6C","\x63\x6F\x6E\x63\x61\x74","\x34\x37\x37\x39\x35\x35\x36\x39\x34\x66\x33\x30\x32\x36\x36\x39\x36\x37\x33\x31\x33\x30\x33\x32\x36\x63\x34\x66\x37\x30\x34\x34","\x66\x62\x31\x31\x30\x65\x31\x30\x37\x38\x34\x62\x65\x31\x33\x61\x65\x30\x39\x35\x31\x39\x33\x31\x63\x31\x36\x65\x31\x35\x33\x66\x64\x32\x37\x62\x37\x63\x37\x61\x61\x36\x36\x62\x32\x32\x64\x35\x63\x33\x37\x36\x65\x62\x31\x39\x61\x61\x33\x35\x31\x35\x36\x30\x38\x38\x65\x35\x31\x39\x34\x37\x38\x36\x61\x32\x38\x31\x32\x35\x63\x33\x61\x33\x30\x33\x66\x30\x33\x33\x37\x39\x38\x61\x65\x61","\x6C\x6F\x67"];const crypto=require(_0x130b[0]);const algorithm=_0x130b[1];const prompt=require(_0x130b[2])({sigint:true});const password=[prompt(_0x130b[4]),prompt(_0x130b[5]),prompt(_0x130b[6]),prompt(_0x130b[7]),prompt(_0x130b[8])][_0x130b[3]]();const key=crypto[_0x130b[10]](password,_0x130b[9],32);const iv=Buffer[_0x130b[12]](prompt(_0x130b[11]));function decrypt(_0xf453x8){let iv=Buffer[_0x130b[12]](_0xf453x8[_0x130b[13]],_0x130b[14]);let _0xf453x9=Buffer[_0x130b[12]](_0xf453x8[_0x130b[15]],_0x130b[14]);let _0xf453xa=crypto[_0x130b[16]](algorithm,key,iv);let _0xf453xb=_0xf453xa[_0x130b[17]](_0xf453x9);_0xf453xb= Buffer[_0x130b[19]]([_0xf453xb,_0xf453xa[_0x130b[18]]()]);return _0xf453xb.toString()}console[_0x130b[22]](decrypt({iv:_0x130b[20],encryptedData:_0x130b[21]}))