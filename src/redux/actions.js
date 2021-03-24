import {ADD_POST, UPDATE_POST, UPDATE_CURRENT_ID} from './actionTypes';

export const addPost = (post) => ({
    type: ADD_POST,
    payload: {post}
});

export const updatePost = (post) => ({
    type: UPDATE_POST,
    payload: {post}
});

export const updateCurrentId = (id) => ({
    type: UPDATE_CURRENT_ID,
    payload: {id}
});