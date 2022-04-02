import React from 'react'
import Button from './Button'
import H3 from './H3'
import Input from './Input'

export default function TodoForm(props) {


    const [inputValue , setInputValue] = React.useState('');

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    const saveTodo =() => {
        props.onCreate(inputValue);

        setInputValue('');

        props.onChange()
    }
  return (
    <div className="px-5 py-3 rounded-md shadow">
       <H3>Create a Todo</H3>
       <Input value={inputValue} onChange={onInputChange} placeholder="Add ypur todo here"></Input>
       <div className="my-5 space-x-5">
       <Button disabled={!inputValue} onClick={saveTodo} >Save</Button>
       <Button onClick={props.onChange} theme='secondary'>Cancel</Button>
       </div>
    </div>
  )
}
