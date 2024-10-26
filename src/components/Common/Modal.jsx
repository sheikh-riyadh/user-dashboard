import { useEffect } from "react";
import PropTypes from "prop-types";
import { FaCircleXmark } from "react-icons/fa6";
import cn from "../../utils/cn";


const Modal = ({ isOpen, onClose, className, title, children }) => {
  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (isOpen && e.target.classList.contains("modal-overlay")) {
        onClose();
      }
    };

    window.addEventListener("click", handleOutsideClick);

    return () => {
      window.removeEventListener("click", handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return (
    <div
      className={`fixed  top-0 left-0 z-50 bg-[#2222227c] overflow-x-hidden overflow-y-auto inset-0 h-[calc(100%)] max-h-full bg-black/90 flex flex-col justify-center items-center modal-overlay zoom-in-element ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div
        className={cn(
          "bg-white rounded-lg p-5 shadow-lg  overflow-y-auto custom-bar",
          className
        )}
      >
        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-between">
            <span className="font-bold">{title}</span>
            <FaCircleXmark
              onClick={() => onClose()}
              className="text-2xl text-danger duration-300 cursor-pointer"
            />
          </div>
          <div>{children}</div>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  isOpen: PropTypes.bool.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
};

export default Modal;