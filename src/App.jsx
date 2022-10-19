import './App.scss';
import Employee from './components/Employee/Employee';
import EmployeeData from './data/employeeData';

function App() {
  console.log(EmployeeData);
  const empCards = EmployeeData.map((empData) => <Employee empData={empData} />);
  
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          Ticket Tracker
        </h1>  
      </header>
      <div className='App-empCards'>{empCards}</div>
    </div>
  );
}

export default App;
