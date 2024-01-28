import React from "react"
import styles from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"

const Dialogs = (props) => {

    let dialogsElement=props.dialogsData.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElement=props.messagesData.map(m=><Message message={m.message} />)
    return (
        <div className={styles.dialogs}>
            <div>
                {dialogsElement}
        </div>
        <div>
                {messagesElement}
            </div>
        </div>
    )
}
export default Dialogs