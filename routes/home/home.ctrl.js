"use strict";

const hello = (req, res)=>{
    // res.send("여기는 루트입니다!!!!");
    res.render("home/index");
};

const login = (req, res)=>{
    // res.send("여기는 루트입니다!!!!");
    res.render("home/login");
};

// 상수를 외부에서 사용할 수 있게 exports
module.exports = {
    hello,
    login
};