import React, {
  ReactNode,
  useCallback,
  useContext,
  useEffect,
  useState,
} from "react";
import { useDebounce } from "use-debounce";
import { useLocalStorage } from "../hooks/useLocalStorage";
import { PhotoSingle } from "../interfaces/interfaces";

interface Props {
  children: ReactNode;
}

const appContext = React.createContext<any>(null);

const ContextProvider = ({ children }: Props) => {
  const [query, setQuery] = useState<string>("");
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [queryValue] = useDebounce(query, 2000);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoSingle>();
  const [queryHistory, setQueryHistory] = useLocalStorage([], "history");
  const [selectedCategory, setSelectedCategory] = useState("");

  const handleAddToHistory = useCallback(
    (query: string) => {
      setQueryHistory((prev: string[]) => [...prev, query]);
    },
    [setQueryHistory]
  );

  const handleDeleteFromHistory = useCallback(
    (query: string) => {
      setQueryHistory((prev: string[]) =>
        prev.filter((item) => item !== query)
      );
    },
    [setQueryHistory]
  );

  useEffect(() => {
    if (queryValue.length > 0) {
      handleAddToHistory(queryValue);
    }
  }, [handleAddToHistory, queryValue]);

  return (
    <appContext.Provider
      value={{
        query,
        setQuery,
        modalOpen,
        setModalOpen,
        selectedId,
        setSelectedId,
        queryValue,
        handleAddToHistory,
        queryHistory,
        handleDeleteFromHistory,
        selectedPhoto,
        setSelectedPhoto,
        selectedCategory,
        setSelectedCategory,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export function useAppContext() {
  const context = useContext(appContext);

  if (!context) console.log("Error");

  return context;
}

export default ContextProvider;
