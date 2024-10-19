require('dotenv').config()
const express=require('express');
// const port=4000;
const app=express();
app.get('/',(req,res)=>{
    res.send('hello world');
});
app.get('/twitter',(req,res)=>{
res.send('swarnima.com');
});
app.get('/login',(req,res)=>{
    res.send('<h1>please login</h1>');
});
app.listen(process.env.PORT,()=>{
console.log(`app is listening on port ${process.env.PORT}`);
});
