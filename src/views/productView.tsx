import { Grid, Card, Box, CardMedia, List, ListItem, ListItemText, Typography, Button, Link, Divider } from '@mui/material';
import { Favorite, FavoriteBorder} from '@mui/icons-material';
import SelectQTField from '../components/product/selectQTField';
import CategoriesMenu from '../components/layout/leftMenu/categoryComponent';
// import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";

const ProductView = () => {

  // const favorites = useSelector((state:any) => state.counter.favorites);

  // const dispatch = useDispatch(); 

  // function is_product_favorite(id:number){
  //   if(favorites.some( (obj:any) => obj.id == id )){
  //     return true;
  //   }      
  //   return false;
  // }

  function is_product_favorite(){
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
            <CardMedia component="img" image="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f690d335-67d9-4a9a-916f-2a2b4e588e03.jpg"></CardMedia>
          </Card>
        </Grid>

        <Grid item xs={7}>

        <Card style={{border:"none", boxShadow: "none"}}>

          <List>         

            <ListItem>
              <ListItemText>
                <Typography variant='h5' fontWeight={10}> 
                 <Box sx={{ fontWeight:'bold', m: 1 }} >Multi-Colored Peppers, Package</Box> 
                </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>
              <ListItemText>
                <Typography variant='h5' fontWeight={10}> 
                <Box sx={{ fontWeight:'bold', m: 1 }} >$3.55 / lib</Box>           
              </Typography>
              </ListItemText>
            </ListItem>

            <ListItem>        
              <ListItemText>
              <strong>Details</strong> <br />
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet distinctio aut necessitatibus voluptate dignissimos voluptatum possimus quo, accusantium officia sit quis quas quasi laboriosam sunt, dolorem illo blanditiis ad. Tempora.
              </ListItemText>
            </ListItem> 

            <Divider />
 
            <ListItem>
              <SelectQTField />
            </ListItem>

            <ListItem style={{display:'flex', justifyContent:'center'}}>
              <Button size='large' 
                startIcon={ is_product_favorite() 
                 ? <Favorite /> : <FavoriteBorder /> }>
                Favorite
              </Button>
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