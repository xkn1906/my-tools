var express = require('express');
var app = express();
var url = require('url');
var mysql = require('mysql');
var bodyParser = require('body-Parser');//node.js中间件，用于处理json，raw，text，url编码的数据
var jsonParser = bodyParser.json();
app.use(express.static('public'));//内置中间件来设置静态文件
app.use(bodyParser.urlencoded({ extended: false }));
app.use(jsonParser);
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/' + "milkytea.html");
})
//连接数据库
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'milktea'
});
connection.connect();
//路由
app.post('/milkytea.json', function (req, res) {
    var type = req.body.type;
    console.log(type);
    var querysql = "select * from test where type=\"" + type + "\"";
    //var querysql='select * from test where type="一点点"';
    console.log(querysql);
    connection.query(querysql, function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(result);
        res.send(result);
    })
})
app.post('/add', function (req, res) {
    var name = req.body.name;
    var best = req.body.best;
    var type = req.body.type;
    //console.log(type);

    var addSql = "insert into test values(?,?,?)";
    var addSqlParams = [type, name, best];
    connection.query(addSql, addSqlParams, function (err, result) {
        if (err) {
            console.log(err.message);
            return;
        }
        console.log(result);
        res.send("add success");
    })
})
app.post('/change',function(req,res){
    var name=req.body.name;
    var best=req.body.best;
    var type=req.body.type;
    //var querySql="select * from test where type=\""+type+"\" and name=\""+name+"\"";
            var modSql="update test set best=? where type=? and name=?";
            var modSqlParams=[best,type,name];
            console.log(modSqlParams);
            connection.query(modSql,modSqlParams,function(err,result){
                if(err){
                    console.log(err.message);
                    return;
                }
                if(result.affectedRows==0){
                    res.send("no such tea here");
                }
                console.log(result.affectedRows);
                res.send("change success");
            })
})
app.post('/delete',function(req,res){
    var name=req.body.name;
    var best=req.body.best;
    var type=req.body.type;
  var delSql="delete from test where type=\""+type+"\" and name=\""+name+"\"and best=\""+best+"\"";
  // var delSql="delete from test where type=\""+type+"\"";
  console.log(delSql);
   connection.query(delSql,function(err,result){
       if(err){
       console.log(err.message);
       res.send("no such tea here");
       return;
        } 
        else{
      console.log(result.affectedRows);
      res.send("delete success");
    }
   })
   
})
app.listen(8081, function () {
    console.log("start server");
})