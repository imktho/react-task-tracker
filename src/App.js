import Header from './components/Header'
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';
import { useState } from 'react'

function App() {
  const [tasks, setTasks] = useState([
    {
        id: 1,
        text: 'Doctors Appointment',
        day: 'Feb 5th at 2:30pm',
        reminder: true
    },
    {
        id: 2,
        text: 'Meeting at School',
        day: 'Feb 6th at 12:30pm',
        reminder: true
    },
    {
        id: 3,
        text: 'Food Shopping',
        day: 'Feb 5th at 2:30pm',
        reminder: false
    }
]);

const deleteTask = (id) => {
  setTasks(tasks.filter((task) => {
    return task.id !== id
  }))
}

const toggleReminder = (id) => {
  setTasks(tasks.map((task) => {
    return (task.id === id ? {...task, reminder: !task.reminder} : task);
  })
  )
}

  return (
    <div className="container">
      <Header />
      <AddTask/>
      { 
        tasks.length <= 0 ? 
          'No Tasks' 
          : <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/>
      }
    </div>
  );
}

export default App;
