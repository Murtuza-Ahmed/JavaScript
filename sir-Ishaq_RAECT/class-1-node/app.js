// console.log("Hello World!");

const http = require("http");
const server = http.createServer((request, respons) => {
    if (request.url === "/") {
        respons.write("hello world");
        respons.end();
    } else if (request.url === "/form") {
        respons.setHeader("Content-Type", "text/html");
        respons.write("<form> <input name='data'/> <button>Submit</button> </form>");
        respons.end();
    } else {
        respons.write("404 page not found");
        respons.end();
    }
});
server.listen(3000);