exports.check = require('./check')
exports.users = require('./users')
exports.adduser = require('./adduser')

var config = parseJson(fs.readFileSync(process.cwd() + '/msd.json'))

_.each(exports, attachRun)

function attachRun (ctx) {
  ctx.exec = function () {
    console.log(this.prepareText + '\n')
    var session = nodemiral.session(config.host, { username: config.username, password: config.password }, { keepAlive: false })
    session.execute(this.cmd, function(err, code, logs) {
      console.log(logs.stdout)
    })
  }
}
