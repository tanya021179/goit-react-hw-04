import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar/SearchBar";
import { fetchArticles } from "./services/api";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import { Toaster } from "react-hot-toast";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ImageModal from "./components/ImageModal/ImageModal";
import Modal from "react-modal";

Modal.setAppElement("#root");

const App = () => {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [chooseImage, setChooseImage] = useState("");

  useEffect(() => {
    const getData = async () => {
      if (!query) return;
      try {
        setIsLoading(true);
        setIsError(false);
        const data = await fetchArticles(query, page);
        setArticles((prev) => [...prev, ...data]);
      } catch {
        setIsError(true);
      } finally {
        setIsLoading(false);
      }
    };
    getData();
  }, [query, page]);

  const handleSetQuery = (newQuery) => {
    setQuery(newQuery);
    setArticles([]);
    setPage(1);
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleOpenModal = (image) => {
    setChooseImage(image);
    setModalIsOpen(true);
  };

  const handleCloseModal = () => {
    setChooseImage("");
    setModalIsOpen(false);
  };

  return (
    <>
      <Toaster />
      <SearchBar onSubmit={handleSetQuery} />
      {articles.length > 0 && (
        <ImageGallery articles={articles} onOpenModal={handleOpenModal} />
      )}
      {isLoading && <Loader />}
      {isError && <ErrorMessage />}
      <LoadMoreBtn onLoadMore={handleLoadMore} />
      <ImageModal
        isOpen={modalIsOpen}
        onClose={handleCloseModal}
        image={chooseImage}
      />
    </>
  );
};

export default App;
