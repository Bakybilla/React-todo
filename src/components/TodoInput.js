import React, {useEffect, useRef} from 'react';

const TodoInput = (props) => {

    const inputElem = useRef(null);

    useEffect(() => {
      inputElem.current.focus();
    },[]);

    return(
      <form onSubmit={props.formSubmit} style={{display: "flex", alignItems: "center", padding: "20px 0"}}>
        <div className="input-field col s6" style={{flexGrow: 1, margin: 0}}>
          <input id="last_name" type="text" className="validate" onChange={props.inputChange} value={props.todoText} ref={inputElem} style={{margin: 0}}/>
          <label htmlFor="last_name">Add todo</label>
        </div>
        <button type="submit" className="waves-effect waves-light btn" style={{marginLeft: "20px"}}>Add</button>
      </form>
    )
}

export default TodoInput;