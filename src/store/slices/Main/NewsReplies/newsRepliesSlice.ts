import { createSlice } from "@reduxjs/toolkit";
import { extraReducersGetNewsComments, extraReducersGetNewsLikes } from "./actions/extraReducers";

export type NewsRepliesState = {
    status: string;
    loading: boolean;
    likes: {
        page: number
        listOfLike: NewsReplies[]
        totalPage: number
        totalLike: number
    }
    comments: {
        page: number
        listOfComment: NewsReplies[]
        totalPage: number
        totalComment: number
    }
};

export type NewsRepliesSearchParams = {
    page: number,
    size: number,
    news_id: string
}

export enum NewsRepliesType {
    like = "like",
    comment = "comment",
}

export type NewsReplies = {
    _id?: string,
    type: string,
    reply_content: string,
    new_id: string,
    created_date: number,
    create_by: {
        action: string
        agent_id: string
        name: string
        updated_at: number
    }
    agent_view: {
        avatar: string
        id: string
        name: string
    }
}

const newsRepliesSlice = createSlice({
    name: "newsRepliesSlice",
    initialState: {
        loading: false,
        likes: {
            listOfLike: [],
            totalPage: 0,
            totalLike: 0,
        },
        comments: {
            listOfComment: [],
            totalPage: 0,
            totalComment: 0,
        },
    } as NewsRepliesState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersGetNewsLikes.pending, (state: NewsRepliesState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersGetNewsLikes.fulfilled,
                (state: NewsRepliesState, { payload: { payload, message, onSuccess } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.likes = {
                            page: payload.page,
                            listOfLike: payload.items,
                            totalLike: payload.total_items,
                            totalPage: payload.total_pages
                        }
                        onSuccess()
                    }
                }
            );

        builder
            .addCase(extraReducersGetNewsComments.pending, (state: NewsRepliesState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersGetNewsComments.fulfilled,
                (state: NewsRepliesState, { payload: { payload, message, onSuccess } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.comments = {
                            page: payload.page,
                            listOfComment: payload.items,
                            totalComment: payload.total_items,
                            totalPage: payload.total_pages
                        }
                        onSuccess()
                    }
                }
            );
    },
});

export default newsRepliesSlice;
