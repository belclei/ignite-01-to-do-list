import styles from "./Task.module.css";
import { Check, Circle, Trash } from 'phosphor-react';

export interface Task {
  id: string;
  isCompleted: boolean;
  text: string;
}
interface TaskProps {
  task: Task;
  deleteTask: ((id: string) => void);
  completeTask: ((id: string) => void);
}
export function Task({task, deleteTask, completeTask} : TaskProps) {
  return (
    <label className={styles.task}>
      <input type='checkbox' checked={task.isCompleted} onChange={() => completeTask(task.id)}/>
      {task.isCompleted ? (<Check size={24} />) : (<Circle size={24} />)}
      <span> {task.text} </span>
      <button onClick={()=> deleteTask(task.id)}>
        <Trash size={24} />
      </button>
    </label>
  )
}