const reducer = (state, action) => {
  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    case "GET_STORIES":
      return {
        ...state,
        isLoading: false,
        hits: action.payload.hits,
        // nbpages: action.payload.nbpages
      };

    case "REMOVE_POST":
      return {
        ...state,
        hits: state.hits.filter(
          (curElement) => curElement.objectID !== action.payload
        ),
      };

    case "SEARCH_POST":
      return {
        ...state,
        query: action.payload,
      };
  }
  return state;
};

export default reducer;
