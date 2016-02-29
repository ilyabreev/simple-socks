'use strict';

var argv = require('yargs')
	.usage('Usage: $0 -p [num] -a [addr1 addr2 addr3]')
	.demand(['p', 'a'])
	.argv;

var
	socks5 = require('../lib'),
	server = socks5.createServer({ allowFrom: argv.a });

server.listen(argv.p);

server.on('proxyError', function (err) {
	console.error('unable to connect to remote server');
	console.error(err);
});