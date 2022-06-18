import { Favorite, ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
type Anchor = 'left';

const FavoriteMenu = () => {

  const items = useSelector((state:any) => state.counter.favorites);
  let count = 0;

  items.forEach((element:any) => {
    count += element.count;
  });


	const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >      
    
    </Box>
  );

	return (		

<div>
		<IconButton size="large" aria-label="show 4 new mails" 
                color="inherit" onClick={toggleDrawer('left', true)}>
      <Badge  badgeContent={count} color="error">
        <Favorite />
      </Badge>
    </IconButton>     

  <Drawer
anchor='left'
open={state['left']}
onClose={toggleDrawer('left', false)}
>
{list('left')}
</Drawer>
</div>
	)
}

export default FavoriteMenu;