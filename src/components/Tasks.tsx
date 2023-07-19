import { EmptyList } from './EmptyList';
import { Task } from './Task'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: Task[]
}
export function Tasks({tasks} : TasksProps) {
  function getCompletedCount() {
    const tasksLenght = tasks.length;
    if (tasksLenght === 0) {
      return '0'
    }
    const completedTasks = tasks.filter(auxTask => auxTask.isCompleted);
    return `${completedTasks.length} de ${tasksLenght}`;
  }
  function getTaskList() {
    if (tasks.length === 0) {
      return <EmptyList />
    }
    return <>
      {tasks.map(auxTask => <Task task={auxTask} deleteTask={(id)=>console.log(id)} completeTask={(id)=>console.log(id)} /> )}
    </>
  }
  return (
    <section className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <div>
          <span className={styles.createdTask}>Tarefas criadas</span>&nbsp;
          <output>{tasks.length}</output>
        </div>
        <div>
          <span className={styles.doneTask}>Concluídas</span>&nbsp;
          <output>{getCompletedCount()}</output>
        </div>
      </div>
      <div className={styles.taskList}>
        {getTaskList()}
      </div>
    </section>
  )
}