import './App.css';
import Task from './components/Task';

function App() {
  return (
    <div className="container">
      <h1>Tasky</h1>
      <Task title="Dishes" deadline="Today" >
        <div className="description">
        Empty Dishwasher
        </div>
      </Task>
      <Task title="Laundry" deadline="Tomorrow">
      <div className="description">
        Fold laundry and put away
        </div>
    </Task>

      <Task title="Tidy" deadline="Today" >
      <div className="description">
        Tidy kitchen clutter
        </div>
      </Task>
    </div>
  );
  
}

export default App;
