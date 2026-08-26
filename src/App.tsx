import { useState } from "react";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { initialTasks, type Task } from "./types";

function App() {

  const [selectedStatus, setSelectedStatus] = useState<string>('all');

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasksList, setListTasks] = useState<Task[]>(initialTasks);


  function handleStatusFilter(status: string) {
    if (status === 'all') {
      setListTasks(tasks); // Reset to full list
    } else {
      const result = tasks.filter(task => task.status === status);
      setListTasks(result);
    }

  }



  return (
    <div className="max-w-200 m-auto ">
      <h2 className="tracking-tight text-slate-900  font-semibold target:animate-[fade-in_1.5s] mt-10 border-b pb-1 text-3xl nextra-border">Task Manager</h2>

      <TaskFilter onStatusFilter={handleStatusFilter} />
      <TaskList tasks={tasksList} />

    </div>
  )
}

export default App
