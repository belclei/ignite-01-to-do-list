import styles from './Tasks.module.css'

export function Tasks() {
  return (
    <section className={styles.tasks}>
      <div className={styles.tasksInfo}>
        <div>
          <span className={styles.createdTask}>Tarefas criadas</span>&nbsp;
          <output>8</output>
        </div>
        <div>
          <span className={styles.doneTask}>Concluídas</span>&nbsp;
          <output>9</output>
        </div>
      </div>
    </section>
  )
}