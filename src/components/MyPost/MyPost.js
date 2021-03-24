import React from 'react';
import Card from '../UI/Card/Card';
import './MyPost.css';
import {NavLink} from 'react-router-dom';
import {updateCurrentId} from '../../redux/actions';
import { connect } from "react-redux";



const MyPost = (props) => {
    console.log(props);
    const {id, title, subtitle, content, imageUrl, } = props.post;
    console.log("currrent id", id);
    const handleEdit = (id)=>{
        console.log("edit id", id);
        props.updateCurrentId(id);
    }
  return(
    <div style={props.style}>
        <Card style={{marginBottom: '20px'}}>
            <div className="postImageWrapper">
                <img src={imageUrl} alt=""/>
            </div>
            <div style={{textAlign: 'center'}}>
                <h2>{title}</h2>
                <span>{subtitle}</span> 
                <NavLink to='/newpost' onClick={()=>handleEdit(id)} >Edit</NavLink>
                <p>{content}</p> 
            </div>
        </Card>
    </div>
   );
 };

 

export default  connect(null, {updateCurrentId})(MyPost);;