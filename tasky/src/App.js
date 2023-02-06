import './App.css';
import Task from './components/Task';
import React, { useState } from 'react';


function App() {

  const [ taskState, setTaskState ] = useState({
    tasks: [
      { id: 1, title:"Dishes", description: "Empty dishwasher", deadline: "Today" },
      { id: 2, title: "Laundry", description: "Fold clothes and put away", deadline: "Tomorrow" },
      { id: 3, title: "Tidy up", description: "Tidy kitchen clutter", deadline: "Today" },
      { id: 4, title: "Buy Groceries", description: "Buy groceries for dinner", deadline: "Today" },
      { id: 5, title: "Vacuum", description: "Vacuum living room carpet", deadline: "To" }
    ]
  });


  return (
    <div className="container">
      <h1>Tasky</h1>
      {taskState.tasks.map((task) => (              
    <Task 
      title={task.title}
      description={task.description}
      deadline={task.deadline}
      key={task.id}
    />
  ))}


    </div>
  );

  
}

export default App;
