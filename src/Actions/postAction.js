import { fetch_button_clicked } from "./types";

export const fetchposts = () => {
  return {
    type: fetch_button_clicked,
    payload: [
      {
        userID: 1,
        post: "Post1",
      },
      {
        userID: 2,
        post: "Post2",
      },
      {
        userID: 3,
        post: "Post3",
      },
    ],
  };
};
