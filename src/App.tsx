import { useState } from "react";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { initialTasks, type Task } from "./types";

function App() {

  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setPriorityStatus] = useState<string>('all');

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasksList, setListTasks] = useState<Task[]>(initialTasks);


  function handleStatusFilter(status: string) {
    setSelectedStatus(status);
    if (status === 'all') {
      setListTasks(tasks); // Reset to full list
    } else {
      const result = tasks.filter(task => task.status === status);
      setListTasks(result);
    }

  }


  function handlePriorityFilter(priority: string) {

    setPriorityStatus(priority)

    if (priority !== 'all') {
      const result = tasks.filter(task => task.priority === priority);
      setListTasks(result);
    } else {
      setListTasks(tasks);
    }

  }

  function updateList(id: string, status: string) {

    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, status: status as Task['status'] }
      }
      return task;
    });

    setTasks(updatedTasks);
    setListTasks(updatedTasks);

  }



  return (
    <div className="max-w-200 m-auto ">
      <h2 className="tracking-tight text-slate-900  font-semibold target:animate-[fade-in_1.5s] mt-10 border-b pb-1 text-3xl nextra-border">Task Manager</h2>

      <TaskFilter onStatusFilter={handleStatusFilter} onPriorityFilter={handlePriorityFilter} />
      <TaskList tasks={tasksList} onUpdateList={updateList} />

    </div>
  )
}

export default App
