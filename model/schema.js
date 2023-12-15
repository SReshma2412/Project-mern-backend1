const mongoose=require("mongoose")
const schema=new mongoose.Schema({
    name:{type:String},
    email:{type:String},
    age:{type:Number},
    rollno:{type:String}
},{
    collection:"students"
})

module.exports=mongoose.model("testSchema",schema)