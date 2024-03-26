import "./index.css";
import ToastMaker from "./components/ToastMaker";
import ToastTray from "./components/ToastTray";
import { ToastContextProvider } from "./components/ToastContext";

function App() {
  return (
    <ToastContextProvider>
      <main className="flex flex-col md:flex-row md:items-start items-center justify-flex-start min-h-screen w-screen bg-blue-100 p-4">
        <ToastMaker />
        <ToastTray />
      </main>
    </ToastContextProvider>
  );
}

export default App;
