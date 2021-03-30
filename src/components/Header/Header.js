import React from 'react';
import Card from '../UI/Card/Card';
import Logo from '../Logo/Logo';
import Navbar from '../Navbar/Navbar';
import './Header.css'


const Hero = (props) => {
  return(
    <div>
        <Card>
            <div  >
              <Logo />
            </div>
            <Navbar />
        </Card>
    </div>
   )

 }

export default Hero