import React from "react";
import useToggle from "./hooks/useToggle";

const ToggleExample = () => {
  //const [isOpen, setIsOpen] = useState(false);

  // const toggle = () => {
  //   setIsOpen(!isOpen);
  // };

  // const onOpen = () => {
  //   setIsOpen(true);
  // };

  // const onClose = () => {
  //   setIsOpen(false);
  // };

  const { isOpen, toggle, onOpen, onClose } = useToggle();

  return (
    <div>
      <h1>Custom Toggle hook</h1>
      <h3>{isOpen.toString()}</h3>
      <button onClick={toggle}>Toggle</button>
      <button onClick={onOpen}>Open</button>
      <button onClick={onClose}>Close</button>
      <br />
      <br />
      {isOpen && (
        <div
          style={{ height: "100px", width: "100px", backgroundColor: "red" }}
        >
          Navbar
        </div>
      )}
    </div>
  );
};

export default ToggleExample;
