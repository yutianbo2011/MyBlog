import React from 'react';
import Card from '../UI/Card/Card';
import './RecentPosts.css';

const RecentPosts = (props) => {
    const {id, imageUrl, title, subtitle, content} = props.post;
    // console.log(props.id);
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={imageUrl} alt=""/>
            </div>
            <div style={{textAlign: 'center'}}>
                <h2>{title}</h2>
                <span>{subtitle}</span>
                <p>{content}</p> 
            </div>
        </Card>
    </div>
   )
 };

export default RecentPosts;