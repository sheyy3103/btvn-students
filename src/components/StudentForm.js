import { useState } from "react";
import clsx from "clsx";
import style from "./Student.module.css"


export default function StudentForm({addStudent}) {

  const [studentInfo, setStudentInfo] = useState({
    name: "",
    class: "",
  });

  const handleChange = (e) => {
    setStudentInfo({ ...studentInfo, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addStudent(studentInfo);
    setStudentInfo({ name: "", class: ""});
  };


  return (
    <div>
      <form onSubmit={handleSubmit}> 
        <div>
          <h1>Students List</h1>
        </div>
        <table className={clsx([style.table1])}>
          <thead>
              <tr>
                <td>         
                  <input type="text" name="name" placeholder="Enter name..." value={studentInfo.name} onChange={handleChange} />
                 </td>
                 <td>
                    <input type="text" name="class" placeholder="Enter class..." value={studentInfo.class} onChange={handleChange} /> 
                 </td>
                 <td><button type="submit">Add Student</button></td>
              </tr>
        </thead>
        </table>
      </form>
    </div>
  );
}