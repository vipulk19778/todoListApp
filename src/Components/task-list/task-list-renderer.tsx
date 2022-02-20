import { useStyles } from "./task-list-styles";
// import CancelIcon from "@mui/icons-material/Cancel";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

export interface ITaskListRendererProps {
  listItem: string[];
  handleDeleteButton: (id: number) => void;
  handleEditButton: (id: number) => void;
}

export const TaskListRenderer = (props: ITaskListRendererProps) => {
  const { listItem } = props;
  const classes = useStyles();
  return (
    <div className={classes.listItems}>
      {listItem.map((item: string, index: number) => (
        <div className={classes.todoStyle} key={index}>
          <DeleteIcon
            className={classes.delete}
            aria-hidden="true"
            onClick={() => {
              props.handleDeleteButton(index);
            }}
          ></DeleteIcon>
          <EditIcon
            className={classes.edit}
            aria-hidden="true"
            onClick={() => {
              props.handleEditButton(index);
            }}
          ></EditIcon>
          <li className={classes.li}>{item}</li>
        </div>
      ))}
    </div>
  );
};
