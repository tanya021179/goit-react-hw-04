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
