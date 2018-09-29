var http = require('http');
var fs = require("fs");
var url = require("url")
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  if(req.url == '/favicon.ico') {
    return;
  }
  var urlObj = url.parse(req.url,true);
  var pathname = urlObj.pathname;//获取请求路径
  var query = urlObj.query;//获取请求参数对象
    if(req.url=="/"){
      //显示form页面
      fs.readFile("/Applications/MAMP/htdocs/www/03_course/day09/form.html",function(err,data){
        if(err){
          console.log(err);//打印错误信息
          res.end("加载页面出错");//发挥响应
          return;
        }
        res.end(data);//正确结果返回数据
      })
    }else

    if(pathname=="/tijiao"){
      // console.log(req.url);
      // res.end("成功接受到请求信息")
      var username = query.username;
      var password = query.password;
      res.end("用户名:"+username+"密码:"+password)
    }else{
      //其他情况，不处理，直接返回
      res.end("请求地址出错")
    }
});
server.listen(4000, 'localhost')