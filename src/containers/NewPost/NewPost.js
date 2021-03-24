import React from 'react';

import Card from '../../components/UI/Card/Card';
import './NewPost.css';
import { connect } from "react-redux";
import {addPost, updatePost} from '../../redux/actions'
import Layout from '../../components/Layout/Layout';
import {NavLink} from 'react-router-dom'

class NewPost extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            newBlog:{
                id: this.props.id === -1? this.props.MyBlogs.length: this.props.id, 
                title: this.props.id === -1? '':this.props.MyBlogs[this.props.id].title, 
                subtitle: this.props.id === -1? '':this.props.MyBlogs[this.props.id].subtitle,  
                content:this.props.id === -1? '':this.props.MyBlogs[this.props.id].content, 
                imageUrl: this.props.id === -1? '':this.props.MyBlogs[this.props.id].imageUrl ,
            },
        }
    }
    
    setNewTitle = (event)=>{
        this.setState({newBlog: {...this.state.newBlog, title: event.target.value}});
    }

    setNewSubtitle = (event)=>{
        this.setState({newBlog: {...this.state.newBlog, subtitle: event.target.value}});
    }

    setNewContent = (event)=>{
        this.setState({newBlog: {...this.state.newBlog, content: event.target.value}});
    }

    setNewImageurl = (event)=>{
        this.setState({newBlog: {...this.state.newBlog, imageUrl: event.target.value}});
    }

    handleAddPost (){
        // console.log("add post", this.state.newBlog);
        this.props.addPost(this.state.newBlog);
        this.setState( {
            ...this.state, 
            newBlog:{ id: this.props.MyBlogs.length, title: '', subtitle: '', content:'',imageUrl: '',}
        });
    }

    handleUpdatePost(){
        this.props.updatePost(this.state.newBlog);
    }

    render(){
        // console.log(this.props.id, this.props.MyBlogs);
        const currentId = this.props.id;
        return (
            <Layout>
                <div >
                    <Card style={{marginBottom: '20px'}}>
                        <div>
                            <div>
                                <label id='title' >Title</label>
                                <input type='text' id='title' 
                                defaultValue ={currentId === -1? '': String(this.props.MyBlogs[currentId].title)}
                                onChange={this.setNewTitle} 
                                > 
                                </input>
                            </div>
                            <div>
                                <label id='subtitle'>Subtitle</label>
                                <input type='text' id='subtitle' onChange={(event)=>this.setNewSubtitle(event)} 
                                defaultValue={currentId === -1? '': this.props.MyBlogs[currentId].subtitle}></input>
                            </div>
                            <div>
                                <label id='imageurl'>Image Url</label>
                                <input type='url' id='imageurl' onChange={(event)=>this.setNewImageurl(event)} 
                                defaultValue={currentId === -1? '': this.props.MyBlogs[currentId].imageUrl}></input>
                            </div>
                            <div>
                                <label id='content'>Content</label>
                                <textarea id='content' rows='6' cols='70' onChange={(event)=>this.setNewContent(event)}
                                defaultValue={currentId === -1? '': this.props.MyBlogs[currentId].content}
                                >

                                </textarea>
                                </div>
                            <div>
                                <NavLink id = 'cancel' to='/mypost'>Cancel</NavLink>
                                <NavLink id = 'confirm' to='/mypost' 
                                onClick={ currentId===-1? ()=>this.handleAddPost(): ()=>this.handleUpdatePost()} >Confirm</NavLink>
                            </div>
                        </div>
                    </Card>
                </div>
            </Layout>
            
        );
    }
 };
 const mapStateToProps = (state) =>{
    return {
        MyBlogs: state.newPost.MyPosts,
        id: state.newPost.id,
    };
  }
export default connect(mapStateToProps, {addPost, updatePost})(NewPost);