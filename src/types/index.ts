// types/index.ts
export type TaskStatus = 'pending' | 'in-progress' | 'completed';

export interface Task {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority: 'low' | 'medium' | 'high';
    dueDate: string;
}

export interface TaskListProps {
    tasks: Task[];
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}


export interface TaskItemProps {
    task: Task;
    onStatusChange: (taskId: string, newStatus: TaskStatus) => void;
    onDelete: (taskId: string) => void;
}


export interface TaskFilterProps {
    onFilterChange: (filters: {
        status?: TaskStatus;
        priority?: 'low' | 'medium' | 'high';
    }) => void;
}

export const initialTasks: Task[] = [
    { id: "1", title: "Task 1", description: "Description 1", status: "pending", priority: "low", dueDate: "8/31/2026" },
    { id: "2", title: "Task 2", description: "Description 2", status: "in-progress", priority: "medium", dueDate: "8/30/2026" },
    { id: "3", title: "Task 3", description: "Description 3", status: "completed", priority: "high", dueDate: "8/29/2026" },
];