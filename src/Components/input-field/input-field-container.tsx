import React from "react";
import { AuthContext } from "../../Context/AuthContext";
import { InputFieldRenderer } from ".";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const InputFieldComponent = () => {
  const {
    input,
    setInput,
    listItem,
    setListItem,
    focusOnClick,
    inputRef,
    toggleSubmit,
    setToggleSubmit,
    inputEditButtonData,
    setInputEditButtonData,
  } = React.useContext(AuthContext);

  const inputChange = (e: any) => {
    setInput(e.target.value);
  };

  const handleAddButton = () => {
    if (!input) {
      toast.error("Please enter data", { autoClose: 2000 });
      focusOnClick();
    } else if (input && !toggleSubmit) {
      setListItem(
        listItem.map((prevData: string, index: number) => {
          if (index === inputEditButtonData) {
            return input;
          }
          return prevData;
        })
      );
      setToggleSubmit(true);
      setInput("");
      focusOnClick();
      setInputEditButtonData(null);
    } else {
      setListItem([...listItem, input]);
      focusOnClick();
      setInput("");
    }
  };

  const handleKeyDown = (e: any) => {
    if (e.keyCode === 13) handleAddButton();
  };

  return (
    <>
      <InputFieldRenderer
        input={input}
        inputChange={inputChange}
        handleAddButton={handleAddButton}
        handleKeyDown={handleKeyDown}
        inputRef={inputRef}
        toggleSubmit={toggleSubmit}
      />
    </>
  );
};
