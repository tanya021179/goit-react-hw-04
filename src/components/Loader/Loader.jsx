import { Triangle } from "react-loader-spinner";
import s from "./Loader.module.css";

const Loader = () => {
  return (
    <div className={s.loader}>
      <Triangle color="#4fa94d" height={80} width={80} />
    </div>
  );
};

export default Loader;
