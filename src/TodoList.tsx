import React, {ChangeEvent, KeyboardEvent, FC, useState} from 'react';
import {FilterType, TaskType} from "./App";

type TodoListType = {
    title: string
    task: Array<TaskType>
    removeTask: (taskID: string) => void
    changeFilter: (value: FilterType) => void
    addTask: (title: string) => void
}

export const TodoList: FC<TodoListType> = ({title, task, removeTask, changeFilter, addTask}) => {
    const [newTaskTitle, setTaskTitle] = useState('')
    const todoListMap: Array<JSX.Element> = task.map((t) => {
        const onClickRemoveHandler = () => {
            removeTask(t.id)

        }
        return (
            <li key={t.id}><input type="checkbox" checked={t.isDone}/>
                <span>{t.title}</span>
                <button onClick={onClickRemoveHandler}>+</button>
            </li>)
    })
    const taskList = task.length
        ? <ul>{todoListMap}</ul> : <ul>No task</ul>

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTaskTitle(e.currentTarget.value)
    }
    const onKeyPressHundler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            addTask(newTaskTitle)
            setTaskTitle('')
        }
    }
    const addTasks = () => {
        addTask(newTaskTitle)
        setTaskTitle('')

    }
    const onAllClickHandler = () => {
        changeFilter('All')
    }
    const onActiveClickHandler = () => {
        changeFilter('Active')
    }
    const onCompletedlickHandler = () => {
        changeFilter('Completed')
    }

    return (<div className={"TodoList"}>

        <h3> {title}</h3>
        <div>
            <input value={newTaskTitle}
                   onChange={onChangeHandler}
                   onKeyDown={onKeyPressHundler}/>

            <button onClick={addTasks}>+</button>
        </div>
        {taskList}
        <div>
            <button onClick={onAllClickHandler}>All</button>
            <button onClick={onActiveClickHandler}>Active</button>
            <button onClick={onCompletedlickHandler}>Completed</button>
        </div>
    </div>)

};

export default TodoList;