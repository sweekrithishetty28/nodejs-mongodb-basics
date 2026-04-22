require("dotenv").config()

const express=require('express');
const noteModel=require('./models/note.model');
const app=express();

app.use(express.json());

app.post('/notes',async(req,res)=>{
    const data=req.body;
    const note =await noteModel.create({
        title:data.title,
        description:data.description
    });
    res.status(201).json({
        message:"Note created Successfully",
        notes:note
   

    })
});

app.get('/getNotes',async(req,res)=>{
 const notes=await noteModel.find();
 res.status(200).json({
     message:"Notes retrieved Successfully",
     notes:notes
 })

})

app.patch('/updateNote/:id',async(req,res)=>{
    const id=req.params.id.trim();
    const description=req.body.description;
    await noteModel.findOneAndUpdate({_id:id},{description:description});
    res.status(200).json({
        message:"Note updated Successfully",
        
    })
})

app.delete('/deleteNote/:id',async(req,res)=>{
    const id=req.params.id;
    await noteModel.findByIdAndDelete({
        _id:id
    });
    res.status(200).json({
        message:"Note deleted Successfully"
    })
})

module.exports=app;