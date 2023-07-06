const express = require('express');

const PORT=3000;

const app = express(); // create express serever object

app.get('/home',function exec(request,res){
             res.json({
                message:"OK GET"
             })
});

app.post('/home',function exex2(request,res){
  
    res.json({
        message:"OK post"
     })
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})
