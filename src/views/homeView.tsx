import { Button, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Typography } from "@mui/material";

const HomeView = () => {
    return (
    <div>
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
              
            </IconButton>
          </CardActions>
        </Card>
    </div>)
}

export default HomeView;