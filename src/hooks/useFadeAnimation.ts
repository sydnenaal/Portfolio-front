import { useEffect, useState } from "react";

export default function useFadeAnimation(isOpen: boolean) {
  const [render, setRender] = useState<Boolean>(isOpen);

  function handleEndAnimation(): void {
    if (!isOpen) {
      setRender(false);
    }
  }

  useEffect(() => {
    if (isOpen) {
      setRender(true);
    }
  }, [isOpen]);

  return { render, handleEndAnimation };
}
