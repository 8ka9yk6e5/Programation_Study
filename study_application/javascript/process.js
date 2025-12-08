//process is a internal module from node.js

const process = require('node:process');

//process.argv - return an array with the command line arguments, passed when start a process

console.log(`auto values: ${process.argv[0]}, ${process.argv[1]}`);
console.log(`added values: ${process.argv[2]}, ${process.argv[3]}\n\n`);
//to the node identify this values, is after the write of the project name, all values after it is arguments
//syntax - node <projectname> <args>;
//example - node process.js arg1 arg2

//process.cwd - returns the current working directory

console.log(`current directory: ${process.cwd()}\n`);

//process.chdir - changes the current working directory
//syntax - process.chdir(<path>);

console.log(`start directory: ${process.cwd()}`);
process.chdir('..');
console.log(`new directory: ${process.cwd()}\n`);
process.chdir('javascript');

//process.env - return an object with user environment

console.log(`user environment: ${JSON.stringify(process.env)}\n`);

//process.memoryUsage - return an object with the memory usage of node.js

console.log(`memory use: ${JSON.stringify(process.memoryUsage())}\n`);

//process.nextTick - add a callback to run in the next tick, for asynchronous programming

console.log('start of count');
process.nextTick(() => {console.log('\nend of count\n')});
console.log('middle of the count');

//process.stderr - stream that outputs errors

process.stderr.write("\nAn error happens\n");//an error log

//process.on - listen to events

process.on('exit', (code) => console.log(`\nexit code:${code}\n`))
//always, in code above, which the command process.exit is runned, call this callback

//process.stdin - stream that receives input from user

//process.stdout - stream that outputs normal messages

process.stdout.write('\nA normal message\n');

//process.exit - end a process in console manually

//process.exit();