import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


// 1.) add proxy with local host, useSt, useE, fetch with query params 

   

 export const apiSlice = createApi({
    reducerPath:"footyAPI",
    baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL,
    mode: 'cors',
    credentials: "same-origin",
prepareHeaders:(headers) =>{
    const accessToken = localStorage.getItem('access_token');
    if(accessToken){
        headers.set('authorization', `Bearer ${accessToken}`);
    }   
    return headers;
} }),
tagTypes:['LFCStats'],

    endpoints: (builder) => ({
        getLFCStats: builder.query({
            query: () => '/api/LFCStats',
            providesTags: ['LFCStats'],
            keepUnusedDataFor:Infinity,
        }),
    }),
       
});

       
       





    



