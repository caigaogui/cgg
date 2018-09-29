var http = require('http');
var fs = require("fs");

//.通过http创建服务器
var server = http.createServer(function(req,res){
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  if (req.url == '/favicon.ico') {
    return;
  };
  if(req.url=="/circle"){
    fs.readFile("/Applications/MAMP/htdocs/www/03_course/day09/circle.html",function(err,data){
      if(err){
        
        res.end("读取页面出错")//返回信息

      }else{
        
        res.end(data);//返回读取的数据
      }
  
 })

}else if(req.url=="/square"){
  fs.readFile("/Applications/MAMP/htdocs/www/03_course/day09/square.htnl",function(err,data){
    if(err){
      
      res.end("读取页面出错");//返回信息
      return;
    }
      
      res.end(data);//返回读取的数据
    
  })
}else{
  res.end("地址错误")
}
})

server.listen(4000, 'localhost')