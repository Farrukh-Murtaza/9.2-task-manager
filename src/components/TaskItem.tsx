import type { Task } from "../types";


interface TaskItemProps {
    task: Task,
    onStatusChange?: (id: string, status: string) => void
}


function TaskItem({ task }: TaskItemProps) {
    const { id, title, description, status, priority, dueDate } = task;

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
        <div className="p-4 border rounded-lg shadow-sm hover:shadow-md transition-shadow bg-white dark:bg-black dark:border-gray-700">
            <div className="flex justify-between items-start">
                <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-gray-600">{description}</p>
                </div>
                <div className="flex gap-2">
                    <select
                        // onChange={(e) => onStatusChange?.(id, e.target.value)}
                        className="px-2 py-1 rounded mx-2 bg-yellow-100 text-yellow-800">
                        <option value="pending">Pending</option>
                        <option value="in-progress">In Progress</option>
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