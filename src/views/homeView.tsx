import { Add, Favorite, Share } from "@mui/icons-material";
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Chip, IconButton, Typography } from "@mui/material";
import React from "react";
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

        products.map((product, index) => 

          <Card key={index} sx={{ maxWidth: 200}}>   
          <CardActionArea href="https://facebook.com">     
          <CardMedia
            image={product.img} 
            component="img"                  
           />
          </CardActionArea>
          <CardContent>           
            <Typography gutterBottom variant="h6" component="div">
              <strong>${product.price}</strong>
            </Typography>
            <Typography gutterBottom variant="h6" component="div">
              {product.name}
            </Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <Favorite />
            </IconButton>
            <Chip clickable icon={<Add />} label="Add" />
            {/* <ButtonGroup size="small" aria-label="outlined primary button group">
              <Button><Add /></Button>
              <Button>10</Button>
              <Button><Remove /></Button>
            </ButtonGroup> */}
            <IconButton>
              <Share />
            </IconButton>
          </CardActions>
        </Card>
        
        )

      }
    </div>)
}

export default HomeView;