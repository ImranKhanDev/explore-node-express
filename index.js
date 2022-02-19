const express = require("express");
const cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());
app.use(cors());
app.get("/", (req, res) => {
  res.send("  DreamCoderr to write the FIRST NODE");
});

const users = [
  {
    id: 1,
    name: "imran",
    email: "imran@gmail.com",
    phone: "01814688895",
  },
  {
    id: 2,
    name: "tamzid",
    email: "tamzidVai@gmail.com",
    phone: "01856118891",
  },
  {
    id: 3,
    name: "ridhi",
    email: "ridhi@gmail.com",
    phone: "0176532680",
  },
  {
    id: 4,
    name: "tamrid",
    email: "tamzid@gmail.com",
    phone: "01814688891",
  },
  {
    id: 5,
    name: "khan",
    email: "khan@gmail.com",
    phone: "01814688891",
  },
];

app.get("/users", (req, res) => {
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) => {
      user.name.toLocaleLowerCase().includes(search);
      res.send(searchResult);
    });
  } else {
    res.send(users);
  }
});
//app.Method
app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  console.log("hitting on server", req.body);
  res.json(newUser);
});

// using id

app.get("/users/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Sserver listenting on port ", { port });
});
