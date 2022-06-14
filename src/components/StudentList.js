import clsx from "clsx";
import style from "./Student.module.css";

export default function StudentList({ students }) {
    return (

        <table cellspacing="0" cellpadding="10" className={clsx([style.table2])}>
          <thead>
            <tr>
              <th>Name</th>
              <th>Class</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
                <tr key={index}>
                  <td>{ student.name }</td>
                  <td>{ student.class }</td>
                </tr>
            ))}
          </tbody>
        </table >

    );
}