interface SignUpState {
  errors: SignUpErrors;
  isFormValid: boolean;
  data: {
    email: string;
    username: string;
    password: string;
  };
}

type SignUpErrors = {
  email?: string;
  username?: string;
  password?: string;
};

enum ACTION_TYPES {
  SET_ERRORS,
  SET_FIELD,
  SET_FORM_VALIDATY,
  REST_FORM
}

type SIGN_UP_ACTION =
  | { type: ACTION_TYPES.SET_ERRORS; payload: { errors: SignUpErrors } }
  | { type: ACTION_TYPES.SET_FORM_VALIDATY; payload: { isValid: boolean } }
  | { type: ACTION_TYPES.SET_FIELD; payload: { field: string; value: string } }
  | { type: ACTION_TYPES.REST_FORM };

export { ACTION_TYPES };
export type { SignUpErrors, SIGN_UP_ACTION, SignUpState };
