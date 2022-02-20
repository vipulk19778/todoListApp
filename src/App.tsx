import React from "react";
import { InputField } from "./Components/input-field";
import { TaskList } from "./Components/task-list";
import { AuthProvider } from "./Context/AuthContext";
import { useStyles } from "./AppStyles";

function App() {
  const classes = useStyles();
  return (
    <AuthProvider>
      <div className={classes.main_div}>
        <div className={classes.center_div}>
          <InputField />
          <TaskList />
        </div>
      </div>
    </AuthProvider>
  );
}

export default App;
