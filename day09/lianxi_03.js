var fs = require('fs');
fs.readdir("/Applications/MAMP/htdocs/www/03_course/day09/a",function(err,files){
  if(err){
    console.log(err)
    return;
  }else{
    //异步导致循环出错

    //console.log(files[1].is)
    // for(var i = 0;i<=files.length;i++){
    //   fs.stat("/Applications/MAMP/htdocs/www/03_course/day09/a/"+files[i],function(err,stats){
    //     if(stats.isFile()){
    //       console.log(files[i]+"是文件")
    //     }else{
    //       console.log(files[i]+"是文件夹")
    //     }
        
     // })
    //}
    
    //递归函数
    var c =[];
    var b =[];
    (function a(i){
      //先判定递归结束的条件
      if(i==files.length){
        //当i与数组长度一样，说明遍历结束
        return;
      }
      //遍历没有结束，检查每一个元素的状态
      fs.stat("/Applications/MAMP/htdocs/www/03_course/day09/a/"+files[i],function(err,stats){
          if(err){
            console.log(err)
            return;
          }
          if(stats.isFile()){
              b.push(i);
              if(b.length==1){
              console.log("文件有")
            }
              console.log(files[i])
          }else{
            c.push(i);
            if(c.length==1){
            console.log("文件夹有")
          }
              console.log(files[i])
           }
             a(++i);
         })
     
      //自调
     
    })(0)

  }
})