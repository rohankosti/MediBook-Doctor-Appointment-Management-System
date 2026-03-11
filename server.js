import express from "express";
import connectdb  from "./config/database.js";
import WEBROUTES from "./routes/WEB/index.js"
import APIROUTES from "./routes/API/index.js"
const app = express();

// app.use(express.static("public"))
app.use(express.json())
app.use(express.urlencoded({extends:true}))

// EJS Setup
app.set("view engine","ejs");
app.set("views","views"); 

// Web Routes
app.use(WEBROUTES)
// API Routes
app.use(APIROUTES)
//Mongo Connection
connectdb();

app.listen(3000,(req,res)=>{
    console.log(`Server are on in http://localhost:3000`);
    
});