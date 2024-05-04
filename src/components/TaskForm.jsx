import { useState, useContext } from "react";
import { TaskContext } from "../context/TaskContext";


function TaskForm() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const { createTask } = useContext(TaskContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        createTask({
            title,
            description,
        });
        setTitle("");
        setDescription("");
    }



    return (
        <div className="max-w-md mx-auto my-10">
            <form onSubmit={handleSubmit} className="bg-slate-800 p-10 bottom-4">
                <h1 className="text-2xl font-bold text-white mb-3 text-center">add tasks</h1>
                <input 
                    type="text" 
                    placeholder="Write the task"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    className="bg-slate-300 p-3 w-full mb-2"
                />
                <textarea 
                    cols="10" rows="2" 
                    placeholder="write the description of the task"
                    onChange= {(e) => setDescription(e.target.value)}
                    value={description}
                    className="bg-slate-300 p-3 w-full mb-2"
                ></textarea>
            
                <button 
                    className="bg-indigo-500 px-3 py-1 text-white rounded-md">
                    Save
                </button>
            </form>
        </div>
        
    )
}

export default TaskForm;