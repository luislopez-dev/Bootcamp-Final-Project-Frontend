import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Chip } from '@mui/material';
import { AddShoppingCart, Check } from '@mui/icons-material';
import { useDispatch, useSelector } from "react-redux";
import { addToCart, addToCartWithAmmount } from '../../features/counter/counterSlice';

export default function SelectQTField(props:any) {

  const [ammount, setAmmount] = React.useState('');

  const [added, setAdded] = React.useState(false);

  const dispatch = useDispatch(); 

  const add = (event: any) => {
    let product = props.product;
    product.ammount = ammount;
    setAdded(true);
    setAmmount("-");  
    dispatch(addToCartWithAmmount(product));
  }

  const handleChange = (event: SelectChangeEvent) => {
    setAmmount(event.target.value as string);
    setAdded(false);
    
  };

  return (

    <>
    <Box sx={{ minWidth: 280, marginRight: 5 }}>
      <FormControl variant='standard' fullWidth>
        <InputLabel id="demo-simple-select-label"> 
				  Ammount
				</InputLabel>
					<Select style={{textAlign: "center"}}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ammount || "1"}
          label="ammount"
          onChange={handleChange}
        >
          {[...Array(10).keys()].map( (e) => 
						<MenuItem value={e + 1} key={e}>{e + 1}</MenuItem>									  
					)}
        </Select>
      </FormControl>

    </Box>

    {
      added ? 
      <Chip icon={<Check />} label={`Products added!`} size='medium' color="primary" />
      :
      <Button variant="outlined" onClick={(e) => { add(e); }}
        startIcon={<AddShoppingCart />}>
      Add to cart
    </Button>
    }
   

</>
  );
}
