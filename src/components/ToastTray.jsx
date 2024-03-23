import PropTypes from "prop-types";
import Toast from "./Toast";

export default function ToastTray({ toastBatch, deleteToast }) {
  return (
    <ul className="w-1/2 p-5 m-6">
      {toastBatch.map((newToast) => (
        <Toast
          key={newToast.id}
          newToast={newToast}
          deleteToast={deleteToast}
        />
      ))}
    </ul>
  );
}

ToastTray.propTypes = {
  toastBatch: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteToast: PropTypes.func.isRequired,
};
