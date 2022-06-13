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
        nbPages: action.payload.nbPages,
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

    case "NEXT_PAGE":
      let pageNumIns = state.page + 1;
      if (pageNumIns >= state.nbPages) {
        pageNumIns = 0;
      }
      return {
        ...state,
        page: pageNumIns,
      };

    case "PREV_PAGE":
      let pageNum = state.page - 1;

      if (pageNum <= 0) {
        pageNum = 0;
      }
      return {
        ...state,
        page: pageNum,
      };
  }
  return state;
};

export default reducer;
