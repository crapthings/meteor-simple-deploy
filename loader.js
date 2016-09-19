var parseArgs = require('minimist')

GLOBAL.fs = require('fs')

GLOBAL._ = require('lodash')

GLOBAL.nodemiral = require('nodemiral')
GLOBAL.parseJson = require('parse-json')

GLOBAL.__argv = parseArgs(process.argv.slice(2))

require('./index')
