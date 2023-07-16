import clipboard from '../assets/Clipboard.svg'
import styles from './EmptyList.module.css'


export function EmptyList() {
    return (
      <div className={styles.emptyList}>
        <img src={clipboard} />
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    )
}