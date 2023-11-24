
  import * as React from 'react';
  import Box from '@mui/material/Box';
  import TextField from '@mui/material/TextField';
  import MenuItem from '@mui/material/MenuItem';
  import Stack from '@mui/material/Stack';
  import Button from '@mui/material/Button';
 
  import { Paper } from '@mui/material';
import { RoundedCorner } from '@mui/icons-material';

  const paperStyle ={padding:'50px 20px',width:400, margin:"50px"}

  const lands = [
    { value1: 'Kegalle',},
    { value1: 'Colombo',},
    { value1: 'Kurunegala',},
    { value1: 'Bandarawela',},
    { value1: 'Gampaha',},
    { value1: 'Kandy',},
    { value1 : 'All island '},
    
    { value2: 'All cities',},
    { value2: 'Kegalle',},
    { value2: 'Nittambuwa',},
    { value2: 'Kadawatha',},
    { value2: 'Yakkala',},
    { value2: 'Mawaramandiya',},
    { value2: 'Hatton',},
    { value2: 'Kadugannawa',},
    { value2: 'Kandy',},

    { value3: 'Residence',},
    { value3: 'Business',},
    { value3: 'Agricultural',},
    { value3: 'All'},

    { value4: 'Below 1 lakh',},
    { value4: '1-3 lakhs',},
    { value4: '3-5 lakhs',},
    { value4: 'All',}
   
  ];
  
  export default function MoreLands() {
    return (

      <Box
        component="form"
        sx={{
          '& .MuiTextField-root': { m: 2 , width:'275', position:'relative'}  }}
        noValidate  autoComplete="off"    >
          
          <Paper elevation={3} style={paperStyle} corner={RoundedCorner}  >
           <div>
          <h5 className= "display: flex, justify-content: center" ><b>DISCOVER THE BEST PROPERTY FOR YOU</b></h5>
          
          <TextField required="required" id="select-District" select label="Select your preference District" 
          defaultValue="All island" >
            {lands.map((option) => (
              <MenuItem  key={option.value1} value={option.value1}> {option.value1} </MenuItem>
            ))}
          </TextField>
          
        </div>
        <div>
          <TextField  id="select-city" select label="Popular Cities" defaultValue="All cities" >
            {lands.map((option) => (
              <MenuItem key={option.value2} value={option.value2}> {option.value2} </MenuItem>
            ))}
          </TextField>
        </div>
        
        <div>
          <TextField
            id="select-purpose" select label="Purpose" defaultValue="All" >
            {lands.map((option) => (
               <MenuItem  key={option.value3} value={option.value3}> {option.value3} </MenuItem>
            ))}
          </TextField>
           </div>
        
        <div>
          <TextField id="select-budget" select label="Budget range"  defaultValue="All" >
            {lands.map((option) => (
               <MenuItem  key={option.value4} value={option.value4} > {option.value4} </MenuItem>
            ))}
          </TextField>
         </div>

         <Stack spacing={2} direction="row">
        <Button variant="contained" color="success" href="#outlined-buttons"> Search </Button> 
        </Stack>
      
       </Paper>

      </Box>
   
    );
  }
  

