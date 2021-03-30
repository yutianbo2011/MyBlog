import React from 'react';
// import RecentPosts from '../../components/RecentPosts/RecentPosts';
import MyPost from '../MyPost/MyPost'
import Layout from '../../components/Layout/Layout';
import './Home.css'
import {ExistPosts} from '../../assets/data/ExistPosts';


const Home  = () => {
    return (
        <div>
            <Layout>
                <div  style={{width: '70%', display:'block'}}> 
                    {ExistPosts.map((post, index)=> 
                    {
                        return <MyPost post = {post} key={index} edit = {false} /> ; } 
                    )}
                </div>
                
            </Layout>
        </div>
    );
}

export default Home;