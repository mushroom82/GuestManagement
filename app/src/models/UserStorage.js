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

        static getUsers(...fields) {
                // const users = this.#users;
                const newUsers = fields.reduce((newUsers, field) => {
                        if (users.hasOwnProperty(field)) {
                                newUsers[field] = users[field];
                        }
                        return newUsers;
                }, {});
                return newUsers;
        }

        static getUserInfo(id) {
                return fs.readFile("./src/databases/users.json")
                        .then((data)=>{
                                return this.#getUserInfo(data, id);
                        })
                // .catch(err)=>console.error(); //아래로 축약
                .catch(console.error);
        }

        static save(userInfo) {
                // const users = this.#users;
                users.id.push(userInfo.id);
                users.name.push(userInfo.name);
                users.password.push(userInfo.password);

                return {
                        sucess: true
                };
        }
}

module.exports = UserStorage;