import React, { Component } from 'react';

class TodoForm extends Component{
    constructor(){
        super();
        this.state = {
            tittle: '',
            responsible: '',
            description:'',
            priority:''
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

    }


    handleSubmit(e){
        e.preventDefault();
        this.props.onAddTodo(this.state);
        this.setState({
            tittle:'',
            responsible:'',
            description:'',
            priority:'low'
        })
    }



    handleInput(e){
        const {value, name} = e.target;
        console.log(value, name);
        this.setState({
            [name]: value
        });
    }



    render(){
        return(
            <div className='card'>
                <form onSubmit={this.handleSubmit} className='card-body'>
                    <div className='form-group'>
                        <input
                        type="text"
                        name="tittle"
                        value={this.state.tittle}
                        className='form-control'
                        onChange={this.handleInput}
                        placeholder='Tittle'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        name="responsible"
                        value={this.state.responsible}
                        className='form-control'
                        onChange={this.handleInput}
                        placeholder='Responsible'
                        />
                    </div>
                    <div className='form-group'>
                        <input
                        type="text"
                        name="description"
                        value={this.state.description}
                        className='form-control'
                        onChange={this.handleInput}
                        placeholder='Description'
                        />
                    </div>
                    <div className='form-group'>
                        <select
                        name='priority'
                        className='form-control'
                        value={this.state.priority}
                        onChange={this.handleInput}
                        >
                        <option>low</option>
                        <option>medium</option>
                        <option>high</option>
                        </select>
                        <button type="submit"className='btn btn-primary'>
                            save
                        </button>
                    </div>
                </form>
            </div>
        )
    }
}

export default TodoForm;