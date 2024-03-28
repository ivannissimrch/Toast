import { useToastContext } from "./ToastContext";
import Toast from "./Toast";
import { AnimatePresence } from "framer-motion";

export default function ToastTray() {
  const { toastBatch, deleteToast } = useToastContext();

  return (
    <ul
      className="w-screen md:w-1/2 px-4"
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
