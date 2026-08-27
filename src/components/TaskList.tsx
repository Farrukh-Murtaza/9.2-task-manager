import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[]
    onUpdateList: (id: string, status: string) => void

}


function TaskList({ tasks, onUpdateList }: TaskListProps) {
    return (
        <div className="space-y-6">
            {
                tasks.map((task) => <TaskItem key={task.id} task={task} onTaskStatusChange={onUpdateList} />)
            }
        </div>
    )

}

export default TaskList;