import { createSlice } from "@reduxjs/toolkit";
import { extraReducersCreateNewsCategory, extraReducersDeleteNewsCategory, extraReducersSearchNewsCategory, extraReducersUpdateNewsCategory } from "./actions/extraReducers";
import { reducersSetCurrentNewsCategory } from "./actions/reducers";

export type NewsCategoryState = {
    status: string;
    loading: boolean;
    listOfNewsCategory: NewsCategory[];
    newsCategory: NewsCategory;
    totalPages: number;
    totalCategories: number;
    lastCreateSuccess: number;
    lastUpdateSuccess: number;
    lastDeleteSuccess: number;
};

export type NewsCategorySearchParams = {
    page: number,
    size: number,
    keyword: string
}

export type NewsCategory = {
    _id?: string,
    created_date: number,
    last_updated_date: number,
    category_name: string,
    total_news: number
}

const newsCategoriesSlice = createSlice({
    name: "newsCategories",
    initialState: {
        loading: false,
        listOfNewsCategory: [],
        newsCategory: null,
        totalPages: 0,
        totalCategories: 0,
        lastCreateSuccess: 0,
        lastUpdateSuccess: 0,
        lastDeleteSuccess: 0,
    } as NewsCategoryState,
    reducers: {
        setCurrentNewsCategory: reducersSetCurrentNewsCategory
    },
    extraReducers: (builder) => {
        builder
            .addCase(extraReducersSearchNewsCategory.pending, (state: NewsCategoryState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersSearchNewsCategory.fulfilled,
                (state: NewsCategoryState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.totalPages = payload.total_pages;
                        state.totalCategories = payload.total_items;
                        state.listOfNewsCategory = payload.items;
                    }
                }
            );

        builder
            .addCase(extraReducersCreateNewsCategory.pending, (state: NewsCategoryState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersCreateNewsCategory.fulfilled,
                (state: NewsCategoryState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastCreateSuccess = Date.now();
                    }
                }
            );

        builder
            .addCase(extraReducersUpdateNewsCategory.pending, (state: NewsCategoryState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersUpdateNewsCategory.fulfilled,
                (state: NewsCategoryState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastUpdateSuccess = Date.now();
                    }
                }
            );

        builder
            .addCase(extraReducersDeleteNewsCategory.pending, (state: NewsCategoryState) => {
                state.loading = true;
            })
            .addCase(
                extraReducersDeleteNewsCategory.fulfilled,
                (state: NewsCategoryState, { payload: { payload, message } }) => {
                    state.loading = false;
                    if (message === "success") {
                        state.lastDeleteSuccess = Date.now();
                    }
                }
            );
    },
});

export const { setCurrentNewsCategory } = newsCategoriesSlice.actions;
export default newsCategoriesSlice;
