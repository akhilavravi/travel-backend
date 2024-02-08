const express=require("express")
const travelModel=require("../models/travelmodel")

const router=express.Router()

router.post("/add",async(req,res)=>{
    let data=req.body       //reading value
    let travel=new travelModel(data)
    let result=await travel.save()

    res.json({
        status:"success"
    })
})

router.get("/viewall",async(req,res)=>{
    let data=await travelModel.find()
    res.json(data)
})



module.exports=router