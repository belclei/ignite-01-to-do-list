import styles from './AddBar.module.css'
import { PlusCircle } from 'phosphor-react'

export function AddBar() {
  return (
    <section className={styles.addBar}>
      <form>
        <input type='text' className={styles.addInput} placeholder='Adicione uma nova tarefa' />
        <button type='submit'>
          Criar
          <PlusCircle size={20} />
        </button>
      </form>
    </section>
  )
}