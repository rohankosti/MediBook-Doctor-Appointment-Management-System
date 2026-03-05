import { json, urlencoded } from "express";
import express from express;
const app = express();

app.use(json())
app.use(urlencoded())
// app.use(sta())

app.listen(3000,(req,res)=>{
    console.log(`Server are on in http://localhost:3000`);
    
})