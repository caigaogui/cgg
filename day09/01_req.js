var http = require("http");
var srever = http.createServer(function(req,res){
  //console.log(req)
  if(req.url=="/favicon.ico"){
    //如果请求时/favicon.ico,直接返回，不处理
    return;
  }
  console.log(req.url);
  /* 
  req.url可以获取请求路径与参数，不能获取锚点
  获取到的是一个URL格式的字符串
  */
  //res.end()结束请求，不需要向页面发送任何数据
  //通常用于调试
  res.end();
})
srever.listen(4000,"localhost");