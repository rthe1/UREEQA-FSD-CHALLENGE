
const express = require("express");
const bodyParser = require('body-parser');
const app = express();

// Middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));



app.get("/", (req, res) => {
  res.send("Welcome Home");
});

app.post("/post", (req, res) => {

  const num = req.body.num

  function eratosthenes(n) {
    var array = [];
    var tmpArray = []; // for containing unintentionally deleted elements like 2,3,5,7,...
    var maxPrimeFactor = 0;
    var upperLimit = Math.sqrt(n);
    var output = [];

    // Eratosthenes algorithm to find all primes under n

    // Make an array from 2 to (n - 1)
    //used as a base array to delete composite number from
    for (var i = 2; i < n; i++) {
      array.push(i);
    }

    // Remove multiples of primes starting from 2, 3, 5,...
    for (var i = array[0]; i < upperLimit; i = array[0]) {
      removeMultiples:
      for (var j = i, k = i; j < n; j += i) {
        var index = array.indexOf(j);
        if (index === -1)
          continue removeMultiples;
        else
          array.splice(index, 1);
      }
      tmpArray.push(k);
    }
    array.unshift(tmpArray);

    if (array.length % 2 === 0) {
      output.push(array[array.length / 2])
      output.push(array[array.length / 2 + 1])
    } else {
      output.push(array[array.length / 2 + .5])

    }

    return output;
  }

  res.send(`number = ${eratosthenes(num)}`);
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));