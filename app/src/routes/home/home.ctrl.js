"use strict";

// 해당 페이지를 rendering 역할을 하는 함수인 hello와 login을===시
// output 객체로 전환==========================================직
// const hello = (req, res)=>{
//     // res.send("여기는 루트입니다!!!!");
//     res.render("home/index");
// };

// const login = (req, res)=>{
//     // res.send("여기는 루트입니다!!!!");
//     res.render("home/login");
// };
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓output 객체로 전환↓↓↓↓↓↓↓↓↓↓↓↓↓↓
const output = {
    hello : (req, res)=>{
        // res.send("여기는 루트입니다!!!!");
        res.render("home/index");
    },
    login : (req, res)=>{
        // res.send("여기는 루트입니다!!!!");
        res.render("home/login");
    }
};
// 해당 페이지를 rendering 역할을 하는 함수인 hello와 login을===
// output 객체로 전환==========================================끝

const process = {
    login:(req,res)=>{
        console.log(req.body);
    }
};


//hello와 login을= output 객체로 전환하면서 export도 변환===시작
// 상수를 외부에서 사용할 수 있게 exports
// module.exports = {
//     hello,
//     login
// };
//↓↓↓↓↓↓↓↓↓↓↓↓↓↓output 객체로 전환↓↓↓↓↓↓↓↓↓↓↓↓↓↓
module.exports = {
    output,
    process
};
//hello와 login을= output 객체로 전환하면서 export도 변환===끝