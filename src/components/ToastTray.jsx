import { useToastContext } from "./ToastContext";
import Toast from "./Toast";
import useEscapeKey from "../hooks/useEscapeKey.js";

export default function ToastTray() {
  const { toastBatch, deleteToast, deleteAllToast } = useToastContext();
  useEscapeKey(deleteAllToast);

  return (
    <ul
      className="w-screen md:w-1/2 px-4"
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
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
