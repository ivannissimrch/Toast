import { useToastContext } from "./ToastContext.jsx";
import { useRef, useState } from "react";
import RadioGroup from "./RadioGroup.jsx";

export default function ToastMaker() {
  const { createToast } = useToastContext();
  const [newToastMessage, setNewToastMessage] = useState("");
  const [toastVariantSelected, setToastVariantSelected] = useState("notice");
  const messageInputRef = useRef();

  function handleMessageChange(event) {
    const message = event.target.value;
    setNewToastMessage(message);
  }

  function handleVariantSelectedChange(event) {
    const variantSelectedValue = event.target.value;
    setToastVariantSelected(variantSelectedValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToastMessage === "") return;
    createToast({
      variant: toastVariantSelected,
      message: newToastMessage,
    });
    setNewToastMessage("");
    messageInputRef.current.focus();
  }

  return (
    <section className="bg-slate-500 w-screen md:w-1/2 p-8 md:ml-4 flex md:my-4">
      <form onSubmit={handleSubmit} className="w-full">
        <h2 className="text-2xl">Enter toast message </h2>
        <input
          type="text"
          className="w-full h-12"
          onChange={handleMessageChange}
          value={newToastMessage}
          ref={messageInputRef}
          autoFocus
        />
        <label>Variant</label>
        <RadioGroup
          toastVariantSelected={toastVariantSelected}
          handleVariantSelectedChange={handleVariantSelectedChange}
        />
        <button
          className="bg-blue-400 p-2 rounded w-full my-2
        "
          type="submit"
        >
          Create Toast
        </button>
      </form>
    </section>
  );
}
