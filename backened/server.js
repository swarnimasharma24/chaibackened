const express=require("express");
const app=express();
// app.get('/',(req,res)=>{
// res.send('Server is ready');
// });
//get a list of five jokes
app.get('/jokes',(req,res)=>{
const jokes=[
    {
      id:1,
      title:"A joke",
      content:"this is joke"
    },
    {
        id:2,
        title:"A joke",
        content:"this is jokeu"
      },
      {
        id:3,
        title:"A new joke",
        content:"this is jokeee"
      },
      {
        id:4,
        title:"A diff joke",
        content:"this is joker"
      },
      {
        id:5,
        title:"A best joke",
        content:"this is jokey"
      },
];
res.send(jokes);
});
const port=process.env.PORT||3000;
app.listen(port,()=>{
 console.log(`serve at http://localhost:${port}`);
});