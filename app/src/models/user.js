"user strict";

const { response } = require("express");
const UserStorage = require("./UserStorage");

class User {

    constructor(body) {
        this.body = body;
    }
    async login() {
        // const users = UserStorage.getUsers("id","password");
        // const {
        //     id,
        //     password
        // } = UserStorage.getUsers("id", "password");

        // const {id,password} = UserStorage.getUserInfo(this.body.id);
        const {id,password} = await UserStorage.getUserInfo(this.body.id);

        if (id) {
            if (id === this.body.id && password === this.body.password){
                return{sucess : true};
            }
            return {sucess : false, msg : "비밀번호가 틀렸습니다!"};
        }
        return {sucess : false, msg : "존재하지 않는 계정입니다!"};
    }
    async register(){
        try {
            const response = await UserStorage.save(this.body);
            return response;
        }   catch(err){
            return {sucess:false, msg:err};
        }
    }
}

module.exports = User;