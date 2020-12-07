#  node-crc-native

Node native addon to calculate CRC.

## NOTE
Compability node 15.3.0

## Usage

```javascript
var CRC16 = require('crc16');
console.log(CRC16('03010b'));
console.log(crc("aaff010fa90be507ad"));
console.log(crc(new Buffer.from('03010b',"hex")));
console.log(crc("1af3e8b4c4d8","hex").toString(16));
```

## Installation

```
npm i node_crc_native --save
```

## License
APACHE-2.0
