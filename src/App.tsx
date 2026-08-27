import { useState } from "react";
import TaskFilter from "./components/TaskFilter";
import TaskList from "./components/TaskList";
import { initialTasks, type Task } from "./types";



function App() {

  const [selectedStatus, setSelectedStatus] = useState<string>('all');
  const [selectedPriority, setPriorityStatus] = useState<string>('all');

  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [tasksList, setListTasks] = useState<Task[]>(initialTasks);


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


  function onFilterChange(status: string, priority: string) {

    setSelectedStatus(status);
    setPriorityStatus(priority);

    let result: Task[] = tasks;

    if (status !== 'all') {
      result = result.filter(task => task.status === status);
    }

    if (priority !== 'all') {
      result = result.filter(task => task.priority === priority);
    }

    setListTasks(result);

  }



  return (
    <div className="max-w-200 m-auto ">
      <h2
        className="tracking-tight text-slate-900 font-semibold
        target:animate-[fade-in_1.5s] mt-10 border-b
         pb-1 text-3xl nextra-border"
      >Task Manager</h2>

      <TaskFilter
        onFilter={onFilterChange}
        selectedStatus={selectedStatus}
        selectedPriority={selectedPriority} />


      <TaskList
        tasks={tasksList}
        onUpdateList={updateList} />

    </div>
  )
}

export default App
