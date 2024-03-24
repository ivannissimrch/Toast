import PropTypes from "prop-types";
import Toast from "./Toast";
import { AnimatePresence } from "framer-motion";

export default function ToastTray({ toastBatch, deleteToast }) {
  return (
    <ul className="w-screen md:w-1/2 px-4">
      <AnimatePresence>
        {toastBatch.map((newToast) => (
          <Toast
            key={newToast.id}
            newToast={newToast}
            deleteToast={deleteToast}
          />
        ))}
      </AnimatePresence>
    </ul>
  );
}

ToastTray.propTypes = {
  toastBatch: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteToast: PropTypes.func.isRequired,
};
