var crc = require('./');
var assert = require('assert');

assert.equal(crc("03010b").toString(16),"db0a");
assert.equal(crc("ffffffff").toString(16),"99cf");
assert.equal(crc("aaff010fa90be507ad").toString(16),"34ed");
assert.equal(crc("1af3e8b4c4d8").toString(16),"fef1");
assert.equal(crc(new Buffer.from('03010b',"hex")), 56074);


console.log('OK');