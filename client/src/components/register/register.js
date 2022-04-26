import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
/////////////////for material ui
import { TextField, Button, Typography, Container } from "@mui/material";

const Register = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    age: "",
    gender: "",
    mobile: "",
    reEnterPassword: "",
  });
  // const history = useHistory();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // if name is changed then all other state is updated by =>triple dot user<=
      [name]: value, // name of input field and its value is updated
    });
  };

  const handelRegister = () => {
    const { name, email, password, reEnterPassword } = user;
    if (name && email && password && password === reEnterPassword) {
      axios
        .post("https://user-app-login.herokuapp.com/register", user)
        .then((res) => {
          alert(res.data.message);
          navigate("/login");
        });
    } else alert("invalid post");
  };
  console.log("register page");
  return (
    <Container style={{ marginTop: "20vh" }}>
      {/* {console.log("user", user)} */}
      <Typography variant="h3">Register Form </Typography>
      <Container style={{ maxWidth: "45em" }}>
        <TextField
          variant="outlined"
          label="Enter name"
          onChange={handleChange}
          type="text"
          name="name"
          value={user.name}
          style={{ margin: "0.5em" }}
        />
        <TextField
          variant="outlined"
          label="Enter Email"
          onChange={handleChange}
          type="email"
          name="email"
          value={user.email}
          style={{ margin: "0.5em" }}
        />
        <TextField
          variant="outlined"
          label="Enter Age"
          onChange={handleChange}
          type="number"
          name="age"
          value={user.age}
          style={{ margin: "0.5em" }}
        />
        <TextField
          variant="outlined"
          label="Enter gender"
          onChange={handleChange}
          type="text"
          name="gender"
          value={user.gender}
          style={{ margin: "0.5em" }}
        />
        <TextField
          variant="outlined"
          label="Enter Mobile NUmber"
          onChange={handleChange}
          type="number"
          name="mobile"
          value={user.mobile}
          style={{ margin: "0.5em" }}
        />
        <br />
        <TextField
          variant="outlined"
          label="Password"
          onChange={handleChange}
          type="password"
          name="password"
          value={user.password}
          style={{ margin: "0.5em" }}
        />
        <TextField
          variant="outlined"
          label="Re-Enter Password"
          onChange={handleChange}
          type="password"
          name="reEnterPassword"
          value={user.reEnterPassword}
          style={{ margin: "0.5em" }}
          placeholder="re-enter password"
        />
      </Container>
      <Container>
        <Button
          variant="contained"
          style={{ margin: "0.5em" }}
          color="primary"
          onClick={handelRegister}
        >
          Register
        </Button>
        <Link to="/login" style={{ textDecoration: "none", margin: "0.5em" }}>
          <Button variant="contained" color="success">
            login
          </Button>
        </Link>
      </Container>
    </Container>
  );
};

export default Register;
