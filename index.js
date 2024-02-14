
import  express from "express";

const app = express();
const PORT =7000;

app.get('/', ( req,res)=>{
    res.status(201).send({
        Name:"Raji",
        Id:" @0073",
         
        
    })
})

app.listen(PORT,()=>console.log(`Running Successfully ${PORT}`));


