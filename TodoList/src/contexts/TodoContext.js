import { createContext, useContext } from 'react'


export const TodoContext = createContext({

    // this "todos" contains all the task info seperated by objects wrapped in array!

    tasks: [{
        taskId: 1,
        task: 'complete todo app',
        isCompleted: false
    }
        // ,{},{}  // first we will take only info of one task, remaining are left empty   
    ],

    // next we need to add some functionality onto on single task like add, delete, update, completed!

    addTask: (task) => { },
    updateTask: (taskId, task) => { },
    removeTask: (taskId) => { },
    completeTask: (taskId) => { }
});

export const TodoProvider = TodoContext.Provider();

export function useTodo() {
    return useContext(TodoContext);
}