import {createContext, useState, useEffect } from "react";
import { task as data } from "../data/task";

export const TaskContext = createContext();



export function TaskContextProvider(props) {
    const [task, setTask] = useState([]);

    function createTask(newTask) {
        setTask([...task, {
            title: newTask.title,
            id: task.length,
            description: newTask.description,
            // completed: false
        }]);
    }
    
    function deleteTask(taskId) {
        setTask(task.filter(task => task.id !== taskId));
        
    }

    useEffect(() => {
        setTask(data);
    }, []);

    return (
        <TaskContext.Provider value={{
            task,
            createTask,
            deleteTask
        }}>
            {props.children}
        </TaskContext.Provider>
        
    );
}

// export default TaskContext;