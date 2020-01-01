import React,{useContext} from "react";
import {Context} from "../App";
import {Modal} from "./Modal";



export const Search = ({add}) => {
    let [value, setValue]  = React.useState('')

    let {search, searchValue} = useContext(Context)


    return(
        <React.Fragment>
        <div className={'navBar'} >
            <input
                type="text"
                value = {searchValue}
                onChange={search}
            />
            <Modal add={add}/>
        </div>

        </React.Fragment>
    )
}