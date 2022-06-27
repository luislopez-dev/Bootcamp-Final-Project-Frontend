import { ThemeProvider } from '@emotion/react';
import theme from "../../theme/theme"
import NavBarComponent from '../navBar/navBarComponent';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';

const Layout = () => {
    return(
      <>      
      <ThemeProvider theme={theme}>      
        <NavBarComponent />
        <Box sx={{ m: 14 }} />
        <Outlet />
      </ThemeProvider>
      </>
    );
}

export default Layout;