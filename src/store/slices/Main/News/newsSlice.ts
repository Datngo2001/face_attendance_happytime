import { createSlice } from "@reduxjs/toolkit";
import { extraReducersCreateNews, extraReducersDeleteNews, extraReducersGetNewsById, extraReducersSearchNews, extraReducersUpdateNews } from "./actions/extraReducers";
import { reducersSetCurrentNews } from "./actions/reducers";

export type NewsState = {
    status: string;
    loading: boolean;
    listOfNews: News[];
    news: News;
    totalPages: number;
    totalNews: number;
    lastCreateSuccess: number;
    lastUpdateSuccess: number;
    lastDeleteSuccess: number;
};

export type NewsSearchParams = {
    page: number,
    size: number,
    title: string
}

export enum NewsStatus {
    draft = "draft",
    on_scheduled = "on_scheduled",
    posted = "posted"
}

export type News = {
    _id?: string,
    title: string,
    category_id: string,
    category_name: string,
    status: NewsStatus,
    banner: string,
    content: string,
    total_views: number,
    total_likes: number,
    total_replies: number,
    post_date: number,
    job_id: string
    create_by: {
        action: string
        agent_id: string
        name: string
        updated_at: number
    }
    ref: {
        action: string
        agent_id: string
        name: string
        updated_at: number
    },
}

const newsSlice = createSlice({
    name: "newsSlice",
    initialState: {
        loading: false,
        listOfNews: [],
        news: null,
        totalPages: 0,
        totalNews: 0,
        lastCreateSuccess: 0,
        lastUpdateSuccess: 0,
        lastDeleteSuccess: 0,
    } as NewsState,
    reducers: {
        setCurrentNews: reducersSetCurrentNews
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersSearchNews.pending, (state: NewsState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersSearchNews.fulfilled,
                (state: NewsState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.totalPages = payload.total_pages;
                        state.totalNews = payload.total_items;
                        state.listOfNews = payload.items;
                        state.news = null
                    }
                }
            );

        builder
            .addCase(extraReducersGetNewsById.pending, (state: NewsState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersGetNewsById.fulfilled,
                (state: NewsState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.news = payload
                    }
                }
            );

        builder
            .addCase(extraReducersCreateNews.pending, (state: NewsState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersCreateNews.fulfilled,
                (state: NewsState, { payload: { payload, message, onSuccess } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastCreateSuccess = Date.now();
                        onSuccess();
                    }
                }
            );

        builder
            .addCase(extraReducersUpdateNews.pending, (state: NewsState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersUpdateNews.fulfilled,
                (state: NewsState, { payload: { payload, message, onSuccess } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastUpdateSuccess = Date.now();
                        onSuccess();
                    }
                }
            );

        builder
            .addCase(extraReducersDeleteNews.pending, (state: NewsState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersDeleteNews.fulfilled,
                (state: NewsState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastDeleteSuccess = Date.now();
                    }
                }
            );
    },
});

export const { setCurrentNews } = newsSlice.actions;
export default newsSlice;
