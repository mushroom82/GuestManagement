
// const {Client}= require('pg');
const {Pool}= require('pg');

const pg = new Pool({
  user:'postgres',
  host:'172.17.101.57',
  database : 'postgres',
  password: 'SeAH1234',
  port : 5431
})
// let button = document.querySelector('loginBtn');
pg.connect(err=>{
  if(err) console.log(err);
  else{
    console.log("데이터 베이스 연결 성공");
  }
})

// function select(query){
//   pg.query("query", (err,res)=>{//select * from public.user
//     if(err) console.log(err);
  
//     if(err!=null){
//       console.log(err);
//     }
  
//     // res.send({"data":res.rows});
//     console.log(res.rows);   
    
//     console.log(res.rowCount);
//     alert(res.rowCount);
//     return res.rowCount;

//   })
// }

pg.query("select * from public.user", (err,res)=>{
  if(err) console.log(err);

  if(err!=null){
    console.log(err);
  }

  // res.send({"data":res.rows});
  console.log(res.rows);   
  
  console.log(res.rowCount);
})

// pg.query("insert into public.user(user_id, user_pw, user_name) values('1','2','3')", (err,res)=>{
//   if(err) console.log(err);

//   if(err!=null){
//     console.log(err);
//   }

//   // res.send({"data":res.rows});
//   console.log(res.rows);   
  
//   console.log(res.rowCount);
// })