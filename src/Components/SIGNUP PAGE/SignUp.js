import {
  Button,
  Container,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React from "react";
import Swal from "sweetalert2";
import BaseAxiosApi from "../../API/BaseAxiosApi";

function SignUp() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [confirmPassword, setConfirmPassword] = React.useState("");
  const handleSignUp = () => {
    BaseAxiosApi.post("/auth/signUp", {
      username,
      password,
      confirmPassword,
    }).then(() => {
      Swal.fire({
        title: "Success",
        text: "Sign Up Successfully",
      });
    }).catch(() => {
        Swal.fire({
            title: "Error",
            text: "Sign Up Failed",
        });
        }
    );
  };
  return (
    <Container
      maxWidth="sm"
      sx={{ display: "flex", alignItems: "center", height: "100vh" }}
    >
      <Paper sx={{ width: "100%" }}>
        <Stack gap={2} p={3}>
          <Typography textAlign={"center"} variant="h4">
            Create Account
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
          <TextField
            onChange={(e) => setConfirmPassword(e.target.value)}
            label="Confirm Password"
            variant="outlined"
          />
          <Button onClick={() => handleSignUp()} variant="contained">
            Sign Up
          </Button>
        </Stack>
      </Paper>
    </Container>
  );
}

export default SignUp;
