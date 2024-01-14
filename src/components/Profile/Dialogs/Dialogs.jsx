import React from "react"
import styles from "./Dialogs.module.css"
const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogsItems}>
                <div className={styles.dialog}>
                    Anton1
                </div>
                <div className={styles.dialog}>
                    Anton2
                </div>
                <div className={styles.dialog}>
                    Anton3
                </div>
            </div>
            <div className={styles.messages}>
<div className={styles.message}>Hi</div>
<div className={styles.message}>Hi i am Anton</div>
<div className={styles.message}>Bye</div>
            </div>
        </div>
    )
}
export default Dialogs