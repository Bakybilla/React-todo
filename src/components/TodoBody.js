import React, {useState} from 'react';
import { MdDelete, MdEdit } from "react-icons/md";
import EditTodoModal from './EditTodoModal/EditTodoModal';

const TodoBody = (props) => {

    let [modalText, setModalText] = useState("");
    let [modalIndex, setModalIndex] = useState(0);

    let doneTodos = props.todoList.filter((item) => {
        return item.done === true
    })
    
    let modalData = (index, todoText) => {
        setModalText(todoText)
        setModalIndex(index)
    }

    return(
        <div>
            {props.todoList.length > 0 ?
                <ul className="collection with-header">
                {props.todoList.map((item, index) => {
                    return <li className="collection-item" key={index}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div>
                                <label>
                                    <input type="checkbox" className="filled-in" onChange={(event) => {props.doneCheckHandler(index, event)}} value={item.done}/>
                                    <span style={{color: "black", fontWeight: "600", textDecoration: item.done ? "line-through" : "none"}}>{item.todoText}</span>
                                </label>
                            </div>
                            <div style={{display: "flex"}}>
                                <a href="#modal2" className="waves-effect waves-light btn-small modal-trigger" style={{display: "flex", alignItems: "center", marginRight: "10px"}} onClick={() => {modalData(index, item.todoText)}}>
                                    <MdEdit style={{fontSize: "18px", verticalAlign: "middle", marginRight: "5px"}}/>
                                    Edit
                                </a>
                                <a href="#" className="waves-effect waves-light btn-small" style={{display: "flex", alignItems: "center"}} onClick={() => {props.todoDeleteHandler(index)}}>
                                    <MdDelete style={{fontSize: "18px", verticalAlign: "middle",  marginRight: "5px"}}/>
                                    Delete
                                </a>
                            </div>
                        </div>
                    </li>
                })}
                </ul> : null
            }
            <EditTodoModal todoEditHandler={props.todoEditHandler} modalText={modalText} modalIndex={modalIndex}/> 
            {props.todoList.length > 0 ? <span className="badge blue white-text" style={{float: "left", margin: "0"}}>Done: {doneTodos.length} from {props.todoList.length}</span> : null}
        </div>
    )
}

export default TodoBody;