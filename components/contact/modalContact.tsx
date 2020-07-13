import { useState, useEffect } from "react";
import clsx from "clsx";

import styles from "./style.module.sass";

export default function ModalContact({ handleClose, isOpen }) {
  const [render, setRender] = useState<Boolean>(isOpen);

  useEffect(() => {
    isOpen && setRender(true);
  }, [isOpen]);

  const handleEndAnimation = () => {
    !isOpen && setRender(false);
  };

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
              <input type="text" placeholder="What's your name?" />
              <input type="email" placeholder="Your Email Address" />
              <textarea placeholder="Tell me about your project!" />
              <button>Start a conversation</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
