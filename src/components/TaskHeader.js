import { FaAngleDown } from "react-icons/fa"

const TaskHeader = ({title, onToggleTasks}) => {
    return (
        <header className='header'>
            <h2>{title}</h2>
            <FaAngleDown onClick={onToggleTasks}/>
        </header>
    )
}

export default TaskHeader
