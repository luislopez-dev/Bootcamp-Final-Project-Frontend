import * as React from 'react';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

const CategoryField = () => {
	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value as string);
	};


	return (
		<FormControl fullWidth variant="standard">
             <InputLabel id="demo-simple-select-label">Category</InputLabel>
             <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
	)

}

export default CategoryField;