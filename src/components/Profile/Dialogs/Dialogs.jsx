import React from "react";
import styles from "./Dialogs.module.css";
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";

const Dialogs = (props) => {
  // Проверяем, есть ли объект store в props, и существуют ли необходимые данные
  if (!props.store || !props.store._state || !props.store._state.messagePage) {
    return <div>No data</div>;
  }

  const dialogsElement = props.store._state.messagePage.dialogsData.map((d) => (
    <DialogItem key={d.id} name={d.name} id={d.id} />
  ));
  const messagesElement = props.store._state.messagePage.messagesData.map(
    (m) => <Message key={m.id} message={m.message} />
  );

  let newMessage = React.createRef();
  const newMess = () => {
    let text = newMessage.current.value;
    alert(text);
  };

  return (
    <div className={styles.dialogs}>
      <div>{dialogsElement}</div>
      <div>{messagesElement}</div>
      <div>
        <div>
          <textarea ref={newMessage}></textarea>
        </div>
        <div>
          <button onClick={newMess}> push message</button>
        </div>
      </div>
    </div>
  );
};

export default Dialogs;
