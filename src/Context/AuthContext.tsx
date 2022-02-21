import React from "react";

export interface IAuthContext {
  input: string;
  setInput: (input: string) => void;
  listItem: string[];
  setListItem: (listItem: string[]) => void;
  focusOnClick: () => void;
  inputRef: any;
  toggleSubmit: boolean;
  setToggleSubmit: (toggleSubmit: boolean) => void;
  inputEditButtonId: number | null;
  setInputEditButtonId: (inputEditButtonId: number | null) => void;
}

export const AuthContext = React.createContext<IAuthContext>({
  input: "",
  setInput: () => {},
  listItem: [],
  setListItem: () => {},
  focusOnClick: () => {},
  inputRef: null,
  toggleSubmit: true,
  setToggleSubmit: () => {},
  inputEditButtonId: null,
  setInputEditButtonId: () => {},
});

const getLocalStorageData: () => [] = () => {
  const localStorageListItems = localStorage.getItem("localStorageListItems");
  if (localStorageListItems) {
    return JSON.parse(localStorageListItems);
  } else {
    return [];
  }
};

export const AuthProvider: React.FC = ({ children }) => {
  const [input, setInput] = React.useState<string>("");
  const [listItem, setListItem] = React.useState<string[]>(
    getLocalStorageData()
  );

  const [toggleSubmit, setToggleSubmit] = React.useState<boolean>(true);

  const [inputEditButtonId, setInputEditButtonId] = React.useState<
    null | number
  >(null);

  const inputRef = React.useRef<HTMLInputElement>();

  const focusOnClick = () => {
    inputRef.current?.focus();
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
    inputEditButtonId,
    setInputEditButtonId,
  };

  React.useEffect(() => {
    localStorage.setItem("localStorageListItems", JSON.stringify(listItem));
  }, [listItem]);

  return <AuthContext.Provider value={store}>{children}</AuthContext.Provider>;
};
