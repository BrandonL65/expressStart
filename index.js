const express = require("express");
const path = require("path");
const members = require("./Members.js")
const logger = require("./middleware/logger.js")
const app = express();


const PORT = process.env.PORT || 5000;

//INIT middleware 
app.use(logger);
//GET "/api/members returns JSON"
app.get("/api/members", (req,res) => 
{
  res.json(members);
})
 
//set static folder 
app.use(express.static(path.join(__dirname, "public")))

//Start server
app.listen(PORT, () => {
  console.log("Start");
});