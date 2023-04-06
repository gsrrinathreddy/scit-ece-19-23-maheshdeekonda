import express from "express";
const app = express();
app.get ("/",(reg,res)=>{
    res.send("My First get api is ready")
})
app.listen(8000,()=>{
    console.log("My Server is running on port 8000")
   })

   app.get("/Aboutus",(reg,res)=>{
    res.json({
        name:"mahesh"
    })
   })
    
   app.get("/Skills",(reg,res)=>{
    res.json({
        Frontend:"Reactjs"
         
    })
   })

   app.get("/Projects",(reg,res)=>{
    res.json({
        Frontend:"full stack"
         
    })
   })


   app.get("/Qualifications",(reg,res)=>{
    res.json({
        Btech:"Sree chaitanya Institute of Technological Sciences"
         
    })
   })

   app.get("/contactme",(reg,res)=>{
    res.json({
        Email:"maheshdeekonda45@gmail.com"
        
         
    })
   })




    


