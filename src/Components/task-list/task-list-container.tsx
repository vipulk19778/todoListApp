import React from "react";
import { TaskListRenderer } from ".";
import { AuthContext } from "../../Context/PassContext";

export const TaskListComponent = () => {
  const {
    listItem,
    setListItem,
    focusOnClick,
    setInput,
    setToggleSubmit,
    setInputEditButtonData,
  } = React.useContext(AuthContext);

  const handleDeleteButton = (id: any) => {
    setListItem(
      listItem.filter((prevItem: any, index: any) => {
        return index !== id;
      })
    );
    focusOnClick();
  };
  const handleEditButton = (id: any) => {
    let editItem = listItem.find((prevItem: any, index: any) => {
      return index === id;
    });
    setInput(editItem);
    setToggleSubmit(false);
    focusOnClick();
    setInputEditButtonData(id);
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
