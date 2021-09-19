import React from 'react'
import Card from './Card'

function List(props) {

    function ChangeImg(props) {
        if (props.done) {
            return (<img className="img" src="./assets/checked.png" alt="done"></img>)
        } else {
            return (<img className="img" src="./assets/off.jpg" alt="undone"></img>)
        }
    }

    return (
        <div>
            <ul>
                {props.items.map(item =>
                    <li key={item.id}>
                        <Card className={item.done ? "done item" : "item"}>
                            {item.text}
                            <div>
                                <button onClick={() => { props.trueOrFalse(item) }}><ChangeImg done={item.done}></ChangeImg></button>
                                <button onClick={() => { props.deleteItem(item) }}><img className="img" src="../assets/bin3.png" alt="bin"></img></button>
                            </div>
                        </Card>
                    </li>)}
            </ul>
        </div>
    )
}

export default List