//1.引入html模块
var http = require("http");
//引入fs模块
var fs = require("fs");
//.通过http创建服务器
var server = http.createServer(function(req,res){
  
 fs.readFile("./02_root.html",function(err,data){
   if(err){
     //读取文件错误
     console.log(err);//打印错误信息
    res.end("read file errer!")//返回信息

   }else{
     //读取成功
     console.log(data.toString());//查看data
     res.end(data);//返回读取的数据
   }
 })
})
//3.开启服务监听端口
server.listen(4000,"localhost")