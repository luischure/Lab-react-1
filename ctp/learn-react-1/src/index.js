import React, {useState} from "react";
import ReactDom from "react-dom/client";
import "./index.css";

const studentList = [
  {
    firstName: "Misty",
    lastName: "Knight",
    sId: "234",
    school: "Queens College",
    major: "Law",
  },
  {
    firstName: "Jessica",
    lastName: "Jones",
    sId: "434",
    school: "Brooklyn College",
    major: "CS",
  },
  {
    firstName: "Colleen",
    lastName: "Wing",
    sId: "233",
    school: "Queens College",
    major: "CS",
  },
  {
    firstName: "Dare",
    lastName: "Devil",
    sId: "876",
    school: "CCNY",
    major: "Law",
  },
  {
    firstName: "Luke",
    lastName: "Cage",
    sId: "323",
    school: "CCNY",
    major: "Math",
  },
];

function StudentInfo(props) {
  return(
    <div>
      <div>
        {props.lastName} , {props.firstName}
      </div>
      <ul>
        <li>
          <strong>ID:</strong> {props.sId}
        </li>
        <li>
          <strong>School:</strong> {props.school}
        </li>
        <li>
          <strong>Major:</strong> {props.major}
        </li>
      </ul>
    </div>
  );
}

function CountApp() {
  const [numClicks, setNumClicks] = useState(0);

  const handClick = (event) => {
    setNumClicks(numClicks + 1);
  };
  return(
    <div>
      <p>The button has been clicked {numClicks} times</p>
      <button onClick={handClick}>click this button</button>
    </div>
  );
}

function ClassList() {
  return(
    <div>
      <h1 className="red-text"> Welcome to CTP</h1>
      <p>List of students</p>
      {studentList.map((student) => (
        <StudentInfo {...student} key = {student.sId} />
      ))}
    </div>
  );
}

const htmlContainer = document.getElementById("root");
const root = ReactDom.createRoot(htmlContainer);
root.render(<CountApp />);