//creating server and assigning the app(3k -8k)
const express=require('express')
const app=express()
const port=5000;
//end point here is 'post'
app.use('/myapi',(req,res)=>{
    res.send("Hello World!");
})

app.listen(port,()=>{
    console.log("server listening to 5000")
})