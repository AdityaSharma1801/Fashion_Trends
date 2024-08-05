const express =  require("express");
const colors = require("colors");
const dotenv = require("dotenv").config();
const morgan = require("morgan");
const rootroute = require ("./routes/rootroute")

const PORT = process.env.PORT || 6000;
const app = express();

app.get('/', (req,res)=>{
    res.send("api is working");
});

app.use('/fashiontrends',rootroute);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`.bgBlue.white)
})