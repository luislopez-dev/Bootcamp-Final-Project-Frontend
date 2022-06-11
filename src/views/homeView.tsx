import { Add, Favorite, FavoriteBorder, Remove, Share } from "@mui/icons-material";
import { Button, ButtonGroup, Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, Grid, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { useEffect } from "react";
import { ProductService } from "../services/productService";

const HomeView = () => {

    const [products, setProducts] = useState<any[]>([]);
    const productService = new ProductService();

    useEffect(() => {
      productService.all().then( (res) => { setProducts(res.data); console.log(res.data) });
    }, []);

    return (
    <div>
      {
        <Grid container spacing={{ xs: 2, md: 4 }} 
              columns={{ xs: 4, sm: 8, md: 12 }}
              justifyContent="center" >
        {Array.from(Array(6)).map((_, index) => (
          
        products.map((product, index) => 

        <Grid container justifyContent="center" item xs={2} sm={3} md={3} key={index}>
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
            <IconButton color="primary">
              <FavoriteBorder />
            </IconButton>
            <Chip color="primary" clickable icon={<Add />} label="Add" />
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
      }
    </div>)
}

export default HomeView;