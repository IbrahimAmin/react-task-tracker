import Header from './componenets/Header';
import Footer from './componenets/Footer';
import Tasks from './componenets/Tasks';
import { useState } from 'react';
import intitalTasks from './componenets/Data';
import AddTask from './componenets/AddTask';
import { FaLeaf } from 'react-icons/fa';

const App = () => {
   const [showAddTask, setShowAddTask] = useState(false);
   const [tasks, setTasks] = useState(intitalTasks);

   // Add Task
   const addTask = (task) => {
      const id = Math.floor(Math.random() * 1000 + 1);

      const newTask = { id, ...task };
      setTasks([...tasks, newTask]);
      console.log('Add Task', newTask);
   };

   // Delete Task
   const deleteTask = (id) => {
      setTasks(tasks.filter((task) => task.id !== id));
   };

   // Toggle Reminder
   const toggleReminder = (id) => {
      setTasks(
         tasks.map((task) =>
            task.id === id ? { ...task, reminder: !task.reminder } : task
         )
      );

      console.log('Reminder', id, tasks);
   };
   return (
      <div className='container'>
         <Header
            title='Task Tracker'
            onAdd={() => setShowAddTask(!showAddTask)}
            showAdd={showAddTask}
         />
         {showAddTask && <AddTask onAdd={addTask} />}

         {tasks.length >> 0 ? (
            <Tasks
               tasks={tasks}
               onDelete={deleteTask}
               onTogle={toggleReminder}
            />
         ) : (
            'No Tasks to show'
         )}
         <Footer />
      </div>
   );
};

export default App;
