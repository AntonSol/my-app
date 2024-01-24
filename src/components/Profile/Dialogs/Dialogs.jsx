import React from "react"
import styles from "./Dialogs.module.css"
import Message from "./Message/Message"
import DialogItem from "./DialogItem/DialogItem"

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
    let dialogsElement=dialogsData.map(d=><DialogItem name={d.name} id={d.id} />)
    let messagesElement=messagesData.map(m=><Message message={m.message} />)
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