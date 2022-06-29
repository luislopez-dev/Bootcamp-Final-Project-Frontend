import { Add, Favorite, FavoriteBorder, Remove } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, IconButton, Typography } from "@mui/material";
import { useState, useEffect } from "react";
import { ProductService } from "../services/productService";
import { addToCart, removeFromFavorites, addToFavorities, remove_from_cart } from "../features/counter/counterSlice";
import { useDispatch, useSelector } from "react-redux";
import ShareComponent from "../components/product/card/shareComponent";
import CategoryComponent from "../components/layout/leftMenu/categoryComponent";

const HomeView = () => {

    const favorites = useSelector((state:any) => state.counter.favorites);

    const cart = useSelector((state:any) => state.counter.cart);

    const dispatch = useDispatch(); 

    const [products, setProducts] = useState<any[]>([]);
    const productService = new ProductService();

    // const products = productService.all();

    useEffect(() => {
      // productService.all().then( (res) => { setProducts(res.data); console.log(res.data) });
      setProducts(productService.all());
    }, []);

    function find_product_count(id:any) {
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

        <CategoryComponent />

        <Grid item xs={8}>

          <Grid container spacing={{ xs: 2, md: 4 }} 
              
              justifyContent="center" >
            {
          
          products.map((product, index) =>  {
            return (

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
                    <ButtonGroup variant="contained">
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
          )}
        )
        }
        </Grid>
        </Grid>

      </Grid>
      </>}
    </div>)
}

export default HomeView;