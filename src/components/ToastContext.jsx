import PropTypes from "prop-types";
import { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

export const ToastContext = createContext({});

export function ToastContextProvider({ children }) {
  const [toastBatch, setToastBatch] = useState([]);
  function createToast(newToast) {
    const newToastWithId = { ...newToast, id: uuidv4() };

    setToastBatch((prevBatch) => [...prevBatch, newToastWithId]);
  }
  function deleteToast(toastToDelete) {
    setToastBatch((prevBatch) =>
      prevBatch.filter((toast) => {
        return toast.id !== toastToDelete.id;
      })
    );
  }

  function deleteAllToast() {
    setToastBatch([]);
  }
  return (
    <ToastContext.Provider
      value={{
        toastBatch,
        createToast,
        deleteToast,
        deleteAllToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext() {
  const context = useContext(ToastContext);
  return context;
}

ToastContextProvider.propTypes = {
  children: PropTypes.node,
};
