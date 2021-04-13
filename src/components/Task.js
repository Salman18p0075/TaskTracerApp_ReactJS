import React from 'react'
import { FaTimes } from 'react-icons/fa'
import Buttons from './Buttons'


function Task  ({task,onDelete,onToggle})  {
    return (
        <div className={`task ${task.reminder ? 'reminder' : ''}` } onDoubleClick={() => onToggle(task.id)}>
            <h3>{task.text}  <Buttons text='Delete' color='red' onClick={ ( )=> onDelete(task.id)}/>  </h3>
            <p>{task.day}</p>
        </div>
    )
}

export default Task
