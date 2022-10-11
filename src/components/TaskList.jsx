import {useContext} from 'react'
import TaskCard from './TaskCard'
import { TaskContext } from "../context/TaskContext";

const TaskList = () => {

const {tasks} = useContext(TaskContext)

  if(tasks.length===0) return <h1 className='text-white text-8xl font-bold text-center' >no hay tareas</h1>

return (
    <div className=' grid grid-cols-2 md:grid-cols-4 gap-3 flex-wrap ' >
        {tasks.map((task) => ( 
          <TaskCard  key={task.id} task= {task}  /> 
     
        ))}
    </div>
  )
}

export default TaskList