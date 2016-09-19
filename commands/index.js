exports.check = require('./check')
exports.users = require('./users')
exports.adduser = require('./adduser')

var config = parseJson(fs.readFileSync(process.cwd() + '/msd.json'))

_.each(exports, attachRun)

function attachRun (ctx) {
  ctx.exec = function () {
    console.log(this.prepareText + '\n')
    var start = new Date().getTime()
    var session = nodemiral.session(config.host, { username: config.username, password: config.password }, { keepAlive: false })
    session.execute(this.cmd, function(err, code, logs) {
      if (err) return console.log(err, logs)
      console.log(logs.stdout)
      var end = new Date().getTime()
      console.log(end - start + 'ms')
    })
  }
}
