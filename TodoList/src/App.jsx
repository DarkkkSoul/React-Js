import { useEffect, useState } from 'react'
import './App.css'
import { TodoProvider } from './contexts/TodoContext'

function App() {
    const [tasks, setTasks] = useState([]);

    addTask = (task) => {
        setTasks((prevTask) => [{ id: Date.now(), ...task }, ...prevTask]);
    };

    updateTask = (taskId, task) => {
        setTasks((prevTask) => prevTask.map(
            (singleTask) => (
                singleTask.taskId === taskId ? task : singleTask
            )
        ));
    };

    removeTask = (taskId) => {
        setTasks((prevTask) => prevTask.filter(
            (singleTask) =>
                singleTask.taskId !== taskId
        ));
    };

    completeTask = (taskId) => {
        setTasks((prevTask) => prevTask.map(
            prevTask.taskId === taskId ?
                { ...prevTask, isCompleted: !prevTask.isCompleted }
                : prevTask
        ));
    };

    //Add tasks to local storage
    useEffect(() => {
        const tasks = JSON.parse(localStorage.getItem("tasks"));

        if (tasks && tasks.length > 0) {
            setTasks(tasks);
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);



    return (
        <TodoProvider value={{
            tasks, addTask, updateTask, removeTask, completeTask
        }}>
            <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */}
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                    </div>
                </div>
            </div>
        </TodoProvider>
    )
}

export default App
