import { FaAngleDown } from "react-icons/fa"

const TaskHeader = ({title, onToggleTasks}) => {
    return (
        <header className='header' onClick={onToggleTasks}>
            <h2>{title}</h2>
            <FaAngleDown />
        </header>
    )
}

export default TaskHeader
