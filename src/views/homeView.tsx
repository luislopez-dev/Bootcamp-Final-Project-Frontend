import { Add, Favorite, FavoriteBorder, Remove, Share } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, FormControl, Grid, IconButton, InputLabel, List, ListItem, MenuItem, Select, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { ProductService } from "../services/productService";
import * as React from 'react';
import CategoryField from "../components/menuDrawerDomain/categoryField";
import { addToCart } from "../features/counter/counterSlice";
import { addToFavorities } from "../features/counter/counterSlice";

import { useDispatch } from "react-redux";

const HomeView = () => {

    const dispatch = useDispatch(); 

    const [products, setProducts] = useState<any[]>([]);
    const productService = new ProductService();

    useEffect(() => {
      productService.all().then( (res) => { setProducts(res.data); console.log(res.data) });
    }, []);

    return (
    <div>
      {<>      

      <Grid container spacing={2}>
       
        <Grid item xs={3}>
          <Card>
            <List>
              <ListItem>              
                <CategoryField />
              </ListItem>
              <ListItem>
                
              </ListItem>
            </List>
          </Card>
        </Grid>

      <Grid item xs={9}>

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
            <IconButton color="primary" onClick={() => { dispatch(addToFavorities(product)); }}>
              <FavoriteBorder />
            </IconButton>
            <Chip color="primary" onClick={() => { dispatch(addToCart(product)); }}
              clickable icon={<Add />} label="Add" />
            {/* <ButtonGroup size="small" aria-label="outlined primary button group">
              <Button><Add /></Button>
              <Button>10</Button>
              <Button><Remove /></Button>
            </ButtonGroup> */}
            <IconButton>
              <Share color="primary" />
            </IconButton>
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