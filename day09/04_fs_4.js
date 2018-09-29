var fs = require("fs");

fs.readdir("/Applications/MAMP/htdocs/www/03_course/day09",function(err,files){
  if(err){
    console.log(err)
  }else{
    console.log(files)
  }
})
var result =fs.readdirSync("/Applications/MAMP/htdocs/www/03_course/day09")
console.log(result)