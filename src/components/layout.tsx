import React, { FC } from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from '@emotion/react';
import theme from "../theme/theme"
import NavBarComponent from './navBarComponent';
import { Outlet } from 'react-router-dom';
import { Box } from '@mui/system';
type LayoutProps = {
    children: React.ReactNode
}
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