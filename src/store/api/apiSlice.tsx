import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { authInterface } from '../../interfaces/authInteface'
import { RootState } from '../store'


export interface LoginRequest {
  identifier: string
  password: string
}

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:1337',
    prepareHeaders: (headers, {getState}) => {
        const token = (getState() as RootState).auth.token
        if (token) {
            headers.set('Authorization', `Bearer ${token}`)
        }
        return headers
    }
  }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    login: builder.mutation<authInterface, LoginRequest>({
      query: (credentials) => ({
        url: 'auth/local',
        method: 'POST',
        body: credentials,
      }),
    }),
    protected: builder.mutation<{ message: string }, void>({
      query: () => 'protected',
    }),
  }),
})

export const { useLoginMutation, useProtectedMutation } = api
