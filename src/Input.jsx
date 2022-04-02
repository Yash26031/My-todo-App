import React from 'react'

export default function Input(props) {
  return (
    <input placeholder={props.placeholder} onChange={props.onChange} className="block px-4 py-2 border border-gray-400 rounded-md shadow-sm w-96 focus:ring-yellow-500 focus:border-yellow-500 sm:text-sm"></input>
  )
}
