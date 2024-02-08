const express=require("express")
const cors=require("cors")
const mongoose=require("mongoose")
const travelRoute=require("./controller/travelRouter")

const app=express()
app.use(express.json())
app.use(cors())

mongoose.connect("mongodb+srv://akhila2001:akhila123@cluster0.5dg42.mongodb.net/travelDb?retryWrites=true&w=majority",
{useNewUrlParser:true})

app.use("/api/travel",travelRoute)

app.listen(3001,()=>{
    console.log("server running")
})