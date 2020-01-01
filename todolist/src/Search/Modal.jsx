import React from "react";
import {Context} from "../App";




 export class Modal extends React.Component{


    constructor(props){
        super(props);
        this.state = {
            open: false,
            value: ''
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleOpen = this.handleOpen.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.addPost = this.addPost.bind(this)
    }

    handleChange(e){
        this.setState({value: e.target.value})
    }

    handleOpen(){
        this.setState({open: true})
    }

    handleClose(){
        this.setState({open: false})
    }

    addPost(e){
        e.preventDefault()
         this.props.add(this.state.value)
         this.setState({value: ''})
         alert('Задача добавленна')
    }

    render(){

        return(
            <React.Fragment>
                <button onClick={this.handleOpen}>Добавить</button>
                {this.state.open && (
                    <div className={'modal_wrap'}>
                        <div className="modal">
                            <span onClick={this.handleClose}>&#10006;</span>
                            <h2>Какой таск добавить?</h2>
                            <form className="add" onSubmit={this.addPost}>
                                <input
                                    type="text"
                                    value={this.state.value}
                                    onChange={this.handleChange}

                                />
                                <button>Добавить задачу</button>
                            </form>
                        </div>
                    </div>
                )

                }
            </React.Fragment>
        )
    }
}












