// Bước 1: Import module http
import { createServer } from 'http';
// var express = require('express')

// express.use();
// import http from 'http'; //babeljs
// Bước 2: Khởi tạo server
var server = createServer(function(req, res){
    // Biến request: là biến lưu trữ thông tin gửi lên của client
    // Biến response: là biến lưu trữ các thông tin trả về cho client
     
    // Thiết lập Header
    res.writeHead(200, {
        "Context-type" : "text/plain"
    });
     console.log('hihi1')
     console.log('hihi2')
     console.log('hihi3')
     console.log('hihi4')
    // Show thông tin
    res.write('Your URL is ' + req.url);
   
    // Kết thúc
    res.end();
});
 
// Bước 3: Lắng nghe cổng 300 thì thực hiện chương trình
server.listen(3000, function(){
    console.log('Connected Successfull!');
});