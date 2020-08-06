import React from 'react'
import './TaskCard.scss'

const Task = (props) => {

    const TaskID = props.id;

    return(
        <div className={props.status ? 'task task--completed' : 'task'}>
            <div className='task__status' onClick={() => props.changeStatus(TaskID)}>
                {props.status ? (
                    <svg className='circle tick' viewBox='0 0 512 512'>
                        <path d="m369.164062 174.769531c7.8125 7.8125 7.8125 20.476563 0 28.285157l-134.171874 134.175781c-7.8125 7.808593-20.472657 7.808593-28.285157 0l-63.871093-63.875c-7.8125-7.808594-7.8125-20.472657 0-28.28125 7.808593-7.8125 20.472656-7.8125 28.28125 0l49.730468 49.730469 120.03125-120.035157c7.8125-7.808593 20.476563-7.808593 28.285156 0zm142.835938 81.230469c0 141.503906-114.515625 256-256 256-141.503906 0-256-114.515625-256-256 0-141.503906 114.515625-256 256-256 141.503906 0 256 114.515625 256 256zm-40 0c0-119.394531-96.621094-216-216-216-119.394531 0-216 96.621094-216 216 0 119.394531 96.621094 216 216 216 119.394531 0 216-96.621094 216-216zm0 0" strokeWidth={90}></path>
                    </svg>
                ) : (
                    <svg className='circle notdone' viewBox='0 0 512 512'>
                    <   path d="M256,0C115.03,0,0,115.05,0,256c0,140.97,115.05,256,256,256c140.97,0,256-115.05,256-256C512,115.03,396.95,0,256,0z     M256,482C131.383,482,30,380.617,30,256S131.383,30,256,30s226,101.383,226,226S380.617,482,256,482z" strokeWidth='9'></path>
                    </svg>
                )}
            </div>
            <div className='task__details'>
                <h2 className={props.status ? 'task__details__title task__details__title--completed' : 'task__details__title'}> {props.title}</h2>
                <p className={props.status ? 'task__details__time task__details__time--completed' : 'task__details__time'}>{props.startTime + '-' + props.finishTime}</p> 
            </div>
            <div className='task__remove' onClick={() => props.removeTask(TaskID)}>&times;</div>
        </div>
    )
}

export default Task;