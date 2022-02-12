import { makeStyles } from "@material-ui/core";

export const useStyles = makeStyles({
  inputComponent: {},
  h1: {
    color: "white",
    background: "transparent",
    backgroundColor: "#8566aa",
    padding: "10px 0 10px 0",
    marginTop: "0",
    marginBottom: "10px",
    boxShadow: "5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
  },

  input: {
    textAlign: "center",
    height: "30px",
    top: "10px",
    border: "none",
    background: "transparent",
    fontSize: "20px",
    fontWeight: "bold",
    width: "60%",
    borderBottom: " 2px solid #8566aa",
    outline: "none",
  },

  button: {
    minHeight: "40px",
    width: "40px",
    borderRadius: " 50%",
    borderColor: "transparent",
    backgroundColor: " #8566aa",
    color: " #fff",
    fontSize: "40px",
    border: "none",
    outline: "none",
    cursor: "pointer",
    marginLeft: "10px",
    boxShadow: " 5px 5px 15px -5px rgba(0, 0, 0, 0.3)",
    "&:hover": { background: "#20bf6b" },
    "@media (max-width:768px)": {
      marginLeft: "5px",
      minHeight: "40px",
      width: "40px",
      color: " #fff",
      fontSize: "30px",
    },
  },
});
