import { TextField } from "@mui/material";

const PriceField = () => {	
	return (
	<div>
		<TextField variant="standard" label="Max $" type="number" />
		<TextField variant="standard" label="Min $" type="number" />
	</div>
	);
}

export default PriceField;