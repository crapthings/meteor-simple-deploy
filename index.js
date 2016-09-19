var msd = require('./commands/index')

var fa = __argv._[0]

fa && msd[fa].exec()
