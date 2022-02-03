// const {Pool}= require('pg');
const {Client}= require('pg');

const db = new Client({
  user : process.env.DB_USER,
  host : process.env.DB_HOST,
  database : process.env.DB_DATABASE,
  password: process.env.DB_PASSWORD,
  port : 5431
});

// let button = document.querySelector('loginBtn');
// db.connect(err=>{
//   if(err) console.log(err);
//   else{
//     console.log("데이터 베이스 연결 성공");
//   }
// });
db.connect();

// db.query("select * from public.users", (err,res)=>{
//   if(err) console.log(err);

//   if(err!=null){
//     console.log(err);
//   }

//   // res.send({"data":res.rows});
//   console.log(res.rows);   
  
//   console.log(res.rowCount);
// })

module.exports = db;
