import { useStyles } from "./input-field-styles";
import EditIcon from "@mui/icons-material/Edit";
import { ToastContainer } from "react-toastify";

export interface IInputFieldRendererProps {
  input: string;
  inputChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  inputRef: any;
  toggleSubmit: boolean;
  handleAddButton: () => void;
}

export const InputFieldRenderer = (props: IInputFieldRendererProps) => {
  const classes = useStyles();
  return (
    <div className={classes.inputComponent}>
      <ToastContainer />
      <h1 className={classes.h1}>ToDo List</h1>

      <input
        type="text"
        placeholder="Add an item"
        value={props.input}
        className={classes.input}
        onChange={props.inputChange}
        onKeyDown={props.handleKeyDown}
        ref={props.inputRef}
        autoFocus
      />
      {props.toggleSubmit ? (
        <button onClick={props.handleAddButton} className={classes.button}>
          +
        </button>
      ) : (
        <button onClick={props.handleAddButton} className={classes.button}>
          <EditIcon />
        </button>
      )}
    </div>
  );
};
