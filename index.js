var crc16 = require('./build/Release/node-crc-native').crc16;

module.exports = function (inBuffer, encoding = "hex") {
	var buff = null;
	if(typeof inBuffer == 'string') {
		buff = new Buffer.from(inBuffer, encoding);
	} else if(inBuffer.constructor === Buffer) {
		buff = inBuffer;
	} else {
		throw TypeError('Invalid arguments :)');
	}
	return crc16(buff);
};