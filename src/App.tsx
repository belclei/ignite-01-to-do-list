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
  const [tasks, setTasks] = useState(tasksStub);

  function addTask(newTask:Task) {
    setTasks([...tasks, newTask])
  }

  return (
    <>
      <Header />
      <AddBar onAddTask={addTask} />
      <Tasks tasks={tasks}/>
    </>
  )
}
