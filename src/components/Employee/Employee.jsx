// Employee.jsx
import "./Employee.scss";
import { useState } from "react";

const Employee = (props) => {
  const { empData } = props;
  console.log(empData);
 
  const [counter, setCounter] = useState(0);
  
  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    if (counter>0){
      setCounter(counter - 1);
    }
  };
  
  
  return (
    <>
      <div className="employee__card">
      <h1>{empData.name}</h1>
      <p>{empData.role}</p>
      <div className="employee__card--container">
      <button onClick={handleIncrement}>+</button>
      <p>{counter}</p>
    <button onClick={handleDecrement}>-</button>
    </div>
      </div>
      

      
    </>
  );
};

export default Employee;