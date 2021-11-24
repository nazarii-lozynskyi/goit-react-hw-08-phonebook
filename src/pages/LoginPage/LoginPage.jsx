import * as React from 'react';

import {
  Box,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  IconButton,
  TextField,
  Button,
} from '@mui/material';

import { Visibility, VisibilityOff } from '@mui/icons-material';

function LoginPage() {
  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = event => {
    event.preventDefault();
  };

  return (
    <Box>
      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <TextField
          required
          id="outlined-required"
          label="email"
          defaultValue=""
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={values.showPassword ? 'text' : 'password'}
          value={values.password}
          onChange={handleChange('password')}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {values.showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>

      <FormControl sx={{ m: 1, width: '30ch' }} variant="outlined">
        <Button variant="outlined">Login</Button>
      </FormControl>
    </Box>
  );
}

export default LoginPage;
