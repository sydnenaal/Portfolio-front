import { useState, useEffect, useReducer } from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";

import { sendMessage } from "api";
import { setContactState } from "ducks/reducers";
import styles from "./style.module.sass";
import { ContactDataType, Actions, Types } from "./types";
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

function reducer(state: ContactDataType, action: Actions): ContactDataType {
  switch (action.type) {
    case "SET_NAME":
      return { ...state, client: action.payload };
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_TEXT":
      return { ...state, text: action.payload };
    case "CLEAR_STORE":
      return initialState;
    default:
      return state;
  }
}

const ModalContact: React.FC = () => {
  const reduxDispatch = useDispatch();
  const isOpen = useSelector(selectIsContactShow);

  const [state, dispatch] = useReducer(reducer, initialState);
  const [render, setRender] = useState<Boolean>(isOpen);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);

  const handlerAction = (type: Types) => (e) =>
    dispatch({ type: type, payload: e.target.value });
  const handleChangeName = handlerAction("SET_NAME");
  const handleChangeEmail = handlerAction("SET_EMAIL");
  const handleChangeText = handlerAction("SET_TEXT");
  const handleEndAnimation = () => !isOpen && setRender(false);
  const handleClose = () => reduxDispatch(setContactState(false));
  const handleSubmit = () => {
    const data: ContactDataType = {
      client: state.client,
      email: state.email,
      text: state.text,
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
        dispatch({ type: "CLEAR_STORE" });
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
                value={state.client}
                onChange={handleChangeName}
                placeholder="What's your name?"
              />
              <input
                type="email"
                value={state.email}
                onChange={handleChangeEmail}
                placeholder="Your Email Address"
              />
              <textarea
                value={state.text}
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
};

export default ModalContact;
