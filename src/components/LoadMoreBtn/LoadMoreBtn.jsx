import s from "./LoadMoreBtn.module.css";

const LoadMoreBtn = ({ onLoadMore }) => {
  return (
    <div className={s.containerBtn}>
      <button className={s.button} onClick={onLoadMore}>
        Load more
      </button>
    </div>
  );
};

export default LoadMoreBtn;
