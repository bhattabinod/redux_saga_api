import { call, put, takeEvery } from 'redux-saga/effects'
import { GET_USERS_FETCH, GET_USERS_SUCCESS, GET_POSTS_FETCH, GET_POSTS_SUCCESS } from '../Action/actions'

// Saga function to fetch users
function* usersFetch() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/users');
        const users = yield response.json();
        return users;
    } catch (error) {
        throw error;
    }
}

// Saga function to fetch posts
function* postsFetch() {
    try {
        const response = yield fetch('https://jsonplaceholder.typicode.com/posts');
        const posts = yield response.json();
        return posts;
    } catch (error) {
        throw error;
    }
}

// Saga worker function to handle fetching users
function* workGetUsersFetch() {
    try {
        const users = yield call(usersFetch);
        yield put({ type: GET_USERS_SUCCESS, users });
    } catch (error) {
        // Handle error if needed
        console.error('Error fetching users:', error);
    }
}

// Saga worker function to handle fetching posts
function* workGetPostsFetch() {
    try {
        const posts = yield call(postsFetch);
        yield put({ type: GET_POSTS_SUCCESS, posts });
    } catch (error) {
        // Handle error if needed
        console.error('Error fetching posts:', error);
    }
}

// Root saga function
function* mySaga() {
    yield takeEvery(GET_USERS_FETCH, workGetUsersFetch);
    yield takeEvery(GET_POSTS_FETCH, workGetPostsFetch);
}

export default mySaga;
