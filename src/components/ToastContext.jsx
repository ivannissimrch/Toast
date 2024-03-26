/* eslint-disable react/prop-types */
import { createContext, useState } from "react";

export const ToastContext = createContext({});

export function ToastContextProvider({ children }) {
  const [toastBatch, setToastBatch] = useState([]);
  function createToast(newToast) {
    setToastBatch((prevBatch) => [...prevBatch, newToast]);
  }
  function deleteToast(toastToDelete) {
    setToastBatch((prevBatch) =>
      prevBatch.filter((toast) => {
        return toast.id !== toastToDelete.id;
      })
    );
  }
  return (
    <ToastContext.Provider
      value={{
        toastBatch,
        createToast,
        deleteToast,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}
