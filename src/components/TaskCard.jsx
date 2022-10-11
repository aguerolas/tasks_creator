import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";


const TaskCard = ({task}) => {

  const {deleteItem} = useContext(TaskContext)

  if(!task.title && !task.description) return null
  return (
      <div className="  bg-gray-800 text-white p-5 rounded-md " >
        <h1 className="text-md text-center font-bold capitalize" >{task.title}</h1>
        <p className="text-gray-400 text-sm" >{task.description}</p>
        <button className="bg-blue-500 px-2 py-1 rounded-md mt-4 hover:text-lg hover:bg-red-400 hover:font-bold" onClick={()=> deleteItem (task.id) } >Delite item </button>
      </div>
  )
}

export default TaskCard