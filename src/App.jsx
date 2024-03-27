import "./index.css";
import ToastMaker from "./components/ToastMaker";
import ToastTray from "./components/ToastTray";
import { useToastContext } from "./components/ToastContext";
import useEscapeKey from "./hooks/useEscapeKey";
function App() {
  const { deleteAllToast } = useToastContext();
  useEscapeKey(deleteAllToast);

  return (
    <main className="flex flex-col md:flex-row md:items-start items-center justify-flex-start min-h-screen w-screen bg-blue-100 p-4">
      <ToastMaker />
      <ToastTray />
    </main>
  );
}

export default App;
