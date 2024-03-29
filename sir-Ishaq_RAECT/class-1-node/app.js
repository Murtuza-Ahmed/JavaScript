// console.log("Hello World!");

const http = require("http");
const fileSystem = require("fs");
const path = require("path");

const filePath = path.join(process.cwd(), "data.txt");      /*CWD / CURRENT WORK DIRECTLY*/

const server = http.createServer((request, respons) => {
    if (request.url === "/") {
        respons.write("hello world");
        respons.end();
    } else if (request.url === "/form") {
        respons.setHeader("Content-Type", "text/html");
        respons.write("<form action='/submit' method='POST'> <input name='data1'/> <input name='data2' /> <button>Submit</button></form>")
        respons.end();
    } else if (request.url === "/submit") {
        let data = "";
        request.on("data", chunk => data += chunk);
        request.on("end", () => {
            fileSystem.write(filePath, data, () => {
                respons.write("Data Recevied");
                respons.end();
            });
        });
    } else {
        respons.write("404 page not found");
        respons.end();
    }
});
server.listen(3000);