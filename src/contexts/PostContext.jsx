// PostContext.js
import React, { createContext, useReducer, useContext } from "react";

const PostContext = createContext();

const postReducer = (state, action) => {
  switch (action.type) {
    case "ADD_POST":
      return [...state, action.payload];
    case "DELETE_POST":
      return state.filter((post) => post.id !== action.payload);
    case "SET_POSTS":
      return action.payload;
    default:
      return state;
  }
};

export const PostProvider = ({ children }) => {
  const [posts, dispatch] = useReducer(postReducer, []);

  return (
    <PostContext.Provider value={{ posts, dispatch }}>
      {children}
    </PostContext.Provider>
  );
};

export const usePosts = () => useContext(PostContext);
