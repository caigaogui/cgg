//1.引入http模块
var http = require("http");
//2.通过http创建服务器
var server = http.createServer(function(req,res){
  //.4编写服务器内容
  //.end方法的作用：结束请求，返回响应
  res.writeHead(200,{"Content-Type":"text/html;charset=UTF-8"})
  res.end("this is my first NodeJs 我!");
})
//3.开启服务，监听端口
server.listen(4000,"localhost");