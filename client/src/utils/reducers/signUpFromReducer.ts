import { ACTION_TYPES, SIGN_UP_ACTION, SignUpState } from "../../types/signup";

const SignUpFromReducer = (
  state: SignUpState,
  action: SIGN_UP_ACTION
): SignUpState => {
  switch (action.type) {
    case ACTION_TYPES.SET_ERRORS:
      return { ...state, errors: action.payload.errors };
    case ACTION_TYPES.SET_FIELD:
      return {
        ...state,
        data: { ...state.data, [action.payload.field]: action.payload.value },
      };
    case ACTION_TYPES.SET_FORM_VALIDATY:
      return { ...state, isFormValid: action.payload.isValid };
    case ACTION_TYPES.REST_FORM:
      return { ...state, isFormValid: false, errors: {} };
    default:
      return state;
  }
};

export default SignUpFromReducer;
