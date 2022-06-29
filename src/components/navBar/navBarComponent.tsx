import { AppBar, Button, Toolbar } from "@mui/material";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import OrderMenu from "./orderMenu/orderMenu";
import FavoriteMenu from "./favoriteMenu/favoriteMenu";

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

          <form action="/home">
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase              
              placeholder="Search for product..."
              inputProps={{ 'aria-label': 'search', 'name':'search' }}
            />
          </Search>
          </form>
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