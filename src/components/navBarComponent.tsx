import { AppBar, Button, Toolbar } from "@mui/material";
import { styled, alpha } from '@mui/material/styles';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import SearchIcon from '@mui/icons-material/Search';
import { Favorite, Home, ShoppingCart } from "@mui/icons-material";
import OrderMenu from "./navbar/orderMenuComponent";
import FavoriteMenu from "./navbar/favoriteMenuComponent";

const Search = styled('div')(({ theme }) => ({
  color:'black',
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#F0F0F0",
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(20),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '50ch',
    },
  },
}));

const logo = "/main-logo.jpg"

const NavBarComponent = () => {  

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position="fixed" style={{backgroundColor:"white", border:"5px"}}>
        <Toolbar>
          
          <Button href="/">
            <img width="160px" src={logo} />
          </Button>

          <Search >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search for product..."
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{  flexGrow: 0.3, display: { xs: 'none', md: 'flex' } }}>
            <FavoriteMenu />
          </Box>
          <Box sx={{ flexGrow: 0.5, display: { xs: 'none', md: 'flex' } }}>
            <OrderMenu />          
          </Box>                  
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBarComponent;