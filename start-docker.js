var sys = require('util')
var exec = require('child_process').exec
function puts(error, stdout, stderr) { sys.puts(stdout) }

var os = require('os')

if(os.type() === 'Darwin') {
    exec('yarn docker:darwin', puts)
}
else if(os.type() === 'Windows_NT') {
    exec('yarn docker:windows', puts)
}
else {
    throw new Error('Unsupported OS found: ' + os.type())
}