var spawn = require('cross-spawn')
var childArgs = ['src/visit.js']
var casperjsPath = './node_modules/.bin/casperjs'

var runner = spawn(casperjsPath, childArgs, {
  stdio: 'inherit'
})

runner.on('exit', function (code) {
  console.log("finish")
  //process.exit(code)
})

runner.on('error', function (err) {
  console.log("finish")
  throw err
})