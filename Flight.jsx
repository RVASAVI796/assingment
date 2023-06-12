import React from 'react';
import {TextField} from '@mui/material'
function App() {
  return (
    <div style={{paddingTop:20}}>
      <center>
       <h1> FLIGHT RESERVATION FORM</h1>
        </center>
      <h2>Passanger Name</h2>
        <stack direction="row" spacing={10}>
        <TextField label="First" variant="outlined" />
        <TextField label="Last" variant="outlined" />
        <h3>Email</h3>
        <TextField label="Mail" varient="outline"/>
        <TextField label="Password" varient="outline"/>
        <h4>Phone</h4>
        <TextField label="######" varient="outline"/>
        <h5 style={{fontsize:30}}>Address</h5>
        <TextField label="Street Address" varient="outline"/><br></br>
        <TextField label="Strret Address Line 2" varient="outline"/>
        </stack>
        <stack  spacing={10}>
        <TextField label="city" varient="outline"/> 
        <TextField label="Region" varient="outline"/>
        </stack>
        <TextField label="postal/zip code" varient="outline"/>
        <h6>Depature Date</h6>
        <TextField label="MM/DD/YY" varient="outline"/>
        <br></br>
        <h7 Style={{fontSize:50}}>Depature Time</h7>
        <br></br>
        <TextField label="HHMMAM" varient="outline"/>
        <br></br>
        <h8>Return Date</h8>
        <br></br>
        <TextField label="MM/DD/YY" varient="outline"/>
        <br></br>
        <h9>Return Time</h9>
        <br></br>
        <TextField label="HHMMAM" varient="outline"/>
        <br></br>
        <h10>Departing From</h10>
        <br></br>
        <stack  spacing={10}>
        <TextField label="city" varient="outline"/> 
        <TextField label="Country" varient="outline"/>
        </stack>
        <br></br>
        <h10>Destination</h10>
        <br></br>
        <stack  spacing={10}>
        <TextField label="city" varient="outline"/> 
        <TextField label="Country" varient="outline"/>
        </stack>
        <br>
        </br>
        <form>
          <button type="Submit">submit</button>
        </form>
        
        
     </div>
    
    
  )
}

export default App;