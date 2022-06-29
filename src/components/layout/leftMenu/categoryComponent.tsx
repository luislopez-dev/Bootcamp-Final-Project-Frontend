import { Card, Grid, List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import SortField from "./sortComponent";

const categories:Array<string> = [
  'Produce', 'Health & Medicine', 'Bakery', 'Frozen',
  'Snacks & Candy', 'Personal Care', 'Beatury',
  'Household', 'Beverages', 'Meat & Seafood',
  'Baby', 'Alcohol', 'Pets', 'Breakfast'
];

const CategoryComponent = () => {

	return (
	<>
	<Grid item xs={3} style={{margin:'20px', position:'fixed'}}>
  	<Card style={{display:'block', height:'700px', overflowY:'scroll'}}>
	  	<List>
			<ListItem>
				<SortField />
			</ListItem>
			{categories.map ((ele, index) => 
				<ListItemButton href={`/home?category=${ele}`} key={index}>
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

export default CategoryComponent;