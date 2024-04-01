import "./index.css";
import ToastMaker from "./components/ToastMaker";
import ToastTray from "./components/ToastTray";
import { useToastContext } from "./components/ToastContext";

function App() {
  const {  toastBatch } = useToastContext();

  return (
    <main className="flex flex-col md:flex-row md:items-start items-center justify-flex-start min-h-screen w-screen bg-blue-100 p-4">
      <ToastMaker />
        {toastBatch.length > 0 && <ToastTray />}
    </main>
  );
}

export default App;
