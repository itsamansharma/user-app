import React from "react";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  Container,
  Typography,
} from "@mui/material";

const Homepage = ({ setLogout, userDetails }) => {
  console.log("homepage");
  return (
    <>
      <Container>{/* <div>homepage</div> */}</Container>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <Typography sx={{ fontSize: 50 }} gutterBottom>
            Home page
          </Typography>

          <Typography
            style={{ marginBottom: 10, textAlign: "left" }}
            variant="h5"
          >
            Hello {userDetails.name}
          </Typography>
          <Typography
            style={{ marginBottom: 10, textAlign: "left" }}
            variant="h5"
          >
            Your Age is {userDetails.age}
          </Typography>
          <Typography
            style={{ marginBottom: 10, textAlign: "left" }}
            variant="h5"
          >
            You are {userDetails.gender}
          </Typography>
          <Typography
            style={{ marginBottom: 10, textAlign: "left" }}
            variant="h5"
          >
            Your Mobile number is {userDetails.mobile}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={() => setLogout({})}> Logout </Button>
        </CardActions>
      </Card>
    </>
  );
};

export default Homepage;
