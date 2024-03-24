import { useState } from "react";
import "./index.css";
import ToastMaker from "./components/ToastMaker";
import ToastTray from "./components/ToastTray";

function App() {
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
    <main className="flex flex-col md:flex-row md:items-start items-center justify-flex-start min-h-screen w-screen bg-blue-100 p-4">
      <ToastMaker createToast={createToast} />
      <ToastTray toastBatch={toastBatch} deleteToast={deleteToast} />
    </main>
  );
}

export default App;
