import { Card, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import SortField from "./menuDrawerDomain/softField";

const categories:Array<string> = [
  'Produce', 'Health & Medicine', 'Bakery', 'Frozen',
  'Snacks & Candy', 'Personal Care', 'Beatury',
  'Household', 'Beverages', 'Meat & Seafood',
  'Baby', 'Alcohol', 'Pets', 'Breakfast'
];

const CategoriesMenu = () => {

	return (
	<>
	<Grid item xs={3} style={{margin:'20px', position:'fixed'}}>
  	<Card style={{display:'block', height:'700px', overflowY:'scroll'}}>
	  	<List>
			{/* <ListItem>
				<PriceField />                
			</ListItem> */}
			<ListItem>
				<SortField />
			</ListItem>
			{categories.map ((ele, index) => 
				<ListItemButton key={index}>
					<ListItemText>{ele}</ListItemText>
				</ListItemButton>
			)}
		  </List>
	  </Card>
  </Grid>
 
<Grid item xs={3} style={{margin:'20px'}}>
</Grid>
</>
	)
}

export default CategoriesMenu;