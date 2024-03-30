import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import determineToastStyle from "../helpers/determineToastStyle";
export default function Toast({ newToast, deleteToast }) {
  const { toastBgColor, toastIcon } = determineToastStyle(newToast);

  return (
    <motion.li
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={` min-h-20 p-4 my-4 md:my-4 flex justify-between items-center rounded-lg ${toastBgColor}`}
    >
      <div className="hidden">{newToast.variant}</div>
      {toastIcon}
      <p className="flex flex-grow-1 w-full text-start ml-2">
        {newToast.message}
      </p>
      <button onClick={() => deleteToast(newToast)}>
        <IoClose size={20} aria-label="Dismiss message" aria-live="off" />
      </button>
    </motion.li>
  );
}

Toast.propTypes = {
  newToast: PropTypes.object.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
