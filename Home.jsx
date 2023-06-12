import React from 'react';
import {Container,Stack,TextField, button} from '@mui/material'
const Home = () => {
  return (
    <Container maxwidth="lg">
    <div style={{paddingTop:20}}>
      <center>
       <h1> FLIGHT RESERVATION FORM</h1>
        </center>
      <h2>Passanger Name</h2>
        <Stack direction={"column"} spacing={2}>
        <TextField label="First" variant="outlined" />
        <TextField label="Last" variant="outlined" />
        <h3>Email</h3>
        <TextField label="Mail" varient="outline"/>
        <TextField label="Password" varient="outline"/>
        <h4>Phone</h4>
        <TextField label="######"/>
        <h5>Address</h5>
        <TextField label="Street Address" varient="outline"/>
        <TextField label="Strret Address Line 2" varient="outline"/>
        <TextField label="city" varient="outline"/> 
        <TextField label="Region" varient="outline"/>
        <TextField label="postal/zip code" varient="outline"/>
        <TextField label="country" varient="outline"/>
        <h6>Depature Date</h6>
        <TextField label="MM/DD/YY" varient="outline"/>
        <h7 Style={{fontSize:50}}>Depature Time</h7>
        <TextField label="HHMMAM" varient="outline"/>
        <h8>Return Date</h8>
        <TextField label="MM/DD/YY" varient="outline" />
        <h9>Return Time</h9>
        <TextField label="HHMMAM" varient="outline" />
        <h10>Departing From</h10>
        <TextField label="city" varient="outline" />
        <TextField label="Country" varient="outline" />
        <h10>Destination</h10>
        <TextField label="city" varient="outline" />
        <TextField label="Country" varient="outline" />
        <center>
        <form>
        <button type="Submit">submit</button>
      </form>
      </center>
        </Stack>
        </div>
        </Container>
    
  );
};
export default Home;