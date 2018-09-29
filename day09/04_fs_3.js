var fs = require("fs");
//创建目录
fs.writeFile("/Applications/MAMP/htdocs/www/03_course/day09/1.txt","aaa",function(err){
  if(err){
    console.log("创建失败");
    console.log(err)
  }else{
    console.log("创建成功")
  }
})