import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import axios from "axios";
import { updateUser } from "../redux/auth/authslice";
import { useNavigate } from "react-router-dom";
import { a18n } from "../a18n";

const defaultTheme = createTheme();

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isFormValid, setIsFormValid] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get("email"),
      password: data.get("password"),
    });

    const email = data.get("email");
    const password = data.get("password");

    if (email && password) {
      axios
        .post("http://64.226.92.178:8000/api/login", { email, password })
        .then((response) => {
          dispatch(updateUser(response.data));
          localStorage.setItem("authToken", response.data.token);
          navigate("/admin");
        })
        .catch((error) => {
          if (error.response.status === 401) {
            setIsFormValid(true);
          }
          console.error(error);
        });
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {a18n.login.title}
          </Typography>
          <Box
            component="form"
            onSubmit={handleSubmit}
            noValidate
            sx={{ mt: 1 }}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label={a18n.login.emailLabel}
              name="email"
              autoComplete="email"
              autoFocus
              error={isFormValid}
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label={a18n.login.passwordLabel}
              type="password"
              id="password"
              autoComplete="current-password"
              error={isFormValid}
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              {a18n.login.submitButton}
            </Button>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
