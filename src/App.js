import { useState } from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {
  const [students, updateStudents] = useState([]);

  const addStudent = (student) => {
    updateStudents([...students, student]);
  };

  return (
    <div className="App">
      <StudentForm addStudent={addStudent} />
      <StudentList students={students} />
    </div>
  );
}

export default App;
