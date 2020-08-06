import React, { Component } from 'react'
import './TaskController.scss'
import Task from './TaskCard/TaskCard'
import FormContainer from '../Form/FormContainer'

class TaskController extends Component{
    constructor(props){
        super(props);
        this.state = {
            tasks:
        [
            {
                id:'1',
                taskName: 'Task 1', 
                startTime: '8:00',
                finishTime:'9:00',
                completed:true
            },
            {
                id:'2',
                taskName: 'Task 2', 
                startTime: '11:00',
                finishTime:'12:30',
                completed:false
            },
            {
                id:'3',
                taskName: 'Task 3', 
                startTime: '13:30',
                finishTime:'14:00',
                completed:true
            }
        ],
        showModal: false,
        }
    }

    handleAddTaskBtn = () => {
        this.setState({showModal: true})
    }

    handleFormCloseBtn = () => {
        this.setState({showModal:false})
    }

    handleFormSubmit= (data) => {
        if(data.taskName.trim() === ""){
            alert('please fill the task field');
            return 
        }
        this.setState({
            tasks:[...this.state.tasks,data],
            showModal:false
        })
    }

    handleStatusChange = (item) => {
        this.setState({tasks: this.state.tasks.map(el => el.id === item ? {...el, completed: !el.completed} : el)});
    }

    handleRemoveTask= (item) => {
        const Task = this.state.tasks.filter(el => el.id !== item);
        this.setState({tasks: Task});
    }

    handleIsTaskComplete = () => {
        for(let i=0; i<this.state.tasks.length; i++){
            if(this.state.tasks[i].completed){
                return(<button className='TaskContainer__RmCompletedTaskBtn' onClick={this.handleRemoveCompletedTask}>Remove All completed Tasks</button>)
            }
        }
    }
    
    handleRemoveCompletedTask = () => {
     const Tasks = this.state.tasks.filter(el => !el.completed);
     this.setState({tasks:Tasks})
    }

    render(){
        return(
            <div className='TaskContainer'>

                {
                    this.handleIsTaskComplete()
                }

                {this.state.tasks.length === 0 ? <p>Press the button to add a task</p> : null}
                {
                    this.state.tasks.map(item => 
                        <Task  key={item.id} id={item.id} title={item.taskName} startTime={item.startTime} finishTime={item.finishTime} status={item.completed} changeStatus={this.handleStatusChange} removeTask={this.handleRemoveTask}/>
                    )
                }
                <button className='TaskContainer__AddTaskBtn' onClick={() => this.handleAddTaskBtn()}>+</button>

                <FormContainer showing={this.state.showModal} handleFormClose={() => this.handleFormCloseBtn()} handleSubmit={this.handleFormSubmit}  isTaskInState={this.state.tasks}/>
            </div>
        )
    }
}

export default TaskController