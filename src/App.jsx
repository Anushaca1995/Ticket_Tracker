import './App.scss';
import Employee from './components/Employee/Employee';
import EmployeeData from './data/employeeData';

function App() {
  console.log(EmployeeData);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ticket Tracker
        </h1>  
      </header>
      <Employee empData={EmployeeData}/>
    </div>
  );
}

export default App;
