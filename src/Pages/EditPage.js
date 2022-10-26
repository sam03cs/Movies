import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

export default function EditPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  }

  return(
<Container component="main" maxWidth="sm" sx={{ mb: 4 }}>
  <Paper variant="outlined" sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
  <Typography>
    <h1>
      <center>
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <AccountCircleIcon />
        </Avatar>
        Edit Profile
      </center>
    </h1>
    <React.Fragment>
      <Grid container spacing={3}>
      <Grid item xs={12}>
          <TextField
            id="password"
            name="password"
            label="Password"
            fullWidth
            autoComplete="password"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="lastName"
            name="lastName"
            label="Last name"
            fullWidth
            autoComplete="family-name"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address1"
            name="address1"
            label="Address line 1"
            fullWidth
            autoComplete="shipping address-line1"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            id="address2"
            name="address2"
            label="Address line 2"
            fullWidth
            autoComplete="shipping address-line2"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="city"
            name="city"
            label="City"
            fullWidth
            autoComplete="shipping address-level2"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="state"
            name="state"
            label="State/Province/Region"
            fullWidth
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="zip"
            name="zip"
            label="Zip / Postal code"
            fullWidth
            autoComplete="shipping postal-code"
            variant="standard"
            color='error'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            id="country"
            name="country"
            label="Country"
            fullWidth
            autoComplete="shipping country"
            variant="standard"
            color='error'
          />
        </Grid>
      </Grid>
    </React.Fragment>
    <div><br></br></div>
    <React.Fragment>
    <Typography variant="h6" gutterBottom>
       <h3>
        <center>
          Payment method
        </center>
      </h3>
    </Typography>
    <Grid container spacing={3}>
      <Grid item xs={12} md={6}>
        <TextField
          id="cardName"
          label="Name on card"
          fullWidth
          autoComplete="cc-name"
          variant="standard"
          color='error'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="cardNumber"
          label="Card number"
          fullWidth
          autoComplete="cc-number"
          variant="standard"
          color='error'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="expDate"
          label="Expiry date"
          fullWidth
          autoComplete="cc-exp"
          variant="standard"
          color='error'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <TextField
          id="cvv"
          label="CVV"
          helperText="Last three digits on signature strip"
          fullWidth
          autoComplete="cc-csc"
          variant="standard"
          color='error'
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Button
          onSubmit={handleSubmit}
          type="submit"
          fullWidth
          variant="contained"
          style= {{ backgroundColor: 'red'}}
          sx={{ mt: 3, mb: 2 }}
        >
          Confirm
        </Button>
      </Grid>
    </Grid>
  </React.Fragment>
</Typography>
</Paper>
</Container>
    
  );
}