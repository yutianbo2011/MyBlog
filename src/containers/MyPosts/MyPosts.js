import React from 'react';
import Layout from '../../components/Layout/Layout';
import './MyPosts.css';
import MyPost from '../MyPost/MyPost.js'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NewPost from '../NewPost/NewPost'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class MyPosts extends React.Component{
  addNewBlogHandler = ()=>{
    this.setState({addnewBlog: true});
    console.log("add new bolg set as true");
    return;
  }

  
  render(){
    // console.log(this.state.MyBlogs);
    console.log("myPosts",this.props.UpdatedBlogs);
    return(
      <Layout>
        <div style={{width: '70%'}}>
          <div >
              <NavLink to="/newpost" id = 'addNewPost'>
                <FontAwesomeIcon icon={faPlusCircle} className='icon'  />
                Add New Blog
              </NavLink>
          </div>
          <br></br>
          <br></br>
          {this.props.UpdatedBlogs.map((post, index)=>{
            return (<MyPost key = {index} post = {post} edit={true}  />);
          }) }
        </div>
      </Layout>
      ); }
}

const mapStateToProps = (state) =>{
  // console.log(state.newPost.MyPost);
  return {UpdatedBlogs: state.newPost.MyPosts};
}

export default connect(mapStateToProps) (MyPosts);