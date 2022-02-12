import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  listItems: {
    marginTop: "30px",
  },

  li: {
    paddingLeft: "0px",
    listStyle: "none",
    textAlign: "left",
    fontSize: "20px",
    fontWeight: "bold",
    minHeight: "40px",
    display: "flex",
    alignItems: "center",
    color: "#8566aa",
    textTransform: "capitalize",
  },
  todoStyle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "left",
    alignItems: "center",
  },
  delete: {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 10px 0 20px",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "crimson" },
    "@media (max-width:768px)": {
      margin: "0 15px 0 15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
  edit: {
    width: "20px",
    height: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: "0 15px 0 0",
    color: "#8566aa",
    cursor: "pointer",
    "&:hover": { color: "green" },
    "@media (max-width:768px)": {
      margin: "0 15px 0 15px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
  },
});
