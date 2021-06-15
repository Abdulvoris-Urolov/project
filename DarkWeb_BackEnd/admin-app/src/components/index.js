import React from 'react';
import Header from '../containers/Header/index';

/**
* @author
* @function Layout
**/

const Layout = (props) => {
  return(
    <>
        <Header />
        {props.children}
    </>
   )

 }

export default Layout;