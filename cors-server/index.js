const express=require('express');
const app=express();
const PORT=5001;
app.get('/',(req,res)=>{
res.send("Welcome to CORS server! 😁")
})
app.get('/candy',(req,res)=>{
res.json({'candy':'bubble-gum'})
})
app.listen(PORT,()=>console.log(`server running on port ${PORT}`))
