import PropTypes from "prop-types";
import { IoCloseCircleOutline } from "react-icons/io5";
export default function Toast({ newToast, deleteToast }) {
  let toastBgColor = "";
  if (newToast.variant === "notice") {
    toastBgColor = "bg-blue-200";
  }
  if (newToast.variant === "warning") {
    toastBgColor = "bg-yellow-200";
  }
  if (newToast.variant === "succes") {
    toastBgColor = "bg-green-200";
  }
  if (newToast.variant === "error") {
    toastBgColor = "bg-red-200";
  }

  return (
    <li className={` h-20 p-4 m-4 flex justify-between ${toastBgColor}`}>
      <p className="flex flex-col">{newToast.message}</p>
      <IoCloseCircleOutline size={20} onClick={() => deleteToast(newToast)} />
    </li>
  );
}

Toast.propTypes = {
  newToast: PropTypes.object.isRequired,
  deleteToast: PropTypes.func.isRequired,
};
