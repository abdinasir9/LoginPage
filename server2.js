const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded ({extended:true}))
app.use(express.static('public'));


let user = [{
    "email":"joesample",
    "password":"welcome21",
    "age":"34"
}];
//get request



app.get("/user", (req, res) => {
  res.sendFile(__dirname + "/index.html");
  console.log(user)
});

app.post("/user", (req, res) => {
user = req.body;
res.send(user)
});

app.listen(3000);
