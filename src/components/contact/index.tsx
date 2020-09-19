import { useState, memo } from "react";
import { useDispatch } from "react-redux";
import clsx from "clsx";
import { useSelector } from "react-redux";

import { selectIsContactShow } from "selectors";
import { sendMessage } from "api";
import { useFadeAnimation, useForm } from "hooks";
import { setContactState } from "ducks/reducers";
import styles from "./style.module.sass";

type ActionType = "client" | "email" | "text" | "clear" | "";

type Action = {
  readonly type: ActionType;
  readonly payload?: string;
};

type ContactDataType = {
  [name: string]: {
    value: string;
    validationRule: string;
    error: string;
  };
};

const initialState: ContactDataType = {
  client: { value: "", validationRule: "notNull", error: "" },
  email: { value: "", validationRule: "notNull", error: "" },
  text: { value: "", validationRule: "notNull", error: "" },
};

function handleBlockClick(e: React.MouseEvent): void {
  e.stopPropagation();
}

function ModalContact() {
  console.info("-= Render ModalContact =-");

  const reduxDispatch = useDispatch();
  const isOpen: boolean = useSelector(selectIsContactShow);
  const { render, handleEndAnimation } = useFadeAnimation(isOpen);
  const { state, validate, dispatch } = useForm(initialState);
  const [isSubmit, setIsSubmit] = useState<Boolean>(false);
  const { dimmer, fadeIn, fadeOut, modal, elevateDown, elevateUp } = styles;
  const { client, email, text } = state;
  const dimmerClasses = clsx([dimmer, isOpen ? fadeIn : fadeOut]);
  const modalClasses = clsx([modal, isOpen ? elevateDown : elevateUp]);

  function handleChange(e: React.ChangeEvent<HTMLInputElement>): void {
    const action: Action = { type: this.type, payload: e.target.value };

    dispatch(action);
  }

  function handleClose(): void {
    reduxDispatch(setContactState(false));
  }

  function handleSubmit(): void {
    const isValid = validate();

    function handleSuccess(): void {
      handleClose();
      dispatch({ type: "clear" });
      setIsSubmit(false);
    }

    if (isValid) {
      const messageData = {
        data: state,
        successCallback: handleSuccess,
      };

      setIsSubmit(true);
      sendMessage(messageData);
    }
  }

  return (
    <>
      {render && (
        <div
          className={dimmerClasses}
          onAnimationEnd={handleEndAnimation}
          onMouseDown={handleClose}
        >
          <div className={modalClasses} onMouseDown={handleBlockClick}>
            <div className={styles.title}>
              <span>Hello! let's work together.</span>
              <span onClick={handleClose}>&#10006;</span>
            </div>
            <div className={styles.form}>
              <input
                type="text"
                value={client.value}
                onChange={handleChange.bind({ type: "client" })}
                placeholder="What's your name?"
              />
              <input
                type="email"
                value={email.value}
                onChange={handleChange.bind({ type: "email" })}
                placeholder="Your Email Address"
              />
              <textarea
                value={text.value}
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
