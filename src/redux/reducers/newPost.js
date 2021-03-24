import {ADD_POST, UPDATE_CURRENT_ID, UPDATE_POST} from '../actionTypes';
import {MyPosts} from '../../assets/data/MyPosts'

const initialState = {MyPosts, id:-1};

export default function (state = initialState, action){
    // console.log(action);
    switch(action.type){
        case ADD_POST:{
            state.MyPosts.push(action.payload.post);
            console.log("reducer add post", state.MyPosts);
            return state;
        }
        case UPDATE_POST:{
            console.log("UPDATE_POST", action.payload.post);
            state.MyPosts[state.id] = action.payload.post;
            state.id = -1;
            return state;
        }
        case UPDATE_CURRENT_ID:{
            console.log("UPDATE_CURRENT_ID", action.payload.id);
            state.id = action.payload.id;
            return state;
        }
        default: return state;
    }
}