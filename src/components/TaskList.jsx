import  TaskCard  from "./TaskCard";
import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskList() {
    const { task } = useContext(TaskContext);

    if (task.length === 0) {
        return (
            <div>
                <h1 className="text-white text-4xl font-bold text-center">No hay tareas</h1>
            </div>
        )
    }

    return (
        <div className="grid grid-cols-5 gap-4">
            {task.map((task) => (
                <TaskCard key={task.id} task={task} />
            ))}
        </div>
    );
}

export default TaskList;