export declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    CardOne: {
        cardOne: {
            title: string;
            content: string;
        };
        data: never[];
    };
    footyAPI: import("@reduxjs/toolkit/query").CombinedState<{
        getLFCStats: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "LFCStats", any, "footyAPI">;
    }, "LFCStats", "footyAPI">;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        CardOne: {
            cardOne: {
                title: string;
                content: string;
            };
            data: never[];
        };
        footyAPI: import("@reduxjs/toolkit/query").CombinedState<{
            getLFCStats: import("@reduxjs/toolkit/query").QueryDefinition<any, import("@reduxjs/toolkit/query").BaseQueryFn<string | import("@reduxjs/toolkit/query").FetchArgs, unknown, import("@reduxjs/toolkit/query").FetchBaseQueryError, {}, import("@reduxjs/toolkit/query").FetchBaseQueryMeta>, "LFCStats", any, "footyAPI">;
        }, "LFCStats", "footyAPI">;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
