import React from "react"
import styles from "./Dialogs.module.css"
import { NavLink } from "react-router-dom"

const DialogItem = (props) => {
    return (<div className={styles.dialogs}>
        <NavLink path={'dialogs/*' + props.id}>{props.name}</NavLink>
    </div>)

}
const Message = (props) => {
    return (<div className={styles.dialogs}>{props.message}
    </div>
    )
}
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <DialogItem name='Toha' id='0' />
                <DialogItem name='Biba' id='1' />
                <DialogItem name='Trololo' id='2' />
            </div>
            <div className={styles.messages}>
                <Message message='Hi' id='0' />
                <Message message='I am Anton' id='1' />
                <Message message='QQ' id='2' />
            </div>
        </div>
    )
}
export default Dialogs