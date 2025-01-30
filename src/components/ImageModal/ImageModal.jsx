import s from "./ImageModal.module.css";
import Modal from "react-modal";

const ImageModal = ({ isOpen, onClose, image }) => {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      className={s.modal}
      overlayClassName={s.overlay}
    >
      <div className={s.container} onClick={onClose}>
        <img
          src={image}
          alt="Image"
          className={s.image}
          onClick={(e) => e.stopPropagation()}
        />
      </div>
    </Modal>
  );
};

export default ImageModal;
