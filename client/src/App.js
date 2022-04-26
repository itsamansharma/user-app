import "./App.css";
import Homepage from "./components/homepage/homepage";
import Login from "./components/login/login";
import Register from "./components/register/register";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";

function App() {
  const [user, setUserLogin] = useState();

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            exact
            path="/"
            element={
              user && user._id ? (
                <Homepage userDetails={user} setLogout={setUserLogin} />
              ) : (
                <Login setUserDetails={setUserLogin} />
              )
            }
          />
          {/* <Route exact path="/" element={<Homepage />}></Route> */}
          <Route
            path="/login"
            element={<Login setUserDetails={setUserLogin} />}
          ></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
