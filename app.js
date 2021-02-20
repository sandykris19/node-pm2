const express = require("express");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  let rn = Math.floor(Math.random() * 100);
  res.json({ randomNumber: rn });
});

const dowork = (duration) => {
  let start = Date.now();
  while (Date.now() - start < duration) {}
};

app.get("/dowork", (req, res) => {
  let duration = parseInt(req.query.work) || 0;
  dowork(duration);
  res.send("work done");
});

app.get("/isprime", (req, res) => {
  let number = parseInt(req.query.number);
  let [isprime, time] = isPrime(number);
  res.json({ number: number, isPrime: isprime, time: time });
});

const isPrime = (input) => {
  let startTime = new Date();
  let endTime = new Date();
  let isprime = true;
  for (let i = 2; i < input; i++) {
    // console.log(i);
    if (input % i === 0) {
      console.log("in the primeno");
      isprime = false;
      break;
    }
  }
  if (isprime) endTime = new Date();

  return [isprime, endTime.getTime() - startTime.getTime()];
};

//test = 2478373

app.listen(process.env.PORT || 4000, () => {
  console.log("Listening at port 4000");
});
