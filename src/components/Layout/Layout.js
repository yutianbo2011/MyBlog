import React from 'react';
import Header from '../Header/Header.js';
import Sidebar from '../Sidebar/Sidebar';
import {Footer} from '../Footer/Footer';
import './Layout.css';



const Layout = (props) => {
  return(
      <React.Fragment>
          <Header />
          <div className="container">
            {props.children}
            <Sidebar />
          </div>
          <Footer/>
      </React.Fragment>
   )
 }

export default Layout