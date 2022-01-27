"user strict";

// 해당 소스는 Front End입니다!!!
const id = document.querySelector("#id"),
 password = document.querySelector("#password"),
 loginBtn = document.querySelector("button");


loginBtn.addEventListener("click",login);

function login(){

    const req = {
        id : id.value,
        password : password.value
    }    
    // console.log(req,JSON.stringify(req));
    // console.log(JSON.stringify(req));

    fetch("/login",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.sucess) {
            location.href = "/"
        }
            else {
                alert(res.msg);
            }
    })
    .catch((err)=>{
        // console.error(new Error("로그인 중 에러 발생"));        
        console.error("로그인 중 에러 발생");
    });

    // // .then((res)=>console.log(res));
    // //↓↓↓↓↓↓↓↓↓↓↓↓단축↓↓↓↓↓↓↓↓↓↓↓↓↓↓
    // .then(console.log);
    
}