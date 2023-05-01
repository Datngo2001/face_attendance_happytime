import { BaseState } from "store/slices";

export function mapPagiantionReponse(state: BaseState, response: any): void {
  state.page_number = response.page_number;
  state.page_size = response.page_size;
  state.total_pages = response.total_pages;
  state.has_next = response.has_next;
  state.has_previous = response.has_previous;
  state.next_page = response.next_page;
  state.previous_page = response.previous_page;
  state.total_items = response.total_items;
}
