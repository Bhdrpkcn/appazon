import { ChangeEvent, useReducer } from "react";
import { Action } from "../../shared/models/actionInterface";
import {
  INPUT_ACTION_BLUR,
  INPUT_ACTION_CHANGE,
  INPUT_ACTION_CLEAR,
  InputActionType,
} from "./models/InputAction";
import { InputState } from "./models/InputStateInterface";
import { ValidatorFunc } from "../../shared/utils/validation/models/ValidatorFunc";

/**
 * this is a custom hooks that interacts with text fields like registrationForm comp.
 * it can detect error with shouldDisplayError, and check validation if there is any
 * the rest is the hooks that helps to make more organised hook with reducer instead of useState for every one of them
 */

const initialInputState: InputState = {
  text: "",
  hasBeenTouched: false,
};

const inputReducer = (state: InputState, action: Action<InputActionType>) => {
  const { type, value = "" } = action;

  switch (type) {
    case INPUT_ACTION_CHANGE:
      return { text: value, hasBeenTouched: state.hasBeenTouched };
    case INPUT_ACTION_BLUR:
      return { text: state.text, hasBeenTouched: true };
    case INPUT_ACTION_CLEAR:
      return { text: value, hasBeenTouched: false };

    default:
      return { ...state };
  }
};

const useInput = (validatorFunc?: ValidatorFunc) => {
  const [{ text, hasBeenTouched }, dispatch] = useReducer(
    inputReducer,
    initialInputState
  );

  const isValid = validatorFunc ? validatorFunc(text) : true;

  const shouldDisplayError = hasBeenTouched && !isValid;

  const textChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch({ type: INPUT_ACTION_CHANGE, value: e.target.value });
  };

  const inputBlurHandler = () => {
    dispatch({ type: INPUT_ACTION_BLUR });
  };
  const clearHandler = () => {
    dispatch({ type: INPUT_ACTION_CLEAR });
  };

  return {
    text,
    shouldDisplayError,
    textChangeHandler,
    inputBlurHandler,
    clearHandler,
  };
};

export default useInput;
