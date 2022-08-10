import { createEntityAdapter, createSelector } from "@reduxjs/toolkit";
import { api } from "../api/apiSlice";
import { RootState } from "../store";

const companiesAdapter = createEntityAdapter<any>({})

type Company = {
    id: number, 
    name: string, 
}
type Companies = {
    companies: Company[]
}
// let initialState : postInterface
const initialState = companiesAdapter.getInitialState()



export const extendedApiSplice = api.injectEndpoints({
    endpoints: builder => ({
        getCompanies: builder.query({
            query: () => '/companies',
            transformResponse: (res: Companies, meta, arg) => {
                console.log(res)
                const companiesloadedCompanies = res
                return companiesAdapter.setAll(initialState, companiesloadedCompanies)
            },
            providesTags: (result) => [{ type: 'Company'}]
        }),
        createCompany: builder.mutation({
            query: data => ({
                url: '/companies',
                method: 'POST',
                body: {
                    ...data
                }
            }),
            invalidatesTags: [ {type: 'Company'}]
        }),
        updateCompany: builder.mutation({
            query: data => ({
                url: `/companies/${data.id}`,
                method: 'PUT',
                body: {
                    ...data
                }
            }),
            invalidatesTags: [ {type: 'Company'}]
        }),
        deleteCompany: builder.mutation({
            query: id => ({
                url: `companies/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: [ {type: 'Company'}]
        })
    })
})

export const {
    useGetCompaniesQuery,
    useCreateCompanyMutation,
    useUpdateCompanyMutation,
    useDeleteCompanyMutation
} = extendedApiSplice

export const selectCompanysResult = extendedApiSplice.endpoints.getCompanies.select('')

const selectCompaniesData = createSelector(
    selectCompanysResult,
    postsResult => postsResult.data
)


export const {
    selectAll: selectAllCompanies,
} = companiesAdapter.getSelectors<RootState>(state => selectCompaniesData(state) ?? initialState)