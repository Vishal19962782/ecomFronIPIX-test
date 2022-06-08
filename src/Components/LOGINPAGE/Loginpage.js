import {
  Box,
  Button,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import BaseAxiosApi from "../../API/BaseAxiosApi";

function Loginpage() {
  const navigate=useNavigate();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const HandleLogin = () => {
    BaseAxiosApi.post('/auth/login',{
        username,
        password
    }).then(({data})=>{
      localStorage.setItem('token',data.token);
        Swal.fire({
            title: "Success",
            text: "Login Successfully",
        });
        navigate('/homePage');
    }).catch((e)=>{
        Swal.fire({
            title: "Error",
            text: "Login Failed",
        });
    })
  }
  return (
    <Container
      maxWidth="sm"
      sx={{ height: "100vh", display: "flex", alignItems: "center" }}
    >
      <Paper elevation={4} sx={{ width: "100%" }}>
        <Stack padding={3} gap={2}>
          <Typography textAlign={"center"} variant="h4">
            Login
          </Typography>
          <TextField
            onChange={(e) => setUsername(e.target.value)}
            fullWidth
            label="Username"
            variant="outlined"
          />
          <TextField
            onChange={(e) => setPassword(e.target.value)}
            label="Password"
            variant="outlined"
          />
          <Button onClick={() => HandleLogin()} variant="contained">
            Sign In
          </Button>
          <Typography textAlign={"right"}>
            <Link to="/signUp">Sign Up</Link>
          </Typography>
        </Stack>
      </Paper>
    </Container>
  );
}

export default Loginpage;
