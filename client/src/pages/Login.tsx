import React from "react";
import { Link } from "react-router-dom";
import { SubmitHandler, useForm } from "react-hook-form";

import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import LoginIcon from "@mui/icons-material/Login";
import { routes } from "../routes";

interface ILogin {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const { register, handleSubmit } = useForm();

  const loginHandler: SubmitHandler<ILogin> = (data) => {};

  return (
    <Grid container>
      <Grid item justifyContent="center">
        <Typography variant="h6" component="h2" color="primary" gutterBottom>
          Login
        </Typography>
        <form onSubmit={handleSubmit(loginHandler)}>
          <Box my={2}>
            <TextField
              {...register("username", { required: true })}
              type="text"
              label="Username"
              placeholder="Username"
              size="small"
            />
          </Box>
          <Box my={2}>
            <TextField
              {...register("password", { required: true })}
              type="password"
              label="Password"
              placeholder="Password"
              size="small"
            />
          </Box>
          <Box my={2}>
            <Button type="submit" variant="contained" endIcon={<LoginIcon />}>
              Log in
            </Button>
          </Box>
          <Box my={2}>
            <Link to={routes.register}>
              <Button variant="contained">Register</Button>
            </Link>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
