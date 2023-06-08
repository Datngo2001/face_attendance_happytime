import { NewsCategoryState } from "../newsCategoriesSlice";

export const reducersSetCurrentNewsCategory = (
    state: NewsCategoryState,
    action: { payload: { id: string } }
) => {
    state.newsCategory = state.listOfNewsCategory.find((c) => c._id === action.payload.id);
};
