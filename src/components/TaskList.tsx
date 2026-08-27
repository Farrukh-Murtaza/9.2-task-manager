import type { Task } from "../types";
import TaskItem from "./TaskItem";

interface TaskListProps {
    tasks: Task[]
    onUpdateList: (id: string, status: string) => void

}


function TaskList({ tasks, onUpdateList }: TaskListProps) {

    function onTaskStatusChange(id: string, status: string) {
        onUpdateList(id, status)
    }

    return (
        <div className="space-y-6">
            <div>{`Results: ${tasks.length}`}</div>
            {
                tasks.length > 0
                    ? tasks.map((task) => <TaskItem key={task.id} task={task} onTaskStatusChange={onTaskStatusChange} />)
                    : <div className="bg-gray-400 p-4 rounded-md text-white">No Result Found</div>
            }
        </div >
    )

}

export default TaskList;