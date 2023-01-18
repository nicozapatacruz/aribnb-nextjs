"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
  firstName: string;
};

interface ContextProps {
  postType: string;
  setPostType: Dispatch<SetStateAction<string>>;
  likedPosts: DataType[];
  setLikedPosts: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  postType: "",
  setPostType: (): string => "",
  likedPosts: [],
  setLikedPosts: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [postType, setPostType] = useState("cabins");
  const [likedPosts, setLikedPosts] = useState<[] | DataType[]>([]);
  return <GlobalContext.Provider value={{ postType, setPostType, likedPosts, setLikedPosts }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
