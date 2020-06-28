import React, {Component} from 'react';
import M from 'materialize-css/dist/js/materialize.js';

class EditTodoModal extends Component{

    state = {modalInputText: null}

    componentDidMount(){
        document.addEventListener('DOMContentLoaded', function() {
            var elems = document.querySelectorAll('.modal');
            var instances = M.Modal.init(elems, {});
        });
    }

    modalInputChange = (event) => {
        this.setState({
            modalInputText: event.target.value
        })
    }



    render(){
        return(
            <form id="modal2" className="modal" style={{padding: 20, textAlign:"right"}} onSubmit={() => this.props.todoEditHandler(this.props.modalIndex, this.state.modalInputText)}>
                <input defaultValue={this.props.modalText} id="modalText" type="text" onKeyUp={this.modalInputChange}/>
                <button type="submit" className="btn waves-effect waves-ligh" style={{marginTop: 10}}>Update</button>
            </form>
        )
    }
}

export default EditTodoModal;