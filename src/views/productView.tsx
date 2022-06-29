import { Grid, Card, Box, CardMedia, List, ListItem, ListItemText, Typography, Button, Link, Divider } from '@mui/material';
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import SelectQTField from '../components/product/selectQTField';
import CategoriesMenu from '../components/layout/leftMenu/categoryComponent';
import { ProductService } from '../services/productService';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { removeFromFavorites, addToFavorities } from "../features/counter/counterSlice";

const ProductView = () => {

  const productService = new ProductService();
  const [product, setProduct] = useState<any>({});
  const params = useParams();
  const productId = params.id;

  useEffect(() => {
    setProduct(productService.find(productId));
  }, []);

  // const favorites = useSelector((state:any) => state.counter.favorites);

  const dispatch = useDispatch(); 

  const favorites = useSelector((state:any) => state.counter.favorites);

  function is_product_favorite(id:number){
    if(favorites.some( (obj:any) => obj.id == id )){
      return true;
    }      
    return false;
  }

  return (
  <>

  <Grid container>

    <CategoriesMenu />

    <Grid item xs={8}>
          <Grid container padding={0}>
     
        <Grid item xs={5}>  
          <Card style={{border:"none", boxShadow: "none"}}>
            <CardMedia component="img" image={product.img}></CardMedia>
          </Card>
        </Grid>

        <Grid item xs={7}>

        <Card style={{border:"none", boxShadow: "none"}}>

          <List>         

            <ListItem>
              <ListItemText>
                <Typography variant='h5' fontWeight={10}> 
                 <Box sx={{ fontWeight:'bold', m: 1 }} >{product.name}</Box> 
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Typography variant='h5' fontWeight={10}> 
                <Box sx={{ fontWeight:'bold', m: 1 }} >${product.price}</Box>           
              </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>        
              <ListItemText>
              <strong>Details</strong> <br />
              {product.description}
              </ListItemText>
            </ListItem> 

            <Divider />
 
            <ListItem>
              <SelectQTField product={product} />
            </ListItem>

            <ListItem style={{display:'flex', justifyContent:'center'}}>

            { is_product_favorite(product.id)

              ?   
                <Button size='large' 
                  onClick={ () => { dispatch(removeFromFavorites(product)) } }
                  startIcon={ <Favorite /> }>
                  Favorite
                </Button>             
              :
                <Button size='large' 
                  onClick={ () => {  dispatch(addToFavorities(product));} }
                  startIcon={ <FavoriteBorder />} >
                  Favorite
                </Button>             
            }                      

            </ListItem>

            <Divider />

            <ListItem>
              <ListItemText style={{display:'flex', justifyContent:'center'}}>
                <Link href='/?category='>Browse for more items</Link>
              </ListItemText>
            </ListItem>

          </List>
        </Card>
        </Grid>

      </Grid>
    </Grid>
  </Grid>
  </>)
}

export default ProductView;