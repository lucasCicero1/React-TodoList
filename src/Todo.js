import React from 'react'
import { useState } from 'react'
import './Todo.css'
import FormTodo from './components/FormTodo'
import List from './components/List'
import Item from './components/Item'


function Todo(){

    const [items, setItems] = useState([])

    function onAddItem(text){

        let item = new Item(text)

        setItems([...items, item])
    }

    function trueOrFalse(item){
        let tof = items.map(it => {
            if(item.id === it.id){
                it.done = !it.done
            }
            return it
        })
        setItems(tof)
    }  

    function deleteItem(item){
        let filteredItems = items.filter(it => {
            if(item.id === it.id){
                return(it.id !== item.id)
            }
            return it
        })
        setItems(filteredItems)
    }


    return(
        <div className="container">
            <h1>Todo</h1>
            <FormTodo onAddItem={onAddItem}></FormTodo>
            <List deleteItem={deleteItem} trueOrFalse={trueOrFalse} items={items}></List>
        </div>
    )
}

export default Todo