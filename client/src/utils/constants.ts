import { SignUpState } from "../types/signup";

const INITIAL_SIGN_UP_STATE: SignUpState = {
  errors: {},
  isFormValid: false,
  data: {
    email: "",
    username: "",
    password: "",
  },
};

export { INITIAL_SIGN_UP_STATE };
