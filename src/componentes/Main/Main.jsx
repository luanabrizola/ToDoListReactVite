import styles from "./Main.module.css"




function Main(props) {
    let {children} = props
    return (
        <div className={styles.Main}>
            {children}
            
        </div>

    )
}
export default Main

