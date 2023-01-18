"use client";
import { createContext, useContext, Dispatch, SetStateAction, useState } from "react";

type DataType = {
  id: number;
};

interface ContextProps {
  likedPosts: DataType[];
  setLikedPosts: Dispatch<SetStateAction<DataType[]>>;
}

const GlobalContext = createContext<ContextProps>({
  likedPosts: [],
  setLikedPosts: (): DataType[] => [],
});

export const GlobalContextProvider = ({ children }) => {
  const [likedPosts, setLikedPosts] = useState<[] | DataType[]>([]);
  return <GlobalContext.Provider value={{ likedPosts, setLikedPosts }}>{children}</GlobalContext.Provider>;
};

export const useGlobalContext = () => useContext(GlobalContext);
