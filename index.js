const express=require("express")
const app=express();
const studentRoute=require("./controller/studentRoute")
const bodyparser=require("body-parser")
const cors=require("cors")
const mongoose=require("mongoose");
mongoose.set('strictQuery', true)
mongoose.connect("mongodb+srv://test:12345@cluster0.9jgzc9s.mongodb.net/schooldb")


var db=mongoose.connection;

db.on("open",()=>{
    console.log("Connected to Database")
})
db.on("err",()=>{
    console.log("Error ocurred")
})
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({extended:true}));
app.use(cors())
app.use("/studentRoute/",studentRoute)
app.listen(4000,()=>{
    console.log("Server Started at 4000")
})