import styles from "./Footer.module.css"


function Footer(props){

    let {autor} = props;
    let ano = new Date().getFullYear();

    return(
        <div className={styles.Footer}>
            React - {props.autor} - {props.ano}
        </div>

    )
    
}

export default Footer

