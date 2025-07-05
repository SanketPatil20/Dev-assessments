console.log("Hello there !!!");


const os = require('os');

console.log("Platform:", os.platform());
console.log("CPU Architecture:", os.arch());
console.log("Free Memory:", os.freemem(), "bytes");
console.log("Total Memory:", os.totalmem(), "bytes");
