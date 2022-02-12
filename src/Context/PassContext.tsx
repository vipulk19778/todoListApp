import React from "react";

export const AuthContext = React.createContext<any>("");

const getLocalStorageData = () => {
  const localStorageListItems = localStorage.getItem("localStorageListItems");
  if (localStorageListItems) {
    return JSON.parse(localStorageListItems);
  } else {
    return [];
  }
};

export const AuthProvider = ({ children }: any) => {
  const [input, setInput] = React.useState("");
  const [listItem, setListItem] = React.useState(getLocalStorageData());

  const [toggleSubmit, setToggleSubmit] = React.useState(true);

  const [inputEditButtonData, setInputEditButtonData] = React.useState(null);

  const inputRef = React.useRef<any>();

  const focusOnClick = () => {
    inputRef.current.focus();
  };

  const store = {
    setListItem,
    listItem,
    focusOnClick,
    inputRef,
    input,
    setInput,
    toggleSubmit,
    setToggleSubmit,
    inputEditButtonData,
    setInputEditButtonData,
  };

  React.useEffect(() => {
    localStorage.setItem("localStorageListItems", JSON.stringify(listItem));
  }, [listItem]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
