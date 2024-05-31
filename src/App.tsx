import { Header } from './components/Header'
import { AddBar } from './components/AddBar'
import { Tasks } from './components/Tasks'

import './global.css'
import { Task } from './components/Task'
import { useState } from 'react'

const tasksStub : Task[] = [
  {
    id: 'um',
    text: 'primeiro',
    isCompleted: true
  },
  {
    id: 'dois',
    text: 'segundo',
    isCompleted: false
  },
];

export function App() {
  const [tasks, setTasks] = useState<Task[]>(tasksStub);

  function addTask(newTask: Task) {
    setTasks([...tasks, newTask])
  }

  function deleteTask(id: string) {
    setTasks( tasks.filter((task) => task.id !== id) )
  }

  function toggleIsCompleted(id: string) {
    setTasks(tasks.map<Task>((task) => {
      if (task.id === id) {
        return {
        ...task,
        isCompleted: !task.isCompleted
        }
      }

      return task;
    }))
  }

  return (
    <>
      <Header />
      <AddBar onAddTask={addTask}/>
      <Tasks tasks={tasks}  onComplete={toggleIsCompleted} onDelete={deleteTask}/>
    </>
  )
}
