var http = require('http');
var fs=require('fs');
var url=require('url');
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'texthtml;charset=utf-8'
  });

  if (req.url == '/favicon.ico') {
    return;
  }

  //使用url模块,将字符串格式的请求地址转换为对象,
  //并获取pathname
  var pathname=url.parse(req.url).pathname;

  //如果是/请求,将pathname重新赋值为/index.html
  if(req.url=='/'){
    pathname1='/index.html';
  }
  //根据pathname读取project文件夹下的内容
  fs.readFile('/Applications/MAMP/htdocs/www/03_course/day10/project'+pathname1,function(err,data){
    if(err){
      console.log(err);
      return;
    }
    res.end(data);
  })

});
server.listen(4000, 'localhost')