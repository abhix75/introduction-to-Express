const express = require('express');

const PORT=3000;

const app = express(); // create express serever object

//Middlewares-1

const mylogger = (req,res,next) =>{
    console.log("Loggin From Middle 1 ");
    return  res.json({     
        msg:'Done from Middleware 1'
    })
    next();//calss the next middlewares. if yoy dont call the next() the request not be forwarded from one middlewarse to another middlewasres

    /**
     * Print only `Logging from Middleware 1` in the console  and display `{"msg: "Done from Mioddlewares 1"}` in the browser.
     * Because it return sJSON from the response , it doesnot forward your request to the next middle wares because nect() was
     * never called.it is important to set the 'return' keyword otherwise it throw an Error:'Can't set header after they are sent to the client'.
     * 
     */
}

//Middlewares-2
const extlogger = (req,res,next) =>{
    console.log("Logging From Middlewares 2 ");
    next();//call the next middlewares
};

//Middelwares-3 // controller
/**
 * Use Cases of controller
 * - forwarding reqs to the backend logic(models)
 * - it prepares the response object. it forms how ur response should look in case of success and failure. 
 *
 */
app.get('/home',mylogger,extlogger,function exec(req,res){
    /**
     * This is the last Middlewares and it also acts as a controller because the last middleware is the one that finally send requests
     * to the backend and it doesnot call any other middlewares.Whatever response it got from the backend, it simply send it to the client as a response.
     * 
     * If no modification are made to the req and res object, eg. in mylogger and extloger middlewares, the same request object and response object is passed
     */
    console.log("Last Middlewares")
             res.json({
        msg:'Done from ALL'
    })
});

app.post('/home',(req,res)=>{
  
    res.json({
        message:"OK post"
     })
});

app.listen(PORT,()=>{
    console.log(`Server is up and running on PORT: ${PORT}`);
})
