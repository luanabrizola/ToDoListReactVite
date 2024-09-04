import { TaskItem } from './TaskItem/TaskItem'
import styles from './TaskList.module.css'

export function TaskList() {

  const listaTarefas = [
    {id:1, tarefa: "Estudar"},
    {id:2, tarefa: "Lavar a Louça"},
    {id:3, tarefa: "Ir à academia"},    
    {id:4, tarefa: "Tomar banho"},    
  ]

  
  return (
    <ul className={styles.TaskList}>

        {
          listaTarefas.map(item => <TaskItem texto={item.tarefa} />)
        }  
        
          
        </ul>
  )
}