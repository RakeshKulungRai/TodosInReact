import React, { useState } from 'react'

function Add({onAdd}) {
    const [text,setText] = useState('')
    function hadleAdd()
    {
      if (text.length > 2)
      {
        onAdd(text);
        setText('');
      
      }
      else
      {
        console.log("error")
      }
    }
  return (
    <div>
        <input type="text" placeholder='write task here' onChange={(e)=>{setText(e.target.value)}} className='p-2 rounded border-solid focus:outline-2' value={text} />
        <button onClick={hadleAdd} className='m-2 p-2 rounded text-white bg-green-500'>Add</button>
    </div>
  )
}

export default Add