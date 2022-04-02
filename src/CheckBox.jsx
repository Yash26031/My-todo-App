import React from 'react'

export default function CheckBox(props) {
  return (
    <input type="checkbox" checked={props.checked} onChange={props.onChange} 
    className="w-4 h-4 text-yellow-600 border-gray-300 rounded focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500" />
  )
}
