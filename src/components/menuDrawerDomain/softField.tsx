import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from "@mui/material";

const SortField = () => {
	return (
	  <FormControl>
			<FormLabel>Order by</FormLabel>
			<RadioGroup>
			  <FormControlLabel value="Expensive to cheap" control={<Radio />} label="Expensive to cheap" />
				<FormControlLabel value="Cheapest to expensive" control={<Radio />} label="Cheapest to expensive" />
				
			</RadioGroup>
		</FormControl>
	)
}

export default SortField;