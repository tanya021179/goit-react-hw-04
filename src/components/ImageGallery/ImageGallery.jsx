import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";
import { useRef, useEffect } from "react";

const ImageGallery = ({ articles, onOpenModal }) => {
  const lastImageRef = useRef(null);

  useEffect(() => {
    if (lastImageRef.current) {
      lastImageRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [articles]);

  if (!Array.isArray(articles) || articles.length === 0) {
    return <p>No images.</p>;
  }

  return (
    <ul className={s.list}>
      {articles.map((item, index) => (
        <li
          className={s.item}
          key={item.id}
          onClick={() => onOpenModal(item.urls.regular)}
          ref={index === articles.length - 1 ? lastImageRef : null}
        >
          <ImageCard item={item} />
          <div className={s.text}>
            <p>{item.alt_description}</p>
            <p>Likes: {item.likes}</p>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
