const mongoose=require("mongoose")

const travelSchema=new mongoose.Schema(
    {
        Name:{
            type:String,
            required:true
        },
        PhnNo:{
            type:String,
            required:true
        }, 
        Address:{
            type:String,
            required:true
        },
        Email:{
            type:String,
            required:true
        },
        Place:{
            type:String,
            required:true
        }
    }
)

module.exports=mongoose.model("travel",travelSchema)