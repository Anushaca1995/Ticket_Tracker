// Employee.jsx
import "./Employee.scss";

const Employee = (props) => {
    const {empData} = props;
    console.log(empData);
    const cardListJSX = empData.map((emp) => (
        <div className="employee__card">
      <h1>{emp.name}</h1>
      <p>{emp.role}</p></div>
    ));
    return (
      <>
        <div className="employee">{cardListJSX}</div>
      </>
    );
  };

export default Employee;