import Task from './Task';

const Tasks = ({ tasks, onDelete, onTogle }) => {
   return (
      <div>
         {tasks.map((task) => (
            <Task
               key={task.id}
               task={task}
               onDelete={onDelete}
               onTogle={onTogle}
            />
         ))}
      </div>
   );
};

export default Tasks;
