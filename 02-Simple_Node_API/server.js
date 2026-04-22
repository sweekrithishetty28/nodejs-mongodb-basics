//Importing the app module

const app=require('./app');

//Starting the server
app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})