import { useReducer } from "react";
import { IterableObject } from "iterable-objects";

interface RuleTypes {
  [name: string]: {
    errorMessage: string;
    checkIsValid: (value: string) => boolean;
  };
}

export default function useForm(initialState) {
  const [state, dispatch] = useReducer(reducer, initialState);

  const rules: RuleTypes = {
    notNull: {
      errorMessage: "The value must be not null",
      checkIsValid: (value: string) => !!value,
    },
  };

  function reducer(state, action) {
    const { type, payload } = action;

    if (!type) {
      return state;
    }

    if (type === "clear") {
      return initialState;
    }

    if (type === "error") {
      const { field, message } = payload;

      return {
        ...state,
        [field]: {
          ...state[field],
          error: message,
        },
      };
    }

    return {
      ...state,
      [type]: {
        ...state[type],
        value: payload,
      },
    };
  }

  function validate(): boolean {
    const iterableState = new IterableObject(state);
    let isValid: boolean = true;

    iterableState.forEach((key: string, field: any) => {
      const { validationRule, value } = field;
      const { checkIsValid, errorMessage } = rules[validationRule];

      if (!checkIsValid(value)) {
        const errorAction = {
          type: "error",
          payload: { field: key, message: errorMessage },
        };

        dispatch(errorAction);
        isValid = false;
      }
    });

    return isValid;
  }

  return { state, dispatch, validate };
}
