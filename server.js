import express from "express";
import connectdb  from "./config/database.js";
const app = express();

app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extends:true}))



connectdb();
app.listen(3000,(req,res)=>{
    console.log(`Server are on in http://localhost:3000`);
    
});