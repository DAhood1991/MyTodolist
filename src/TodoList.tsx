import React, {FC} from 'react';
import {FilterType, TaskType} from "./App";

type TodoListType = {
    title: string
    task: Array<TaskType>
    removeTask:(taskID:string)=>void
    changeFilter:(value:FilterType)=>void
}

export const TodoList: FC<TodoListType> = ({title,task,removeTask,changeFilter}) => {

    const todoListMap:Array<JSX.Element> = task.map((t) =>{
        const onClickRemoveTask = () => {
            removeTask(t.id)

        }
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/>
            <span>{t.title}</span>
            <button onClick={onClickRemoveTask}>+</button>
        </li>)
    })
    const taskList = task.length
        ? <ul>{todoListMap}</ul> : <ul>No task</ul>


    return (<div className={"TodoList"}>
        <h3> {title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        {taskList}
        <div>
            <button onClick={()=>changeFilter('All')}>All</button>
            <button onClick={()=>changeFilter('Active')}>Active</button>
            <button onClick={()=>changeFilter('Completed')}>Completed</button>
        </div>
    </div>)

};

export default TodoList;