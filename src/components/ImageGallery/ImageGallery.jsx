import ImageCard from "../ImageCard/ImageCard";
import s from "./ImageGallery.module.css";

const ImageGallery = ({ articles }) => {
  if (!Array.isArray(articles) || articles.length === 0) {
    return <p>No images.</p>;
  }

  return (
    <ul className={s.list}>
      {articles.map((item) => (
        <li className={s.item} key={item.id}>
          <ImageCard item={item} />
          <p>{item.alt_description}</p>
          <p>Likes: {item.likes}</p>
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
