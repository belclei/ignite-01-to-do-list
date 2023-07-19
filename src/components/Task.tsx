import styles from "./Task.module.css";
import { Check, Circle, Trash } from 'phosphor-react';

export function Task({checked}) {
  return (
      <label className={styles.task}>
        <input type='checkbox' onChange={()=> checked = !checked}/>
        {checked ? (<Check size={24} />) : (<Circle size={24} />)}
        <span>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero, at quod minima quae placeat soluta assumenda blanditiis sit id molestiae cumque ex harum ipsam iure atque unde. Maxime, totam neque!
        </span>
        <button>
          <Trash size={24} />
        </button>
      </label>
  )
}