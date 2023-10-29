import React from 'react';
import './App.css';
import TodoList from "./TodoList";

export type TaskType = {
    id: number
    title: string
    isDone: boolean
}

function App() {
    const task: Array<TaskType> = [
        {id: 1, title: 'JS', isDone: true},
        {id: 2, title: 'css', isDone: true},
        {id: 3, title: 'JSx', isDone: false}
    ]
    return (<div className={'App'}>
            <TodoList title={'what to learn'} task={task}/>
        </div>
    );
}

export default App;
