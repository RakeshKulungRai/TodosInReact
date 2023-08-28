import React from 'react'

function taskreducer(tasks,action) {
    switch(action.type)
    {
        case "add":
            {
            return[
                ...tasks,
                {id : action.id,
                    text:  action.text,
             }
            ]
            }
            
        case "delete":
            return tasks.filter((t)=>t.id!==action.id)
        case "update":
            let index= tasks.findIndex((t)=>t.id===action.task.id)
            tasks[index].text = action.task.text  
            return tasks          
        default:
            {
                throw Error('Unknown action: ' + action.type);
              }
    }



}

export default taskreducer