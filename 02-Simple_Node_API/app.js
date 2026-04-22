//creating the server
const express=require('express');
const app=express();

const notes=[];

//Middleware to parse JSON data
app.use(express.json());

//Creating the notes
app.post("/notes",(req,res)=>{
    notes.push(req.body);
    console.log(notes);
    res.status(201).json({
        message:"Note created successfully"
    })
});

//Retriving the Notes
app.get("/getNotes",(req, res)=>{
    res.status(200).json({
        message:"Notes retrived successfully",
        notes:notes
    })

});
//Updating the notes by index
app.patch("/updateNote/:index",(req,res)=>{
    const index=req.params.index;
    const description=req.body.description

    notes[index].description=description

    res.status(200).json({
        message:"Note updated successfully",
        note:notes[index]
    })
});

//Deleting the notes by index(1)

app.delete("/deleteNote/:index",(req,res)=>{
    const index=req.params.index /* 1*/

    delete notes[index];
    
    res.status(200).json({
        message:"Note deleted successfully"
    })
});

module.exports=app;