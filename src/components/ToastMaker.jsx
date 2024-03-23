import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function ToastMaker({ createToast }) {
  const [newToastMessage, setNewToastMessage] = useState("");
  const [toastVariantSelected, setToastVariantSelected] = useState("notice");
  const toastVariantsValues = [
    { value: "notice", label: "Notice" },
    { value: "warning", label: "Warning" },
    { value: "success", label: "Success" },
    { value: "error", label: "Error" },
  ];
  const messageInputRef = useRef();

  function handleMessageChange(event) {
    const message = event.target.value;
    setNewToastMessage(message);
  }

  function handleVariantSelectedChange(event) {
    const varianSelectedValue = event.target.value;
    setToastVariantSelected(varianSelectedValue);
  }

  function handleSubmit(event) {
    event.preventDefault();
    if (newToastMessage === "") return;
    createToast({
      id: uuidv4(),
      variant: toastVariantSelected,
      message: newToastMessage,
    });
    setNewToastMessage("");
    messageInputRef.current.focus();
  }

  return (
    <section className="bg-slate-500 w-1/2 p-5 m-6 ">
      <form onSubmit={handleSubmit}>
        <label>Enter toast message </label>
        <textarea
          className="w-full"
          onChange={handleMessageChange}
          value={newToastMessage}
          ref={messageInputRef}
          autoFocus
        />
        <label>Variant</label>
        <div className="flex justify-between">
          {toastVariantsValues.map(({ value, label }) => {
            return (
              <label key={value}>
                <input
                  type="radio"
                  name="radioGroup"
                  checked={toastVariantSelected === value}
                  onChange={handleVariantSelectedChange}
                  value={value}
                />
                {label}
              </label>
            );
          })}
        </div>
        <button
          className="bg-blue-400 p-2 rounded
        "
          type="submit"
        >
          Create Toast
        </button>
      </form>
    </section>
  );
}

ToastMaker.propTypes = {
  createToast: PropTypes.func.isRequired,
};
