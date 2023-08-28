import React, { useState } from 'react'
export default function TaskList({tasks, onChange,onDelete}) {
return (
  <div  >
  {
    tasks?.map((task)=>(
      <div key={task.id} className='m-4'>
      <Task task={task} onChange={onChange} onDelete={onDelete}/>
      </div>
    ))
  }
  </div>
)
  
}
function Task({task,onChange,onDelete})
{
  const [editing,setEditiong] = useState(false) 
  const [text,setText] = useState(task.text)
  let content;
   if(editing)
   {
    
    content = <div>
    <input type='text'  onChange={(e)=>{setText(e.target.value)}} value={text}/>
    <button 
    onClick={()=>{onChange({id:task.id,text:text});
  setEditiong(false);
  }}>Save</button>
    </div>
   }
   else
   {
   content= <div>
    
   {task.text}
      <button onClick={()=>{setEditiong(true)}} className='m-2 p-2 rounded text-white bg-blue-500'>Edit</button>
    </div>
   
   }
   return (
  <div className='flex'>
      {content}
    <button onClick={()=>{onDelete(task.id)}} className='m-2 p-2 rounded text-white bg-red-500'>Delete</button>
    </div>
   ) 
  
}


