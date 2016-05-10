var api = require('marvel-api');

var marvel = api.createClient({
	publicKey: '43a30ebf2b6c2f83215d8d05fa753ea7',
	privateKey: '8e3736516a61922a9e3e1f593076d8276e7e1d06'
});

marvel.characters.findAll(5).then(console.log).fail(console.log).done();