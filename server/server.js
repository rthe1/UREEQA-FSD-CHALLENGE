
const express = require("express");
const bodyParser = require('body-parser')
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
 


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.post("/post", (req, res) => {
  const tmp = req.body.num

  const two = (n) => {
    return n * 2
  }

  console.log(two(tmp))
  res.send(`number = ${two(tmp)}`);
});


  
const PORT = process.env.PORT || 8080;
  
app.listen(PORT, console.log(`Server started on port ${PORT}`));