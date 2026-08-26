import type React from "react";
import { useState } from "react";


function TaskFilter({ onStatusFilter }) {

    const [statusFilter, setStatusFilter] = useState('all');
    const [priorityFilter, setPriorityFilter] = useState('all');

    function handleStatus(event: React.ChangeEvent<HTMLSelectElement>) {
        setStatusFilter(event.target.value);
        onStatusFilter(event.target.value);
    }

    function handlePriority(event: React.ChangeEvent<HTMLSelectElement>) {
        setPriorityFilter(event.target.value);
        console.log('Priority: ', event.target.value)
    }

    return (
        <div className="flex gap-4 py-4 justify-end">
            <div>
                <label
                    htmlFor="status-filter"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Status </label>

                <select
                    id="status-filter"
                    value={statusFilter}
                    onChange={handleStatus}
                    className="bg-white px-2 py-1 block w-full rounded-md border-gray-300
                     shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="all">All Statuses</option>
                    <option value="pending">Pending</option>
                    <option value="in-progress">In Progress</option>
                    <option value="completed">Completed</option>
                </select>
            </div>
            <div>
                <label
                    htmlFor="priority-filter"
                    className="block text-sm font-medium text-gray-700 mb-1">
                    Priority</label>

                <select
                    id="priority-filter"
                    value={priorityFilter}
                    onChange={handlePriority}
                    className="bg-white px-2 py-1 block w-full rounded-md border-gray-300
                     shadow-sm focus:border-blue-500 focus:ring-blue-500">
                    <option value="all">All Priorities</option>
                    <option value="high">High</option>
                    <option value="medium">Medium</option>
                    <option value="low">Low</option>
                </select>
            </div>
        </div>
    )

}


export default TaskFilter;