import { EmptyList } from './EmptyList';
import { Task } from './Task'
import styles from './Tasks.module.css'

interface TasksProps {
  tasks: Task[]
  onComplete: (id: string) => void
  onDelete: (id: string) => void
}
export function Tasks({tasks, onComplete, onDelete} : TasksProps) {
  function getCompletedCount() {
    const tasksLength = tasks.length;
    if (tasksLength === 0) {
      return '0'
    }
    const completedTasks = tasks.filter(auxTask => auxTask.isCompleted);
    return `${completedTasks.length} de ${tasksLength}`;
  }

  function getTaskList() {
    if (tasks.length === 0) {
      return <EmptyList />
    }
    const openTasks = tasks.filter((task) => !task.isCompleted)
    const completedTasks = tasks.filter((task) => task.isCompleted)
    return <>
      {
        [...openTasks, ...completedTasks].map(task =>
          <Task key={task.id} task={task} deleteTask={onDelete} completeTask={onComplete} />
        )
      }
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