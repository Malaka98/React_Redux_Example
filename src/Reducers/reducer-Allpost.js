import { fetch_button_clicked } from "../Actions/types";

export default function AllPostReducer(state = null, action) {
  switch (action.type) {
    case fetch_button_clicked:
      return action.payload;
    default:
      return state;
  }
}
