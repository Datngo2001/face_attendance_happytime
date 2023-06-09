import { NewsState } from "../newsSlice";

export const reducersSetCurrentNews = (
    state: NewsState,
    action: { payload: { id: string } }
) => {
    state.news = state.listOfNews.find((c) => c._id === action.payload.id);
};
