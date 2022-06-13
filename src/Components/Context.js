import React, { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "./Reducer";

const API = "http://hn.algolia.com/api/v1/search?";

const initialState = {
  isLoading: true,
  query: "React",
  nbPages: 0,
  page: 0,
  hits: [],
};

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchApi = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
      //   setData("data", data);
      dispatch({
        type: "GET_STORIES",
        payload: {
          hits: data.hits,
          nbPages: data.nbPages,
        },
      });
    } catch (err) {
      console.log("err", err);
    }
  };

  const removePost = (id) => {
    dispatch({ type: "REMOVE_POST", payload: id });
  };

  const searchPost = (searchQuery) => {
    dispatch({ type: "SEARCH_POST", payload: searchQuery });
  };

  const getNextPage = () => {
    dispatch({ type: "NEXT_PAGE" });
  };

  const getPrevPage = () => {
    dispatch({ type: "PREV_PAGE" });
  };

  useEffect(() => {
    fetchApi(`${API}query=${state.query}&page=${state.page}`);
  }, [state.query, state.page]);
  return (
    <>
      <AppContext.Provider
        value={{ ...state, removePost, searchPost, getPrevPage, getNextPage }}
      >
        {children}
      </AppContext.Provider>
    </>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
