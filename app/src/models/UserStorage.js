"use strict";

const { json } = require("body-parser");
// const fs = require("../databases/kim9");
const fs = require("fs").promises;

class UserStorage {
        //class 외부에서 해당 변수를 인스턴스화(new class명) 없이 클래스명.변수명으로 쓰기 위해서는 static로 정적변수 선언해야 함
        // #은 public 변수에서 private 변수로 바꿔주는 문법 : 외부에서 불러올 수 없음
        // static# users = {
        //         id: ["kim9", "psj"],
        //         password: ["q1w2e3", "q1w2"],
        //         name: ["김도현", "박세정"]
        // };

        static #getUserInfo(data, id){
                const users = JSON.parse(data);
                const idx = users.id.indexOf(id);
                const usersKeys = Object.keys(users);
                const userInfo = usersKeys.reduce((newUser, info) => {
                        newUser[info] = users[info][idx];
                        return newUser;
                }, {});

                return userInfo;
        }

        static #getUsers(data, isAll, fields){
                const users = JSON.parse(data);
                if (isAll) return users;

                const newUsers = fields.reduce((newUsers, field) => {
                        if (users.hasOwnProperty(field)) {
                                newUsers[field] = users[field];
                        }
                        return newUsers;
                }, {});
                return newUsers;
        }

        static getUsers(isAll, ...fields) {
                return fs.readFile("./src/databases/users.json")
                        .then((data)=>{
                                return this.#getUsers(data, isAll, fields);
                        })
                // .catch(err)=>console.error(); //아래로 축약
                .catch(console.error);
        }

        static getUserInfo(id) {
                return fs.readFile("./src/databases/users.json")
                        .then((data)=>{
                                return this.#getUserInfo(data, id);
                        })
                // .catch(err)=>console.error(); //아래로 축약
                .catch(console.error);
        }

        static async save(userInfo) {
                // const users =await this.getUsers("id","password","name");    //모든 값을 가져올 떄는 아래로 축약
                const users =await this.getUsers(true);
                // console.log(users);
                if (users.id.includes(userInfo.id)){
                        // throw Error("이미 존재하는 아이디입니다!");  //아래와 같이 에러메시지를 던져야 문자열로 사용자에게 뿌려짐
                        throw "이미 존재하는 아이디입니다!";
                }

                // data 추가
                users.id.push(userInfo.id);
                users.password.push(userInfo.password);
                users.name.push(userInfo.name);
                fs.writeFile("./src/databases/users.json", JSON.stringify(users));

                return {sucess:true};
        }
}

module.exports = UserStorage;