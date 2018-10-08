var express = require('express');
var app = express();
app.listen(4000);

//设置视图引擎
app.set('view engine','ejs');


var data={stus:['jack','rose','mike','jerry']};

//处理请求
app.get('/show',function(req,res){
  res.render('lianxi01',data);
});

app.get('/',function(req,res){
  res.send('这是首页');
});


