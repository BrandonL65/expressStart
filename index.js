const express = require("express");
const path = require("path");
const members = require("./Members.js")
const logger = require("./middleware/logger.js")
const app = express();


const PORT = process.env.PORT || 5000;

//INIT middleware 
app.use(logger);

//GET all "/api/members returns JSON"
app.get("/api/members", (req,res) => {
  res.json(members);
})

//GET single member 
app.get("/api/members/:name", (req,res) => {
  let found = members.filter(mem => {
    return mem.name == req.params.name
  })
  if (found.length > 0) {
    res.json(found)
  }
  else {
    res.status(400)
    res.json({"status": "No user found"})
  }
})


//set static folder 
app.use(express.static(path.join(__dirname, "public")))

//Start server
app.listen(PORT, () => {
  console.log("Start");
});