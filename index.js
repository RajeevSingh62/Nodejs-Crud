const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');




//middleware
const app=express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

const contact=require("./routes/contact");
app.use("/api",contact);



async function connectDB(){
  try {
    await mongoose.connect("mongodb://localhost:27017/Express-Crud", {
        // useNewUrlParser: true,
        // useUnifiedTopology: true
    });
    
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
}
connectDB();




app.listen(7000,()=>{
    console.log("server started succesful");
})