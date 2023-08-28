import { useReducer } from "react";
import Add from "./todos/Add";
import TaskList from "./todos/TaskList";
import taskreducer from "./todos/taskreducer";
function App() {
  const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum'},
    {id: 1, text: 'Watch a puppet show'},
    {id: 2, text: 'Lennon Wall pic'},
  ];
  const [tasks,dispatch] = useReducer(taskreducer,initialTasks)
  
  function handleChange(task)
  {
    dispatch({type:"update",task})
  }
  function handleDelete(id)
  {
    dispatch({type:'delete',id:id})
  }
  function handleAdd(text)
  {
    dispatch({type:'add',id:tasks.length,text:text})
  }
  return <div className='ml-64 mt-64'>
          <Add onAdd={handleAdd} />
           <TaskList tasks={tasks} onChange={handleChange} onDelete={handleDelete}/> 
      </div>
}

export default App
