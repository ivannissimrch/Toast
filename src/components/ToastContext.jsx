import PropTypes from "prop-types";
import {createContext, useContext, useState} from "react";

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

  function deleteAllToasts(){
      setToastBatch([])
  }
  return (
    <ToastContext.Provider
      value={{
        toastBatch,
        createToast,
        deleteToast,
          deleteAllToasts
      }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export function useToastContext(){
    const context = useContext(ToastContext)
    return context;
}

ToastContextProvider.propTypes = {
    children: PropTypes.object.isRequired,
};