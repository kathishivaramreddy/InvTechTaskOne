import React from 'react';
import './TaskList.css'

export class TaskList extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            input:'',
            tasks:[],
            currentId:1
        };
        this.updateInput = this.updateInput.bind(this);
        this.handleAddTask = this.handleAddTask.bind(this);
        this.getClassName = this.getClassName.bind(this);
        this.eliminateTask = this.eliminateTask.bind(this);
    }

    updateInput = (e) => {
        const value = e.target.value
        this.setState({
            input:value
        })
    };

    handleAddTask = (e) => {
        e.preventDefault();
        this.setState( (presentState) => {
            return{
                tasks:presentState.tasks.concat([{task:this.state.input,id:this.state.currentId}]),
                input:'',
                currentId:this.state.currentId+1
            }
        });
        console.log(this.state.tasks)
    };

    getClassName = (taskNumber) => {
        const isThirdElement = (taskNumber) % 3 === 0;
        return isThirdElement ? "thirdtask" : "task";
    };

    eliminateTask = (id) => {

        this.setState( (presentState ) => {
            return {
                tasks : presentState.tasks.filter( task => task.id !== id)
            }
        })
    }

    render(){
        const taskList = this.state.tasks.map( (item,index) => {
            return <li className={this.getClassName(index+1)} key={index}
                       onClick={ () => this.eliminateTask(item.id)}
            >{item.task}</li>
        });

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