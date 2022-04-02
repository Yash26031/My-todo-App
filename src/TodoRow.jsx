import React from 'react'
import CheckBox from './CheckBox'
import { MdOutlineDeleteForever } from 'react-icons/md';

export default function TodoRow(props) {

    const onCheckboxChange = () => {
        props.onStatusChange(props.todo)
    }

    const onDelete = () => {
      props.onDelete(props.todo , props.done)
    }
  
  return (
    <div className="flex items-center space-x-2">
        <CheckBox checked={props.done} onChange={onCheckboxChange} />
        <span className="text-sm font-medium text-gray-700 ">{props.todo.title}</span><MdOutlineDeleteForever onClick={onDelete} />
    </div>
  )
}
