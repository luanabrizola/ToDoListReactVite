import Header from "./componentes/Header/Header"
import Main from "./componentes/Main/Main"
import Footer from "./componentes/Footer/Footer"
import TaskList from "./componentes/TaskList/TaskList"

import styles from "./App.module.css"

function App(){
  return(
    <div className={styles.App}>
      <Header />
      <Main>
        <form>
          <input type="text" />
          <button>+</button>
        </form>
        <TaskList />
      </Main>
      <Footer autor="Luana"/>
    </div>
  )
}

export default App 