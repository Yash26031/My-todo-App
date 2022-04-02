import React from 'react'

export default function Button(props) {

    let themeClass = 'text-white bg-yellow-500 hover:bg-yellow-600  border-transparent';

    let shapeClass = 'rounded-md';

    if(props.theme === 'fullRound') {
        shapeClass = 'rounded-full'
    }

    if(props.theme === 'secondary'){
        themeClass = 'bg-white text-gray-800 border-gray-700 hover:bg-gray-100';
    };

  return (
    <button disabled={props.disabled} onClick={props.onClick} className={"inline-flex justify-center px-4 py-2 border focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 " + themeClass + ' ' + shapeClass}>{props.children}</button>
  )
}
