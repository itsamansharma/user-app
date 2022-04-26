import React, { useState } from "react";
import { TextField, Button, Typography, Container, Box } from "@mui/material";
import axios from "axios";
// for React Router
import { Link, useNavigate } from "react-router-dom";

const Login = ({ setUserDetails }) => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user, // if name is changed then all other state is updated by =>triple dot user<=
      [name]: value, // name of input field and its value is updated
    });
  };
  // callRegister = () => {};
  const handelLogin = () => {
    axios
      .post("https://user-app-login.herokuapp.com/login", user)
      .then((res) => {
        alert(res.data.message);
        setUserDetails(res.data.user);
        navigate("/");
      });
  };
  return (
    <Container maxWidth="md" style={{ marginTop: "20vh" }}>
      {console.log("login page")}
      <Box>
        <Typography variant="h2">Login</Typography>
        <Container>
          <TextField
            variant="outlined"
            style={{ margin: "1.5em" }}
            label="Enter email"
            type="text"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
          <TextField
            style={{ margin: "1.5em" }}
            variant="outlined"
            label="Enter password"
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            id="enter password"
          />
        </Container>
        <Container>
          <Button
            style={{ margin: "1.5em" }}
            color="success"
            variant="contained"
            onClick={handelLogin}
          >
            Login
          </Button>
          <Typography
            style={{
              marginTop: "0.8em",
              marginBottom: "0.8em",
              fontSize: "0.8em",
            }}
          >
            New User?
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/register">
            <Button variant="contained">Register</Button>
          </Link>
        </Container>
      </Box>
    </Container>
  );
};

export default Login;
