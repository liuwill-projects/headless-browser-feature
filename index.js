var spawn = require('cross-spawn')
var childArgs = ['src/sample.js']
var casperjsPath = './node_modules/.bin/casperjs'

var path = require('path')
var httpServer = require('http-server')
var server = httpServer.createServer({
  root: path.resolve(__dirname, './html')
})

server.listen(8080)

var runner = spawn(casperjsPath, childArgs, {
  stdio: 'inherit'
})

runner.on('exit', function (code) {
  console.log("finish")
  process.exit(code)
})

runner.on('error', function (err) {
  console.log("finish")
  throw err
})