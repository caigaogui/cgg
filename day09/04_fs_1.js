var start = new Date();
var fs = require("fs");
console.log(1)
fs.readFile("/Applications/MAMP/htdocs/www/03_course/day09/day01.html","utf-8",function(err,data){
  console.log(2)
  if(err){
    console.log(err);
  }else{
    console.log(data)
  }
})
console.log(3)
//同步的读取文件
var result = fs.readFileSync("/Applications/MAMP/htdocs/www/03_course/day09/day01.html","utf-8");
var end = new Date();
console.log("程序一共花了"+(end-start)+"ms")