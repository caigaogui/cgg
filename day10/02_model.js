//引用a.js
var a  = require("/Applications/MAMP/htdocs/www/03_course/day10/a.js")
console.log("module中调用a.js的属性是："+a.a)
console.log("module中调用a.js的方法是：");
a.b();