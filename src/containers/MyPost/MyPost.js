import React, {useState} from 'react';
import Card from '../../components/UI/Card/Card';
import './MyPost.css';
import {NavLink} from 'react-router-dom';
import {updateCurrentId} from '../../redux/actions';
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleDown, faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";



const MyPost = (props) => {
    const {id, title, subtitle, content, imageUrl, } = props.post;
    const handleEdit = (id)=>{
        props.updateCurrentId(id);
    }
    const [ReadMore, setReadMore] = useState(0);
    let editBar;
    if(props.edit){
        editBar=<NavLink to='/newpost' onClick={()=>handleEdit(id)} ><span id='edit'>Edit</span></NavLink>;
    }
  return(
    <div >
        <Card style={{marginBottom: '20px'}}>
            {imageUrl?
            <div className="postImageWrapper">
                <img src={imageUrl} alt=""/>
            </div> : <br></br> }
            
            <div style={{textAlign: 'center'}}>
                <h2>{title}</h2>
                {editBar}
                <h4>{subtitle}</h4> 
                <p className='content' 
                style={ReadMore === 1? {maxHeight:"100%"}: {maxHeight: "100px"}} >{content}</p> 
                {ReadMore === 0?
                <label className='readmore' onClick={()=>setReadMore((1+ReadMore)%2)}> 
                    <FontAwesomeIcon icon={faAngleDoubleDown} className='icon' />
                    Read More
                </label>: 
                <label className='readless' onClick={()=>setReadMore((1+ReadMore)%2)}>
                    <FontAwesomeIcon icon={faAngleDoubleUp} className='icon' />
                    Read Less
                </label>}
            </div>
        </Card>
    </div>
   );
 };

 

export default  connect(null, {updateCurrentId})(MyPost);;