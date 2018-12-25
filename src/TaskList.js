import React from 'react';

export class TaskList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:'',
            tasks:[]
        };
        this.updateInput = this.updateInput.bind(this);

    }

    updateInput = (e) => {
        const value = e.target.value
        this.setState({
            input:value
        })
    };

    handleAddTask = (e) => {
        e.preventDefault()
        this.setState( (presentState) => {
            return{
                tasks:presentState.tasks.concat([{task:this.state.input}]),
                input:''
            }
        })
    }

    render(){
        const taskList = this.state.tasks.map( item => {
            return <li>{item.task}</li>
        })
        return(
            <div className="container">

                <div className="main-content">
                    <form onSubmit={(e) => this.handleAddTask(e)}>
                        <input value={this.state.input} onChange={this.updateInput}/>
                        <button type='submit' >ADD</button>
                    </form>

                    <ul>{taskList}</ul>

                </div>

            </div>
        )
    }
}