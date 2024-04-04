import { useEffect } from "react";

export default function useEscapeKey(actionAfterEscKeypress) {
  useEffect(() => {
    function handleKeyDown(event) {
      const keyPressed = event.key;
      if (keyPressed === "Escape") {
        actionAfterEscKeypress();
      }
    }
    document.addEventListener("keydown", handleKeyDown);

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [actionAfterEscKeypress]);
}
