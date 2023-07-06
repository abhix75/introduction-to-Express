/**
 * - Instead of setting up the HTTP server from scratch using JS, developer uses external libraries like ExpressJs.
 * 
 * - NodeJS provides us with a basic setup using which we can actually set up a basic HTTP server without using any 3rd party libraries.
 * 
 * - HTTP is an internal module that is already provided to us by NodeJS and many 3rd parties external libraries depend on these HTTP modules.
 * 
 */

const http = require("http"); // Internal module to set up our own HTTP server

const PORT=3000;
/* 
   Using the createServer function we can actually create a basic HTTP server using the HTTP module
   This function returns a server object, and takes a callback as an argument.
   This function created a server object but didn't start the server
*/

const server = http.createServer(function listener(request,response){
   /**
    *    this callback is a kind of listner() function that is going to collect every 
    *    HTTP request that we will make to our server
    */
   /**
    *   request -> we will see the details of incoming HTTP request  -> object
    *   response -> we will be able to configure what response we need to send for an incoming HTTP request -->object
    * 
    */
//    console.log("Incoming Req :",request);
   // console.log("Outgoing Res :",response);


   if(request.url=='/home'){
      // if we make a request on '/home' path/routes this if() block will be eecuted

      console.log("REQUEST METHOD",request.method);

      /**
       * The First time respone.write() is called, it will send the buffered header information and the first chunk of the body to the
       * client.
       * The second time response.write() is called ,Node JS assumes data will be streamed,a nd send the new data separately.
       * That is , the response is buffered up to the first chunk of the body.
       * Returns true if the entire data was flushed successfully to the kernal buffer.
       * Return false if all or part of the data was queued in user memory.
       * "drain" will be emitted when the buffer is free again.
       * This send a chunk of the response body.
       * This method may be called multiple times to provide successive part of body
       */
       
      response.write("Hi Abhijit ! \n");
      response.write("How are you??\n");
      // response.write("Love You All who al; are reading this notes\n");

      /**
       * whatever your response id ,by default the browser will represent it as a certain set of HTML code. it won't 
       * know where to terminate and where to keep on laoding if you don't do response.end(). The End method causes the web server
       * to stop processing the script and return the current result. the remaining contents of the file are not processed.
       * 
       */
      response.end('Have a nice day');
   }
  
 console.log("Request Recived");// At a particulat time wif someone hits my server, print "Request Recived" in the console.

});

server.listen(PORT,function exec(){
   //Once server.listen() boots up the server on the given port number , this callback exec() will be executed.

console.log(`Server is up and running on PORT : ${PORT}`);
});

/**
 * This server is currently running on my machine. it is not hosted/available on the internet. This server is only accessible from my machine.
 * 
 */

/**
 * The term is Pseudo name for 127.0.0.1, the IP address of 
 * the local computer.This IP address allows the machine to
 * connect to and communicate eith itself. Therefore, localhost
 * (127.0.0.1) is used to establish an IP connection to the same 
 * device used by the end user.
 */
