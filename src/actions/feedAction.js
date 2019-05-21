import {
  FETCH_FEEDS,
  NEW_FEED,
  ACTIVE_URL,
  DELETE_URL
} from "../actions/types";

import uuidv1 from "uuid/v1";

export const fetchFeeds = url => dispatch => {
  fetch(url)
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: FETCH_FEEDS,
        payload: { id: uuidv1(), url: url, posts: posts }
      })
    );
};

export const activeUrl = url => dispatch => {
  dispatch({
    type: ACTIVE_URL,
    payload: url
  });
};

export const deleteUrl = url => dispatch => {
  dispatch({
    type: DELETE_URL,
    payload: url
  });
};

export const createPost = postData => dispatch => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    headers: {
      "content-type": "application/json"
    },
    body: JSON.stringify(postData)
  })
    .then(res => res.json())
    .then(post =>
      dispatch({
        type: NEW_FEED,
        payload: post
      })
    );
};
