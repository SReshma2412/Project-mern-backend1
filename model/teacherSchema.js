const mongoose=require("mongoose")
const teacherschema=new mongoose.Schema({
    name:{type:String},
    subject:{type:String},
   
},{
    collection:"teacher"
})

module.exports=mongoose.model("teacherSchema",teacherschema)