import { FETCH_FEEDS, DELETE_URL, ACTIVE_URL } from "../actions/types";

const initialState = {
  feeds: [],
  activeURL: ""
};

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_FEEDS:
      let newFeed = [action.payload, ...state.feeds];

      return {
        ...state,
        feeds: newFeed
      };

    case ACTIVE_URL:
      function search(searchKey, arr, returnId) {
        for (var i = 0; i < arr.length; i++) {
          console.log(arr[i], i);
          if (arr[i].id === searchKey) {
            if (returnId) {
              return arr[i].id;
            }
            return i;
          }
        }
      }
      let indx = search(action.payload, state.feeds, true);
      console.log(`state.feeds ${indx}`);

      return Object.assign({}, state, { activeURL: indx });
    case DELETE_URL:
      let delIndex = search(action.payload, state.feeds);
      let deletedFeed = [...state.feeds];

      deletedFeed.splice(delIndex, 1);
      return {
        ...state,
        feeds: deletedFeed
      };

    default:
      return state;
  }
}
