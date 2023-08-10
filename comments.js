// Create web server
// Node.js has a built-in module called HTTP, which allows Node.js to transfer data over the Hyper Text Transfer Protocol (HTTP).
// To include the HTTP module, use the require() method:
// var http = require('http');
// Create a server object:
// http.createServer(function (req, res) {
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     res.end('Hello World!');
// }).listen(8080);
// The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
// Save the code above in a file called "demo_http.js", and initiate the file:
// Initiate demo_http.js:
// C:\Users\Your Name>node demo_http.js
// If you have followed the same steps on your computer, you will see the same result as the example: http://localhost:8080/
// Node.js as a File Server
// The Node.js file system module allows you to work with the file system on your computer.
// To include the File System module, use the require() method:
// var http = require('http');
// var fs = require('fs');
// Create a server object:
// http.createServer(function (req, res) {
//     fs.readFile('demofile1.html', function(err, data) {
//         res.writeHead(200, {'Content-Type': 'text/html'});
//         res.write(data);
//         res.end();
//     });
// }).listen(8080);
// The function passed into the http.createServer() method, will be executed when someone tries to access the computer on port 8080.
// If no error occurred, you will get the following response:
// Create Files
// The File System module has methods for creating new files:
// fs.appendFile()
// fs.open()
// fs.writeFile()
// The fs.appendFile() method appends specified content to a file. If the file does not exist, the file will be created:
// var fs = require('fs');
// fs.appendFile('mynewfile1.txt', 'Hello content!', function (err) {
//     if (err) throw err;
//     console.log('Saved!');
// });
// The fs.open() method takes a "flag" as the second argument, if the flag is "w" for "writing", the specified file is opened for writing. If the file does not exist,