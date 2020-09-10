import { useState, useReducer, memo } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { sendMessage } from "api";
import { useFadeAnimation } from "hooks";
import { setContactState } from "ducks/reducers";
import styles from "./style.module.sass";
import { ContactDataType, Action } from "./types";
import { selectIsContactShow } from "selectors";

const initialState: ContactDataType = {
  client: "",
  email: "",
  text: "",
  date: Date.now(),
  isRead: false,
  isImportant: false,
  isDeleted: false,
};

function reducer(state: ContactDataType, action: Action): ContactDataType {
  const { type, payload } = action;

  if (!type) {
    return state;
  }

  if (type === "clear") {
    return initialState;
  }

  return { ...state, [type]: payload };
}

function ModalContact() {
  const reduxDispatch = useDispatch();
  const isOpen = useSelector(selectIsContactShow);
  const { render, handleEndAnimation } = useFadeAnimation(isOpen);
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);
  const { dimmer, fadeIn, fadeOut, modal, elevateDown, elevateUp } = styles;
  const dimmerClasses = clsx({
    [dimmer]: true,
    [fadeIn]: isOpen,
    [fadeOut]: !isOpen,
  });
  const modalClasses = clsx({
    [modal]: true,
    [elevateDown]: isOpen,
    [elevateUp]: !isOpen,
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const action: Action = { type: this.type, payload: e.target.value };

    dispatch(action);
  }

  function handleClose(): void {
    reduxDispatch(setContactState(false));
  }

  function handleBlockClick(e: React.MouseEvent): void {
    e.stopPropagation();
  }

  function handleSubmit(): void {
    const messageData = {
      data: state,
      successCallback: handleSuccess,
    };

    function handleSuccess(): void {
      handleClose();
      dispatch({ type: "clear" });
      setIsSubmit(false);
    }

    setIsSubmit(true);
    sendMessage(messageData);
  }

  return (
    <>
      {render && (
        <div
          className={dimmerClasses}
          onAnimationEnd={handleEndAnimation}
          onClick={handleClose}
        >
          <div className={modalClasses} onClick={handleBlockClick}>
            <div className={styles.title}>
              <span>Hello! let's work together.</span>
              <span onClick={handleClose}>&#10006;</span>
            </div>
            <div className={styles.form}>
              <input
                type="text"
                value={state.client}
                onChange={handleChange.bind({ type: "client" })}
                placeholder="What's your name?"
              />
              <input
                type="email"
                value={state.email}
                onChange={handleChange.bind({ type: "email" })}
                placeholder="Your Email Address"
              />
              <textarea
                value={state.text}
                onChange={handleChange.bind({ type: "text" })}
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

export default memo(ModalContact);
