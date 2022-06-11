import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Grid, Paper, Card, Box, CardMedia, List, ListItem, ListItemText, ListItemButton, Typography, Button, Chip } from '@mui/material';
import { Add, Favorite, FavoriteBorder, Inbox, Mail, ShoppingCart } from '@mui/icons-material';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(5),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

const ProductView = () => {
  return (
  <>
  <Grid container spacing={2}>
    <Grid item xs={5}>
      <Card>
        <CardMedia component="img" image="https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f690d335-67d9-4a9a-916f-2a2b4e588e03.jpg"></CardMedia>
      </Card>
        {/* <Box src='https://d2lnr5mha7bycj.cloudfront.net/product-image/file/large_f690d335-67d9-4a9a-916f-2a2b4e588e03.jpg' component="img" /> */}
    </Grid>
    <Grid item xs={7}>
      <Card> 
        <List>
          <ListItem>
            <ListItemText>
              <Typography variant='h6' fontWeight={10}> 
               <Box sx={{ fontWeight:'bold', m: 1 }} >Multi-Colored Peppers, Package</Box> 
              </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
              <Typography> 3 Unites </Typography>        
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>
            <Typography variant='h6' fontWeight={10}> 
              <Box sx={{ fontWeight:'bold', m: 1 }} >$3.55</Box>             
            </Typography>
            </ListItemText>
          </ListItem>
          <ListItem>
            <ListItemText>$1.18 each</ListItemText>
          </ListItem>
          <ListItem style={{display:'flex'}}>
            {/* <Chip clickable icon={<Add />} size="medium" label="Add to cart" /> */}
            <Button variant="contained" startIcon={<ShoppingCart />}>
              Add to cart
            </Button>
          </ListItem>
          <ListItem style={{display:'flex', justifyContent:'center'}}>
            <Button size='large' startIcon={<FavoriteBorder />}>
              Favorite
            </Button>
          </ListItem>
        </List>
      </Card>
    </Grid>
  </Grid>
  </>)
}

export default ProductView;