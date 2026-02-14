import './App.css';
import React, { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

const App = () => {
  const [students, setStudents] = useState([]);

  const addStudent = (student) => {
    setStudents([...students, student]);
  };

  return (
    <div className="App">
      <h1>Studen ID: 101468860</h1>
      <h1>Studen ID: Masrafi Apurba</h1>
      <h1>Student Information System</h1>
      <h5>Powered By: Alpha Man Labs Inc. || DevOps</h5>
      <StudentForm addStudent={addStudent} />
      Developerd By: Mashrafi Apurba || Student ID: 101468860
      <StudentList students={students} />
    </div>
  );
};

export default App;
