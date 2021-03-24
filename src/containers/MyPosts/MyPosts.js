import React from 'react';
import Card from '../../components/UI/Card/Card';
import BlogPost from '../../components/BlogPost/BlogPost';
import Layout from '../../components/Layout/Layout';
import './MyPosts.css';
import MyPost from '../../components/MyPost/MyPost.js'
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import NewPost from '../NewPost/NewPost'
import {connect} from 'react-redux';
import { NavLink } from 'react-router-dom';

class MyPosts extends React.Component{
  constructor(props){
    super(props);
  }

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
          <div id = 'addNewPost'>
              <NavLink to="/newpost" >
                <FontAwesomeIcon icon={faPlusCircle} className='icon' />
                Add New Blog
              </NavLink>
          </div>
          <br></br>
          <br></br>
          {this.props.UpdatedBlogs.map((post, index)=>{
            return (<MyPost key = {index} post = {post}  />);
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