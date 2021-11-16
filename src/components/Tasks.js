import Task from './Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
    return (
        //example if you wanted to add a new task
        //setTasks([...tasks, {new task object}])
        <>
        {tasks.map((task) => (
            // Pass onDelete function to individual task
            <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle} />
        ))}
        </>
    );
}

export default Tasks