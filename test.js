var fs = require('fs')

var parseJson = require('parse-json')

var nodemiral = require('nodemiral')

var __jsonFile = process.cwd() + '/msd.json'

var config = parseFile(__jsonFile)

var session = nodemiral.session(config.host, {
	username: config.username,
	password: config.password
})

session.execute('echo Server Info: "\n" && lsb_release -a && echo "\n"Mem Status: "\n" && free -m', function(err, code, logs) {
	console.log(logs.stdout)
})

function parseFile(file) {
	return parseJson(fs.readFileSync(file))
}
