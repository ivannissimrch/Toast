import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import determineToastStyle from "../helpers/determineToastStyle";
import { useEffect, useState } from "react";
export default function Toast({ newToast, deleteToast }) {
  const { toastBgColor, toastIcon } = determineToastStyle(newToast);
  const [animationClass, setAnimationClass] = useState(
    "translate-x-20 opacity-50"
  );

  function addToastAnimation() {
    setAnimationClass("translate-x-0 opacity-100 ");
  }

  function deleteToastAnimation(newToast) {
    setAnimationClass("opacity-50 ");
    setTimeout(() => {
      deleteToast(newToast);
    }, 500);
  }

  useEffect(() => addToastAnimation(), []);

  return (
    <li
      className={` min-h-20 p-4 my-4 md:my-4 flex justify-between items-center rounded-lg ${toastBgColor} ${animationClass} transition-all duration-500`}
    >
      <div className="hidden">{newToast.variant}</div>
      {toastIcon}
      <p className="flex flex-grow-1 w-full text-start ml-2">
        {newToast.message}
      </p>
      <button onClick={() => deleteToastAnimation(newToast)}>
        <IoClose size={20} aria-label="Dismiss message" aria-live="off" />
      </button>
    </li>
  );
}

Toast.propTypes = {
  newToast: PropTypes.object.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
