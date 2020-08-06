import React, {Component} from 'react'
import Input from './Input/FormInput'
import FormButton from './Button/FormButton'
import './FormContainer.scss'

class FormContainer extends Component{
    constructor(props){
        super(props);
        
        this.state= {
            newTask:{
                id:0,
                taskName:'',
                startTime:"00:00",
                finishTime:"00:00",
                completed:false
            },
        }

        this.handleInputChange = this.handleInputChange.bind(this)
    }

    handleInputChange = (e) => {
        this.setState({
            newTask: {
                ...this.state.newTask,
                id:this.state.newTask.taskName.replace(/\s/g, '')+this.state.newTask.startTime,
                [e.target.name]:e.target.value
            }
        })
    }

    handleFormSubmit = (event) =>{
        const NewTask= this.state.newTask;

        for(let i =0; i < this.props.isTaskInState.length; i++){
            if(this.props.isTaskInState[i].id === NewTask.id){
                event.preventDefault()
                return alert('You have already scheduled to do this task at this time')
            }
        }

        this.props.handleSubmit(NewTask)
        this.setState({newTask:{
            id:0,
            taskName:'',
            startTime:"00:00",
            finishTime:"00:00",
            completed:false
        }
    })
        event.preventDefault();
    }

    render(){
        return(

            <div className={this.props.showing ? 'Modal Modal--Open':'Modal Modal--Closed'}>
                <form className='Modal__Form' onSubmit={this.handleFormSubmit}>
                    <div className='Modal__Form__CloseBtn' onClick={this.props.handleFormClose}>&times;</div>
                    <h1 className='Modal__Form__Title'>Add a task</h1>
                    <Input name='taskName' label='Task'inputType='text' placeholder='Enter a task' value={this.state.newTask.taskName} handleChange={this.handleInputChange}/> 
                    <Input name='startTime' label='Start' inputType='time' value={this.state.newTask.startTime} handleChange={this.handleInputChange}/>
                    <Input name='finishTime' label='Finish' inputType='time' value={this.state.newTask.finishTime} handleChange={this.handleInputChange}/>
                    <FormButton/>
                </form>
            </div>
        )
    }
}

export default FormContainer