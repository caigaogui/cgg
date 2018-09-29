var http = require('http');
var fs =  require("fs")
var server = http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/html;charset=utf-8'
  });
  if (req.url == '/favicon.ico') {
    return;
  };
  if(req.url=="/"){//读取form页面
    fs.readFile("./05_form.html",function(err,data){
        if(err){
          console.log(err);
          res.end("加载页面失败");
          return
        }
        //读取成功，将读取到的数据显示到页面上
        res.end(data);
    })
  }
  if(req.url=="/tijiao"&&req.method.toLocaleLowerCase()=="post"){
    //因为nodejs是单线程非I/O阻塞，为了追求效率，数据是一小段一小段的上传
    //这样就会产生两种状态:正在接收，接收完成
    //提前声明一个变量，用于保存每一次得到的一小段的数据
    var allData = '';
    

    //data表示孩子能在接受数据的状态，
    //chunk表示每次接收到的一小段的数据
    //addListener方法与on方法功能一样
      req.on("data",function(chunk){
        //拼接每次得到的小段数据
        allData+=chunk;
      }) 
    //end表示完全接受完成的状态，当数据全部接受完毕，进入该状态
      req.on("end",function(){
      //进入接受完成状态，说明接受已经接受完毕
      console.log(allData);
      res.end("接受好了")//返回响应
      
      })
  }
});
server.listen(4000, 'localhost')