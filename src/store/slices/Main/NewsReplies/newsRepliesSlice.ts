import { createSlice } from "@reduxjs/toolkit";
import { extraReducersSearchNewsReplies } from "./actions/extraReducers";

export type NewsRepliesState = {
    status: string;
    loading: boolean;
    listOfNewsReplies: NewsReplies[];
    totalPages: number;
    totalNews: number;
    lastCreateSuccess: number;
    lastUpdateSuccess: number;
    lastDeleteSuccess: number;
};

export type NewsRepliesSearchParams = {
    page: number,
    size: number,
    reply_content: string,
    type: NewsRepliesType,
}

export enum NewsRepliesType {
    draft = "draft",
    on_scheduled = "on_scheduled",
    posted = "posted"
}

export type NewsReplies = {
    _id?: string,
    type: string,
    reply_content: string,
    new_id: string,
    create_by: {
        action: string
        agent_id: string
        name: string
        updated_at: number
    }
}

const newsRepliesSlice = createSlice({
    name: "newsRepliesSlice",
    initialState: {
        loading: false,
        listOfNewsReplies: [],
        totalPages: 0,
        totalNews: 0,
        lastCreateSuccess: 0,
        lastUpdateSuccess: 0,
        lastDeleteSuccess: 0,
    } as NewsRepliesState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersSearchNewsReplies.pending, (state: NewsRepliesState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersSearchNewsReplies.fulfilled,
                (state: NewsRepliesState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.totalPages = payload.total_pages;
                        state.totalNews = payload.total_items;
                        state.listOfNewsReplies = payload.items;
                    }
                }
            );
    },
});

export default newsRepliesSlice;
