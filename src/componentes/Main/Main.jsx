import styles from "./Main.module.css"




function Main(props) {
    // let {children} = props
    return (
        <div className={styles.Main}>
            {/* {children} */}
            <div className={styles.input}>
                <input type="text" />
                <button className={styles.botaoAdd}>+</button>
            </div>
            <div className={styles.itens}>
                <div className={styles.task}>
                    <p>Item 1</p>
                    <button className={styles.buttonX}>X</button>
                </div>
                <div className={styles.task}>
                    <p>Item 2</p>
                    <button className={styles.buttonX}>X</button>
                </div>
                <div className={styles.task}>
                    <p>Item 3</p>
                    <button className={styles.buttonX}>X</button>
                </div>

            </div>
            
        </div>

    )
}
export default Main

