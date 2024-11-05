const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
app.use(express.json());

const users = [
  {
    id: 1,
    name: "Bat",
  },
  {
    id: 2,
    name: "Bold",
  },
  {
    id: 3,
    name: "ANu",
  },
];

app.get("/users", (req, res) => {
  const token = req.headers.authorization;
  console.log(token);
  jwt.verify(token, "secret", (err) => {
    if (err) {
      res.send("invalid toke");
    }
  });
  if (token) {
    res.send(users);
  } else {
    res.send("ajillahgui bn");
  }
});

app.post("/login", (req, res) => {
  const body = req.body;
  const token = jwt.sign(body, "secret");
  console.log(body);
  res.send(token);
});

app.listen(8080, console.log("server is running"));
