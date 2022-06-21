import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Button, Chip } from '@mui/material';
import { Add, AddCircle, AddCircleOutline, AddShoppingCart, Check, CheckCircle, CheckCircleOutline, Done, DoneOutline, FilterList, FormatListBulleted, Grain, ShoppingBasket, ShoppingCart, ViewList } from '@mui/icons-material';
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

export default function SelectQTField() {

  const [age, setAge] = React.useState('');

  const [added, setAdded] = React.useState(false);

  const AddToCart = (event: any) => {
    setAdded(true);
    setAge("-")
  }

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
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
          value={age || "1"}
          label="Age"
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
      <Chip icon={<Check />} label="Added" size='medium' color="primary" />
      :
      <Button variant="outlined" onClick={AddToCart}
        startIcon={<AddShoppingCart />}>
      Add to cart
    </Button>
    }
   

</>
  );
}
