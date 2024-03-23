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
    <main className="flex items-center justify-center h-screen w-screen bg-blue-100">
      <ToastMaker createToast={createToast} />
      <ToastTray toastBatch={toastBatch} deleteToast={deleteToast} />
    </main>
  );
}

export default App;
