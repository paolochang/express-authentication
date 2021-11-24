import React from "react";
import { Button, Grid, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LoginIcon from "@mui/icons-material/Login";

const Login: React.FC = () => {
  return (
    <Grid container>
      <Grid item justifyContent="center">
        <Typography variant="h6" component="h2" color="primary" gutterBottom>
          Login
        </Typography>
        <form>
          <Box my={2}>
            <TextField
              type="text"
              label="Username"
              placeholder="Username"
              size="small"
            />
          </Box>
          <Box my={2}>
            <TextField
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
            <Button variant="contained">Register</Button>
          </Box>
        </form>
      </Grid>
    </Grid>
  );
};

export default Login;
