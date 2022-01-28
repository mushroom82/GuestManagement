"use strict";

const User = require("../../models/user");

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
    },
    register : (req, res)=>{
        res.render("home/register");
    }
};
// 해당 페이지를 rendering 역할을 하는 함수인 hello와 login을===
// output 객체로 전환==========================================끝



const process = {
    login:async(req,res)=>{
        const user = new User(req.body);
        const response =await user.login();
        // console.log(response);
        return res.json(response);

        // user.js로 이동=======================================시작
        // const id = req.body.id,
        // password = req.body.password;

        // const users =  UserStorage.getUsers("id","password");

        // const response = {};

        // if (users.id.includes(id)){
        //     const idx = users.id.indexOf(id);
        //     if (users.password[idx]  === password){
        //         // return res.json({
        //         //     sucess:true,
        //         //     msg : "로그인에 성공하였습니다."
        //         // });
        //         response.sucess = true;
        //         response.msg = "로그인에 성공하였습니다.";
        //         return res.json(response);
        //     }
        // }
        
        // // return res.json({ 
        // //     sucess:false,
        // //     msg : "로그인에 실패하였습니다."
        // // });
        // response.sucess = false;
        // response.msg = "로그인에 실패하였습니다.";
        // return res.json(response);

        // // // console.log(id, password);
        // user.js로 이동=======================================끝
    },
    register:(req,res)=>{
        const user = new User(req.body);
        const response = user.register();
        // console.log(response);
        return res.json(response);
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