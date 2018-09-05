var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var jsonParser = bodyParser.json();
//body parser
app.use(bodyParser.urlencoded({ extended: false }))
app.use(jsonParser);
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(express.static('public'));
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + 'milkytea.html');
})
app.post('/milkytea.json', function (req, res) {
    var type = req.body.type;//解析请求数据，并提取需要数据
    console.log(type);
    fs.readFile("./public/milkytea.json", function (err, data) {
        if (err) {
            return console.error(err);
        }
        else {
            var tea = data.toString();
            tea = JSON.parse(tea);
            console.log(tea);
            var need = tea[type];
            console.log(need);
            console.log("1");
            res.send(need);
            //res.end();
        }
    })
})
app.get('/milkytea.html', function (req, res) {
    res.sendFile(__dirname + "/" + "milkytea.html");
})
app.post('/post', function (req, res) {
    datas = {
        "name": req.body.name,
        "best": req.body.best
    };
    console.log(req.body);
    var type = req.body.type;
    console.log(type);
    console.log(datas);
    fs.readFile('./public/milkytea.json', function (err, data) {
        if (err) {
            return console.error(err);
        }
        else {
            var tea = data.toString();
            tea = JSON.parse(tea);
            tea[type].push(datas);

            var str = JSON.stringify(tea);
            fs.writeFile('./public/milkytea.json', str, function (err) {
                if (err) {
                    console.error(err);
                }
                console.log("chenggong");
            })
        }
    })
    //res.sendFile("milkytea.html");
    //res.write("");
    //res.writeHead(200,{"Content-Type":"test/html;charset=utf8"})
    res.send(datas);
})
var server = app.listen(8080, function () {
    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})