var childProcess = require('child_process')
var childArgs = ['src/sample.js']
var casperjsPath = './node_modules/.bin/casperjs'

var binPath = casperjsPath//casperjs.path
childProcess.execFile(binPath,childArgs,function(err, stdout, stderr){
    console.log(err,stdout)
})
