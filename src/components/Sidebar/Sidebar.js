import React from 'react';
import Card from '../UI/Card/Card';
import './Sidebar.css'

const Sidebar = (props) => {
  return(
      <div className="sidebarContainer" style={{
          width: props.width
      }}>
            <Card >
                <div className="cardHeader">
                    <span>About Us</span>
                </div>
                <div className="profileImageContainer">
                    <img src="https://raw.githubusercontent.com/yutianbo2011/My-Profile-Page/master/src/assets/figure/my_photo.jpg" alt="" />
                </div>
                <div className="cardBody">
                    <p className="personalBio">My name is Tianbo Yu and I am a Front end developer<br></br> Hope you like this blog site :)</p>
                </div>
            </Card>
      </div>
    
   )

 }

export default Sidebar