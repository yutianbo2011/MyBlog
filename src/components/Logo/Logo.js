import React from 'react';
import './Logo.css'

const Logo = (props) => {
  return(
    <div className="logo" >
      <img id="logoImg" src="https://github.com/Nealyang/React-Express-Blog-Demo/blob/master/build/f26996dee7e34d4f043302efa66f184a.png?raw=true"  alt="" />
      <div className="title" href="#">TB Tech BLOG</div>
    </div>
   );
 }

export default Logo