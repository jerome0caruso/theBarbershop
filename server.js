const express = require("express");
const path = require("path");
const app = express();

app.use("/static", express.static(path.resolve(__dirname, "frontend", "static")));

const publicDir = require('path').join(__dirname,'/public'); 
app.use(express.static(publicDir)); 

//always send index.html
app.get("/*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "index.html"));
}); 


app.listen(process.env.PORT || 3000, () => console.log("Server is running!"));
