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
    let dialogsData=[
        {id:0,name:'Toha'},
        {id:1,name:'Biba'},
        {id:2,name:'Trololo'},
    ]
    let messagesData=[
        {id:0,message:'Hi'},
        {id:1,message:'I am Anton'},
        {id:2,message:'QQ'},
    ]
    return (
        <div className={styles.dialogs}>
            <div>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id} />
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id} />
                <DialogItem name={dialogsData[2].name} id={dialogsData[2].id} />
        </div>
        <div>
                <Message message={messagesData[0].message} />
                <Message message={messagesData[1].message} />
            </div>
        </div>
    )
}
export default Dialogs