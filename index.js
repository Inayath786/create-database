const express = require('express');
const { resolve } = require('path');
const {createItem,readItems,updateItem,deleteItem}=require("./initDB");


const app = express();
const port = 3010;
app.use(express.json());

app.use(express.static('static'));

app.get("/items",(req,res)=>{
  readItems((err,rows)=>{
    if(err){
      res.status(500).send(err.message)
    }
    else{
      res.status(200).json(rows)
    }
  })
})

app.post("/items",(req,res)=>{
  const {name,description}=req.body
  createItem(name,description,(err,data)=>{
    if(err){
      res.status(500).send(err.message)
    }
    else{
      res.status(201).send("Item added id:"${data,id})
    }
  })
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
