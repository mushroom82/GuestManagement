"use strict";

const db = require("../config/db");

class UserStorage {
        static getUsers(isAll, ...fields) {}

        static getUserInfo(id) {
                return new Promise((resolve, reject) =>{
                        const sql = "select id, psword as password from public.users where id = $1;";
                        db.query(sql, [id], (err, data)=>{
                                if (err) reject(`${err}`);
                                console.log(data);
                                resolve(data.rows[0]);
                        }) ;
                });
        }

        static async save(userInfo) {
                return new Promise((resolve, reject) =>{
                        // console.log(userInfo.id, userInfo.name, userInfo.password);
                        const sql = "insert into public.users(id, name, psword) values($1, $2, $3);";
                        // console.log(userInfo.id, userInfo.name, userInfo.password);
                        db.query(sql, [userInfo.id, userInfo.name, userInfo.password], (err)=>{
                                if (err) reject(`${err}`);
                                resolve({success:true});
                        }) ;
                });
        }
}

module.exports = UserStorage;