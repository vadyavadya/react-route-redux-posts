import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk('posts/getPosts', async () => {
    let res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
        throw new Error(`Not Found!! error posts status ${res.status}`);
    }
    let data = await res.json();
    return data;
})

export const postsSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: 'idle',
        error: null,
    },
    reducers: {
        addPosts: (state, action) => {
            state.posts.push(action.payload);
        },
    },
    extraReducers(builder) {
        builder.addCase(getPosts.pending, (state, action) => {
            state.status = 'loading';
            state.error = null;
        })
        builder.addCase(getPosts.fulfilled, (state, action) => {
            state.status = 'succeeded';
            state.posts = action.payload;
            state.error = null;
        })
        builder.addCase(getPosts.rejected, (state, action) => {
            state.status = 'failed';
            state.error = action.error.message;
        })
    }
})
export const { setPosts } = postsSlice.actions
export default postsSlice.reducer