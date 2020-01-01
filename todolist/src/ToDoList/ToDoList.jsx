import React, {useContext} from "react";
import {ToDoItem} from "./ToDoItem";
import {Context} from "../App";



export const ToDoList = ({todos, select, remove}) =>{
    let {searchValue} = React.useContext(Context)

    return(
        <div className={'list'}>
            {todos.map((item,i)=> {
               if(item.do.indexOf(searchValue) === -1){
                   return null
               }

                return(
                    <ToDoItem
                        key={i}
                        item={item}
                    />
                    )
            }) }
        </div>

    )
}
    