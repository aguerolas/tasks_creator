import {useState, useContext} from 'react';
import { TaskContext } from "../context/TaskContext";
const TaskForm = () => {
  const [title, setTitle] = useState('')  
  const [description, setDescription] = useState("");
  const {createTask } = useContext(TaskContext)

  const handdleChange = (e) =>  setTitle(e.target.value) 
  const handleSubmit = (e) => { 
    e.preventDefault() 
    createTask({ title, description})
    setTitle('')
    setDescription('')
  }

 
  return (
    <div className='max-w-md mx-auto'>
      <form onSubmit={handleSubmit} className={' bg-slate-800 p-10 mb-4 '} >
        <h1 className='text-xl font-bold mb-3 text-white'  >create your own task <i class=" text-yellow-200 fa-regular fa-face-laugh-wink"></i></h1>
        <input className='bg-slate-300 p-3 w-full mb-2' placeholder='write the new task'  autoFocus onChange={handdleChange} value={title}  />
        <textarea placeholder='write the description'  onChange={(e) =>  setDescription(e.target.value)} value={description} className='bg-slate-300 p-3 w-full mb-2' ></textarea>
        <button className='block mt-6  bg-blue-500 rounded-md px-3 py-1 text-yellow-50 hover:text-lg hover:bg-slate-500 hover:font-bold' >Save</button>
      </form>
    </div>
    
  )
}

export default TaskForm