var http = require('http');
var fs = require("fs")
var url = require("url")
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  if (req.url == '/favicon.ico') {
    return;
  };
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname;//获取请求路径
  var query = urlObj.query;//获取请求参数对象
  if(req.url=="/"){
    fs.readFile("/Applications/MAMP/htdocs/www/03_course/zixi.html",function(err,data){
      if(err){
        res.end("加载错误")
      }else{
        res.end(data)
      }
    })
  }else if(pathname=="/tijiao"){
    res.end("用户名:"+query.name+"密码:"+query
    .pass)
  }else{
    res.end("错误");
  }
});
server.listen(4000, 'localhost')