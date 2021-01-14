const express = require("express");

const app = express();
const PORT = process.env.PORT||3000;

const turtles = [
    {
        name: "Leo",
        isTeenageMutant: true
    },
    {
        name: "Sheldon",
        isTeenageMutant: false
    }
]


app.get("/",(req,res)=>{
    res.send('Welcome to my site!')
})

app.get("/turtles",(req,res)=>{

})

app.listen(PORT, function() {
    console.log(`listening on port ${PORT}`)
})