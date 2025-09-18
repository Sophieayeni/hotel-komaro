// components/Layout.jsx
import React from 'react';
import Navigationbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
    return (
        <>
            <Navigationbar />
            <main>{children}</main>
            <Footer />
        </>
    );
};

export default Layout;
