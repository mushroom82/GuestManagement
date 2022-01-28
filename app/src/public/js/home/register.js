"user strict";

// 해당 소스는 Front End입니다!!!
const id = document.querySelector("#id"),
 name = document.querySelector("#name"),
 password = document.querySelector("#password"),
 confirmPassword = document.querySelector("#confirm-password"),
 registerBtn = document.querySelector("#button");

registerBtn.addEventListener("click",register);

function register(){

    const req = {
      id: id.value,
      name: name.value,
      password: password.value,
      confirmPassword: confirmPassword.value,
      password: password.value
    }



    fetch("/register",{
        method:"POST",
        headers:{
            "Content-Type" : "application/json",
        },
        body:JSON.stringify(req),
    })
    .then((res)=>res.json())
    .then((res)=>{
        if (res.sucess) {
            location.href = "/login"
        }
            else {
                alert(res.msg);
            }
    })
    .catch((err)=>{   
        console.error("회원가입 중 에러 발생");
    });
}