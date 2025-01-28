import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchArticles(query);
        setArticles(data);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
  };

  return (
    <>
      <Toaster />
      <SearchBar handleSetQuery={handleSetQuery} />
      <ImageGallery articles={articles} />
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}

      {/* {!isLoading && !isError && articles.length > 0 && (
        <ImageGallery articles={articles} />
      )}
      {!isLoading && !isError && articles.length === 0 && (
        <p>No images found</p>
      )} */}
    </>
  );
};

export default App;
