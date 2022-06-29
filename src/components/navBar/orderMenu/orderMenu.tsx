import { Add, Delete, Remove, ShoppingCart } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Chip, Drawer, IconButton, List, ListItem, ListItemText } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addToCart, remove_all_from_cart, remove_from_cart } from "../../../features/counter/counterSlice";

type Anchor = 'right';

const OrderMenu = () => {

  const cart = useSelector((state:any) => state.counter.cart);

  const dispatch = useDispatch(); 

  const items = useSelector((state:any) => state.counter.cart);
  let count = 0;

  const SubTotal = ( cart.reduce((a:any,b:any) => + a + + (b.price * b.count), 0) ) || 0;

  function find_product_count(id:number) {
    if(cart.some( (obj:any) => obj.id == id )){
      const index = cart.findIndex( (x:any) => x.id == id );
      return cart[index].count;  
    }      
    return 0;
  }

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
    >
      <List>
        {items.map( (product:any, index:number) =>         
        <ListItem key={index}>
          <img src={product.img} width="15%" />
          <ListItemText>
            <ListItemText>{product.name}</ListItemText> 
            <strong> ${product.price} </strong>
          </ListItemText>
          <ButtonGroup size="small" aria-label="outlined primary button group">
            <Button onClick={() => { dispatch(remove_from_cart(product)) }}><Remove /></Button>
            <Button>{find_product_count(product.id)}</Button>
            <Button onClick={() => { dispatch(addToCart(product)); }}><Add /></Button>
          </ButtonGroup>  
          <IconButton onClick={() => dispatch(remove_all_from_cart(product)) }>
            <Delete color="warning" />
          </IconButton>
        </ListItem>
        )}    

        {
         items.length > 0 &&
        
          <ListItem style={{display:'flex', justifyContent:'center'}}>
          <Button href="/checkout" variant="contained" size="large">
            Checkout ${ Math.round((SubTotal + Number.EPSILON) * 100) / 100}
          </Button>
          {/* <Button onClick={() => {dispatch(clearCart())}} startIcon={<Delete />} variant="contained" color="warning">
            Clear cart
          </Button> */}
          </ListItem>

        }

      </List>
    </Box>
  );

	return (

	<div>
    <Chip icon={<ShoppingCart />} color="primary" label={count} 
          clickable style={{padding:"20px"}} onClick={toggleDrawer('right', true)} />

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