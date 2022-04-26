require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const cors = require("cors");

const path = require("path");
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 9002;

// Connection to mongodb
mongoose.connect(
  "mongodb+srv://user-app-user:ogh4xfTZKk7P8bfK@cluster0.nc1yy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  () => {
    console.log("connected to mongo");
  }
);
// Schema
const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    require: true,
  },
  gender: {
    type: String,
    require: true,
  },
  mobile: {
    type: Number,
    require: true,
  },
  password: {
    type: String,
    required: true,
  },
});
const User = new mongoose.model("User", userSchema);

//Routes

//Login setup
app.get("/", (req, res) => {
  res.json("deploying........");
  console.log("sdvsv");
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  User.collection.findOne({ email: email }, (err, user) => {
    if (user) {
      if (password === user.password) {
        res.send({ message: "login successful", user: user });
      } else {
        res.send({ message: "wrong password" });
      }
    } else {
      res.send({ message: "user not registered" });
    }
  });
});

//Register setup
app.post("/register", (req, res) => {
  const { name, email, age, gender, mobile, password } = req.body;
  User.collection.findOne({ email: email }, (err, user) => {
    if (user) {
      // res.send(console.log("user already present"));
      res.send({ message: "user already prssent" });
    } else {
      const user = new User({
        name,
        email,
        age,
        gender,
        mobile,
        password,
      });
      user.save((err) => {
        if (err) {
          res.send(err);
        } else {
          res.send({ message: "registered succefssfullly" });
        }
      });
    }
  });
});

// ----------deployment---------

//------------dev end ----------
app.listen(PORT, () => {
  console.log(`connected to port ${PORT}`);
});
