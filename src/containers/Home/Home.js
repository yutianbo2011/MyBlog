import React from 'react';
import RecentPosts from '../../components/RecentPosts/RecentPosts';
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
                        return <RecentPosts post = {post} key={index} /> ; } 
                    )}
                </div>
                
            </Layout>
        </div>
    );
}

export default Home;