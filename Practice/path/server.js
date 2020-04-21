var http = require("http");
var fs = require("fs");

var PORT = 8080;

// This is how your server should be set up
var server = http.createServer(handelRequest);

function handelRequest(req, res) {

    var path = req.url;

    //  swtiches between all the diffrent files
    switch (path) {

        case "/food":
        case "/love":
        case "/project":
            return renderHTML(path + ".html", res);

        default:
            return renderHTML("/index.html", res);


    }

}

function renderHTML(filepath, res) {
    return fs.readFile(__dirname + filepath, function (err, data) {


        if (err) throw err;
        res.writeHead(200, { "Content-Type": "text/html" });
        res.end(data);



    })


}


server.listen(PORT, function () {
    console.log("Server is listening on PORT: " + PORT);
});