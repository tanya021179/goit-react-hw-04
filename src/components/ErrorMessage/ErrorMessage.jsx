import s from "./ErrorMessage.module.css";

const ErrorMessage = () => {
  return (
    <div className={s.errorMessage}>
      <h2>Error! Try again!</h2>
    </div>
  );
};

export default ErrorMessage;
