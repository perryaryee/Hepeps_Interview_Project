import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = 'https://tdhc.pythonanywhere.com';

const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        fetchData: builder.query({
            query: () => '/members/',
            transformResponse: (response) => response.data.results,
        }),

        fetchDataById: builder.query({
            query: (id) => `/members/${id}`,
        }),

        postData: builder.mutation({
            query: (data) => ({
                url: '/members/',
                method: 'POST',
                body: data,
            }),
        }),

        putData: builder.mutation({
            query: (data, id) => ({
                url: `/members/${id}`,
                method: 'PUT',
                body: data,
            }),
        }),

        putData: builder.mutation({
            query: (data, id) => ({
                url: `/members/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),

        deleteData: builder.mutation({
            query: (id) => ({
                url: `/members/${id}`,
                method: 'DELETE',
            }),
        })
    }),
});

export const { useFetchDataQuery, useFetchDataByIdQuery, usePostDataMutation, usePutDataMutation, useDeleteDataMutation } = api;
export { api };
