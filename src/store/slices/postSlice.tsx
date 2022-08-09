import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { postInterface, postsInterface } from "../../interfaces/postsInterface";
import { api } from "../api/apiSlice";
import { RootState } from "../store";

const postsAdapter = createEntityAdapter<any>({})


// let initialState : postInterface
const initialState = postsAdapter.getInitialState()



export const extendedApiSplice = api.injectEndpoints({
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts',
            transformResponse: (res: postsInterface, meta, arg) => {
                console.log(res)
                const loadedPosts = res
                return postsAdapter.setAll(initialState, loadedPosts)
            },
            providesTags: (result) => [{ type: 'Post'}]
        }),
        createPost: builder.mutation({
            query: data => ({
                url: '/posts',
                method: 'POST',
                body: {
                    ...data
                }
            }),
            invalidatesTags: [ {type: 'Post'}]
        }),
        updatePost: builder.mutation({
            query: data => ({
                url: `/posts/${data.id}`,
                method: 'PUT',
                body: {
                    ...data
                }
            }),
            invalidatesTags: [ {type: 'Post'}]
        }),
        deletePost: builder.mutation({
            query: id => ({
                url: `posts/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [ {type: 'Post'}]
        })
    })
})

export const {
    useGetPostsQuery,
    useCreatePostMutation,
    useUpdatePostMutation,
    useDeletePostMutation
} = extendedApiSplice

export const selectPostsResult = extendedApiSplice.endpoints.getPosts.select('')

const selectPostsData = createSelector(
    selectPostsResult,
    postsResult => postsResult.data
)


export const {
    selectAll: selectAllPosts,
} = postsAdapter.getSelectors<RootState>(state => selectPostsData(state) ?? initialState)