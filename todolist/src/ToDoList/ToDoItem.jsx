import React, {useContext} from "react";
import {Context} from "../App";


export const ToDoItem = (props) => {
    let {remove, select} = useContext(Context)


    let classes = []


    if(props.item.completed){
        classes.push('complete')
    }



    return(
        <div className={'item'}>
            <input
                type="checkbox"
                onChange={select.bind(null, props.item.id)}
            />

            <span className={classes.join(' ')}>{props.item.id}.{props.item.do}</span>
            <button onClick={remove.bind(null, props.item.id)}>
                &times;
            </button>
        </div>
    )
}