import { useRef } from "react";
import { UseFormHandleSubmit } from "react-hook-form";

function useEnterKeySubmit(handleSubmit: ReturnType<UseFormHandleSubmit<any>>) {
  const isShiftKeyDown = useRef(false);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      isShiftKeyDown.current = true;
    }

    if (!isShiftKeyDown.current && e.code === "Enter") {
      e.preventDefault();
    }
  };

  const handleKeyUp = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.code === "ShiftLeft" || e.code === "ShiftRight") {
      isShiftKeyDown.current = false;
    }

    if (!isShiftKeyDown.current && e.code === "Enter") {
      handleSubmit();
    }
  };

  return { handleKeyDown, handleKeyUp };
}

export default useEnterKeySubmit;
