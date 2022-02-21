import React from "react";
import { TaskListRenderer } from ".";
import { AuthContext } from "../../Context/AuthContext";

export const TaskListComponent = () => {
  const {
    listItem,
    setListItem,
    focusOnClick,
    setInput,
    setToggleSubmit,
    setInputEditButtonId,
  } = React.useContext(AuthContext);

  const handleDeleteButton = (id: number) => {
    setListItem(
      listItem.filter((prevItem: string, index: number) => {
        return index !== id;
      })
    );
    focusOnClick();
  };
  const handleEditButton = (id: number) => {
    let editItem: string | undefined = listItem.find(
      (prevItem: string, index: number) => {
        return index === id;
      }
    );
    setInput(editItem || "");
    setToggleSubmit(false);
    focusOnClick();
    setInputEditButtonId(id);
  };

  return (
    <>
      <TaskListRenderer
        listItem={listItem}
        handleDeleteButton={handleDeleteButton}
        handleEditButton={handleEditButton}
      />
    </>
  );
};
