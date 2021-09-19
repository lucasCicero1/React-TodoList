import React from 'react'
import { useState } from 'react'

function FormTodo(props){

    const [text, setText] = useState("")

    function handleChange(event){
        let t = event.target.value
        setText(t)
    }

    function addItem(event){
        event.preventDefault()
        if(text){
            props.onAddItem(text)
            setText("")
        }
        
    }

    return(
        <form>
            <input type="text" onChange={handleChange} value={text}></input>
            <button onClick={addItem}>Add</button>
        </form>
    )
}

export default FormTodo