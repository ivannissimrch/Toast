import { useContext } from "react";
import { ToastContext } from "./ToastContext";
import Toast from "./Toast";
import { AnimatePresence } from "framer-motion";

export default function ToastTray() {
  const { toastBatch, deleteToast } = useContext(ToastContext);
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
