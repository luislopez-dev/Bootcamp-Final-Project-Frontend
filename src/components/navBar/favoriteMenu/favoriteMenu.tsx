import { AddShoppingCart, Check, Delete, Favorite } from "@mui/icons-material";
import { Box, Chip, Drawer, IconButton, Link, List, ListItem, ListItemText, Tooltip } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, removeFromFavorites } from "../../../features/counter/counterSlice";
type Anchor = 'left';

const FavoriteMenu = () => {

  const dispatch = useDispatch(); 

  const items = useSelector((state:any) => state.counter.favorites);
  let count = 0;

  const cart = useSelector((state:any) => state.counter.cart);

  items.forEach((element:any) => {
    count += element.count;
  });

  function is_product_in_cart(id:number){
    if(cart.some( (obj:any) => obj.id == id )){
      return true;
    }      
    return false;
  }

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
    >      
    <List>
      { items.map( (product:any, index:number) =>         
        <ListItem key={index}>
          <img src={product.img} width="15%" />
          <ListItemText>
          {product.name} <strong>${product.price}</strong>
          </ListItemText>

          { is_product_in_cart(product.id) 
              ? 
              <Chip color="primary" label="In cart" icon={<Check />}></Chip>
              :
              <Chip color="primary" onClick={() => { dispatch(addToCart(product)); }} clickable icon={<AddShoppingCart />} label="Add to cart" />
          }

          <Tooltip placement="bottom-end" title="Remove">
            <IconButton onClick={() => dispatch(removeFromFavorites(product)) }>
              <Delete color="warning" />
            </IconButton>
          </Tooltip>

          </ListItem>                  
      )}
    </List>    
    </Box>
  );

	return (		
    <div>
      <Chip icon={<Favorite />} color="primary" label={count} 
          clickable style={{padding:"20px"}} onClick={toggleDrawer('left', true)} />
        <Drawer anchor='left' open={state['left']} onClose={toggleDrawer('left', false)} >
          {list('left')}
        </Drawer>
    </div>
	)
}

export default FavoriteMenu;