import { useState, useEffect } from "react";
import clsx from "clsx";

import { sendMessage } from "api";
import styles from "./style.module.sass";

export default function ModalContact({ handleClose, isOpen }) {
  const [render, setRender] = useState<Boolean>(isOpen);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [text, setText] = useState<string>("");
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChangeName = (e) => setName(e.target.value);
  const handleChangeEmail = (e) => setEmail(e.target.value);
  const handleChangeText = (e) => setText(e.target.value);
  const handleEndAnimation = () => !isOpen && setRender(false);
  const handleSubmit = () => {
    const data = {
      client: name,
      email: email,
      text: text,
      date: Date.now(),
      isRead: false,
      isImportant: false,
      isDeleted: false,
    };
    setIsSubmit(true);
    sendMessage({
      data,
      successCallback: () => {
        handleClose();
        setEmail("");
        setName("");
        setText("");
        setIsSubmit(false);
      },
    });
  };

  useEffect(() => {
    isOpen && setRender(true);
  }, [isOpen]);

  const dimmerClasses = clsx({
    [styles.dimmer]: true,
    [styles.fadeIn]: isOpen,
    [styles.fadeOut]: !isOpen,
  });
  const modalClasses = clsx({
    [styles.modal]: true,
    [styles.elevateDown]: isOpen,
    [styles.elevateUp]: !isOpen,
  });

  return (
    <>
      {render && (
        <div
          className={dimmerClasses}
          onAnimationEnd={handleEndAnimation}
          onClick={handleClose}
        >
          <div className={modalClasses} onClick={(e) => e.stopPropagation()}>
            <div className={styles.title}>
              <span>Hello! let's work together.</span>
              <span onClick={handleClose}>&#10006;</span>
            </div>
            <div className={styles.form}>
              <input
                type="text"
                value={name}
                onChange={handleChangeName}
                placeholder="What's your name?"
              />
              <input
                type="email"
                value={email}
                onChange={handleChangeEmail}
                placeholder="Your Email Address"
              />
              <textarea
                value={text}
                onChange={handleChangeText}
                placeholder="Tell me about your project!"
              />
              <button onClick={handleSubmit}>
                {isSubmit ? "Please, wait..." : "Start a conversation"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
