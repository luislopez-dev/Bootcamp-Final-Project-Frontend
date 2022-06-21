import { Add, Favorite, FavoriteBorder, FavoriteBorderOutlined, Remove, Share } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Divider, FormControl, Grid, IconButton, InputLabel, List, ListItem, ListItemButton, ListItemText, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { ProductService } from "../services/productService";
import * as React from 'react';
import CategoryField from "../components/menuDrawerDomain/categoryField";
import { addToCart, removeFromFavorites } from "../features/counter/counterSlice";
import { addToFavorities } from "../features/counter/counterSlice";
import { remove_from_cart } from "../features/counter/counterSlice";
import { useDispatch } from "react-redux";
import PriceField from "../components/menuDrawerDomain/priceField";
import SortField from "../components/menuDrawerDomain/softField";

import { useSelector } from "react-redux";
import ShareComponent from "../components/home_domain/shareComponent";
import CategoriesMenu from "../components/categoriesMenu";

interface InputWrapperProps { 
  children?: React.ReactNode
}

const HomeView = () => {

    const favorites = useSelector((state:any) => state.counter.favorites);

    const cart = useSelector((state:any) => state.counter.cart);

    const dispatch = useDispatch(); 

    const [products, setProducts] = useState<any[]>([]);
    const productService = new ProductService();

    useEffect(() => {
      productService.all().then( (res) => { setProducts(res.data); console.log(res.data) });
    }, []);

    function find_product_count(id:number) {
      if(cart.some( (obj:any) => obj.id == id )){
        const index = cart.findIndex( (x:any) => x.id == id );
        return cart[index].count;  
      }      
      return 0;
    }

    function is_product_favorite(id:number){
      if(favorites.some( (obj:any) => obj.id == id )){
        return true;
      }      
      return false;
    }

    return (
    <div>
      {<>      

      <Grid container spacing={2}>

        <CategoriesMenu />

        <Grid item xs={8}>

          <Grid container spacing={{ xs: 2, md: 4 }} 
              
              justifyContent="center" >
            {Array.from(Array(6)).map((_, index) => (
          
          products.map((product, index) => 

          <Grid container justifyContent="center" item xs={2} sm={4} md={3} key={index}>
            <Card key={index} sx={{ maxWidth: 200}}>   
              <CardActionArea href={`/product/${product.id}`}>
                <CardMedia
                  image={product.img}
                  component="img"                  
                />
              </CardActionArea>
              <CardContent>           
                <Typography gutterBottom variant="h6" component="div">
                  <strong>${product.price}</strong>
                  </Typography>
                  <Typography gutterBottom component="div">
                  {product.name}
                  </Typography>
              </CardContent>
              <CardActions>

                { is_product_favorite(product.id)
                  ? 
                    <IconButton color="primary" onClick={() => { dispatch(removeFromFavorites(product)); }}>
                      <Favorite />
                    </IconButton>
                  :
                    <IconButton color="primary" onClick={() => { dispatch(addToFavorities(product)); }}>
                      <FavoriteBorder />
                    </IconButton>                      
                }
                
                { find_product_count(product.id) > 0 ?
                    <ButtonGroup>
                    <Button style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}} onClick={() => { dispatch(remove_from_cart(product)) }}><Remove /></Button>
                    <Button style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}}>{find_product_count(product.id)}</Button>
                    <Button style={{maxWidth: '20px', maxHeight: '20px', minWidth: '20px', minHeight: '20px'}} onClick={() => { dispatch(addToCart(product)); }}><Add /></Button>
                    </ButtonGroup>
                  : <Chip color="primary" onClick={() => { dispatch(addToCart(product)); }} clickable icon={<Add />} label="Add" />                 
                }

            <ShareComponent />

          </CardActions>
        </Card>
        </Grid>
        )
        ))}
        </Grid>
        </Grid>

      </Grid>
      </>}
    </div>)
}

export default HomeView;