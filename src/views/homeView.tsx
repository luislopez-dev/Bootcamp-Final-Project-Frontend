import { AddShoppingCart } from "@mui/icons-material";
import { Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";
import NavBarComponent from "../components/navBarComponent";

const HomeView = () => {
    return (
    <div>
      <NavBarComponent />
        <Card sx={{ maxWidth: 345 }}>
          <CardHeader title="Header" />
          <CardMedia 
            image="https://carpacciorestaurante.com/wp-content/uploads/2020/05/cocacola.jpg" 
            component="img"
            height="140"         
          />
          <CardContent>
            <Typography>ijhghihhoi</Typography>
          </CardContent>
          <CardActions>
            <IconButton>
              <AddShoppingCart />
            </IconButton>
          </CardActions>
        </Card>
    </div>)
}

export default HomeView;