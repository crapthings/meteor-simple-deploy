module.exports = {
  prepareText: 'adding new user...',
  cmd: 'useradd -m -p ' + __argv.password + ' -g sudo ' + __argv.username
}
