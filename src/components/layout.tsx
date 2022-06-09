import React, { FC } from 'react';
import PropTypes from 'prop-types';

type LayoutProps = {
    children: React.ReactNode
}

const Layout = ({children}:any) => {
    return(
<>
            {children}
        </>
    );
}

export default Layout;