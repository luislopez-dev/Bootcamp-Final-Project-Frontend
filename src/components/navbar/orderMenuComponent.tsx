import { ShoppingCart } from "@mui/icons-material";
import { Badge, Box, Drawer, IconButton } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";

type Anchor = 'right';

const OrderMenu = () => {

  const items = useSelector((state:any) => state.counter.cart);
  let count = 0;

  items.forEach((element:any) => {
    count += element.count;
  });

	const [state, setState] = React.useState({
    right: false,
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
      sx={{ width: 650 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >      
    
    </Box>
  );

	return (		

	<div>

		<IconButton size="large" aria-label="show 4 new mails" 
                color="inherit" onClick={toggleDrawer('right', true)}>
      <Badge badgeContent={count} color="error">
        <ShoppingCart />
      </Badge>
    </IconButton>     
		<Drawer
      anchor='right'
      open={state['right']}
      onClose={toggleDrawer('right', false)}
    >
      {list('right')}
    </Drawer>
	</div>)
}

export default OrderMenu;