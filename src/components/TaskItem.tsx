import React, { useState } from "react";
import type { Task } from "../types";


interface TaskItemProps {
    task: Task,
    onTaskStatusChange: (id: string, status: string) => void
}


function TaskItem({ task, onTaskStatusChange }: TaskItemProps) {

    const { id, title, description, status, priority, dueDate } = task;
    const [taskStatus, setTaskStatus] = useState(status);


    const statusFiltercolors: Record<string, string> = {
        pending: 'bg-yellow-100 text-yellow-800',
        inProgress: 'text-blue-800',
        completed: 'text-green-600'
    };

    function handleStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        onTaskStatusChange(id, event.target.value);
        setTaskStatus(event.target.value as typeof taskStatus)
    }


    const getPriorityElement = (priority: string) => {
        const colors: Record<string, string> = {
            medium: 'text-yellow-600',
            high: 'text-red-600',
            default: 'text-green-600'
        };

        const colorClass = colors[priority] || colors.default;

        return <span className={colorClass}>Priority: {priority}</span>;
    };



    return (
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="flex gap-2">
                    <select
                        value={taskStatus}
                        onChange={handleStatus}
                        className={`px-2 py-1 ${statusFiltercolors[taskStatus]} rounded mx-2 `}>
                        <option value="pending">Pending</option>
                        <option value="inProgress">In Progress</option>
                        <option value="completed">Completed</option>
                    </select>
                    <button className="text-red-500 hover:text-red-700">Delete</button>
                </div>
            </div>
            <div className="flex gap-4">
                {getPriorityElement(priority)}
                <span className="text-gray-500">Due: {dueDate} </span>
            </div>
        </div>
    )

}

export default TaskItem;