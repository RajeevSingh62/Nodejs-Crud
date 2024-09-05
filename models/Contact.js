const mongoose=require ("mongoose");

const contactSchema=new mongoose.Schema({
    firstName:{
        type:String,
        require:[true,"first name is required"],
        minlength:3,
        maxlength:20,
        trime:true,
       
    },
    lastName:{
        type:String,
     require:true
    },
    emailAddress:{
        type:String,
        require:true,
        
    }

})
module.exports=mongoose.model("Contact",contactSchema);