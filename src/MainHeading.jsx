import React from 'react'

export default function MainHeading(props) {
  return (
    <div className="py-3 text-3xl font-bold">
        {props.children}
    </div>
  )
}
