import { useState } from "react";

const useToggle = (initialValue = false) => {
  const [isOpen, setIsOpen] = useState(initialValue);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const onOpen = () => {
    setIsOpen(true);
  };

  const onClose = () => {
    setIsOpen(false);
  };

  return { isOpen, toggle, onOpen, onClose };
};

export default useToggle;
