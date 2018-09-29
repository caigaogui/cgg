var fs = require("fs");
fs.stat("/Applications/MAMP/htdocs/www/03_course/day09/day01.html",function(err,stats){
  if(err){
    console.log(err)
  }else{
    console.log(stats.isBlockDevice())
  }
})