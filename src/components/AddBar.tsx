import styles from './AddBar.module.css'
import { PlusCircle } from 'phosphor-react'
import { Task } from './Task'
import { ChangeEvent, FormEvent, useState } from 'react'
import {  v4 as uuidv4  } from 'uuid'

interface AddBarProps {
  onAddTask: (newTask: Task) => void
}
export function AddBar({onAddTask}: AddBarProps) {
  const [taskText, setTaskText] = useState('')

  function handleTaskTextChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setTaskText(event.target.value);
  }

  function handleSubmit(evt: FormEvent) {
    evt.preventDefault();
    onAddTask({
      id: uuidv4(),
      text: taskText,
      isCompleted: false
    })
    setTaskText('')
  }

  return (
    <section className={styles.addBar}>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          className={styles.addInput}
          onChange={handleTaskTextChange}
          value={taskText}
          placeholder='Adicione uma nova tarefa'
        />
        <button type='submit' disabled={!(taskText.length > 0)}>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </section>
  )
}