import React, {useState} from 'react';
import './App.css';
import TodoList from "./TodoList";
import {v1} from "uuid";


export type TaskType = {
    id: string
    title: string
    isDone: boolean
}
export type FilterType = 'All' | 'Active' | 'Completed'

function App() {
    const [task, setTask] = useState<Array<TaskType>>([
        {id: v1(), title: 'JS', isDone: true},
        {id: v1(), title: 'css', isDone: true},
        {id: v1(), title: 'JSx', isDone: false},
    ])
    const [filter, setFilter] = useState<FilterType>('All')
    const removeTask = (taskID: string) => {
        let remove = task.filter(t => t.id !== taskID)
        setTask(remove)
    }
    let TaskForTodolist = task
    if (filter === 'Active') {
        TaskForTodolist=  task.filter(t => t.isDone === false)
    }
    if (filter === 'Completed') {
        TaskForTodolist=task.filter(t => t.isDone === true)
    }
    const addTask = (title:string) => {
      let newTask ={id: v1(), title: title, isDone: false}
        let newTasks =[newTask,...task]
        setTask(newTasks)
    }
    const changeFilter = (value:FilterType) => {
      setFilter(value)
    }


    return (<div className={'App'}>
            <TodoList title={'what to learn'} task={TaskForTodolist} removeTask={removeTask} changeFilter={changeFilter}
            addTask={addTask}/>
        </div>
    );
}

export default App;
