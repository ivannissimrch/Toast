import PropTypes from "prop-types";
import { IoCloseCircleOutline } from "react-icons/io5";
import { motion } from "framer-motion";

export default function Toast({ newToast, deleteToast }) {
  let toastBgColor = "";
  if (newToast.variant === "notice") {
    toastBgColor = "bg-blue-200";
  }
  if (newToast.variant === "warning") {
    toastBgColor = "bg-yellow-200";
  }
  if (newToast.variant === "success") {
    toastBgColor = "bg-lime-200";
  }
  if (newToast.variant === "error") {
    toastBgColor = "bg-red-200";
  }

  return (
    <motion.li
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={` min-h-20 p-4 my-4 md:my-4 flex justify-between ${toastBgColor}`}
    >
      <p className="flex flex-grow-1 w-full text-start">{newToast.message}</p>
      <IoCloseCircleOutline size={20} onClick={() => deleteToast(newToast)} />
    </motion.li>
  );
}

Toast.propTypes = {
  newToast: PropTypes.object.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
