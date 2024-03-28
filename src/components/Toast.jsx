import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { PiWarningCircleBold } from "react-icons/pi";
import { PiWarningBold } from "react-icons/pi";
import { PiWarningOctagonBold } from "react-icons/pi";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function Toast({ newToast, deleteToast }) {
  let toastBgColor = "";
  let icon = "";
  if (newToast.variant === "notice") {
    toastBgColor = "bg-blue-200";
    icon = <PiWarningCircleBold size={30} />;
  }
  if (newToast.variant === "warning") {
    toastBgColor = "bg-yellow-200";
    icon = <PiWarningBold size={30} />;
  }
  if (newToast.variant === "success") {
    toastBgColor = "bg-lime-200";
    icon = <IoIosCheckmarkCircle size={30} />;
  }
  if (newToast.variant === "error") {
    toastBgColor = "bg-red-200";
    icon = <PiWarningOctagonBold size={30} />;
  }

  return (
    <motion.li
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.5 }}
      className={` min-h-20 p-4 my-4 md:my-4 flex justify-between items-center rounded-lg ${toastBgColor}`}
    >
      {icon}
      <p className="flex flex-grow-1 w-full text-start ml-2">
        <div className="hidden">{newToast.variant}</div>
        {newToast.message}
      </p>
      <IoClose
        size={20}
        onClick={() => deleteToast(newToast)}
        aria-label="Dismiss message"
        aria-live="off"
      />
    </motion.li>
  );
}

Toast.propTypes = {
  newToast: PropTypes.object.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
