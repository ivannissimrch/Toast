export default function radioGroup({
  toastVariantSelected,
  handleVariantSelectedChange,
}) {
  const toastVariantsValues = [
    { value: "notice", label: "Notice" },
    { value: "warning", label: "Warning" },
    { value: "success", label: "Success" },
    { value: "error", label: "Error" },
  ];

  return (
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
  );
}
