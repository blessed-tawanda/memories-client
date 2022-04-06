import * as api from '../api';
import { CREATE, DELETE, FETCH_ALL, LIKE, UPDATE } from '../constants/actionTypes'

// Action Creators (functions that return actions)
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: FETCH_ALL, payload: data.data });
  } catch (error) {
    console.error(error.message)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.creatPost(post);
    dispatch({ type: CREATE, payload: data.data });
  } catch (error) {
    console.error(error)
  }
}

export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);
    dispatch({type: UPDATE, payload: data.data});
  } catch (error) {
    console.error(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);
    dispatch({type: DELETE, payload: id})
  } catch (error) {
    console.error(error);
  }
}

export const likePost = (id) => async (dispatch) => {
  console.log( `liking item ${id}`)
  try {
    const { data } = await api.likePost(id);
    dispatch({type: LIKE, payload: data.data});
  } catch (error) {
    console.error(error);
  }
}