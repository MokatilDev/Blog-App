import React, { useReducer, useRef, useState } from "react";
import Input from "../components/ui/Input";
import githubIcon from "../assets/icons/github-mark-white.svg";
import discordIcon from "../assets/icons/discord.svg";
import PasswordInput from "../components/ui/PasswordInput";
import { INITIAL_SIGN_UP_STATE } from "../utils/constants";
import { ACTION_TYPES } from "../types/signup";
import SignUpFromReducer from "../utils/reducers/signUpFromReducer";
import useRegisterUser from "../services/mutation";
import loadingIcon from "../assets/icons/laoding.svg"

function SignUp() {
  const [signUpState, dispatch] = useReducer(
    SignUpFromReducer,
    INITIAL_SIGN_UP_STATE
  );
  const [isFormSubmit, setIsFormSubmit] = useState(false)

  const emailRef = useRef<HTMLInputElement>(null);
  const usernameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const formRef = useRef<HTMLFormElement>(null)

  const registerUser = useRegisterUser(dispatch, setIsFormSubmit, formRef)

  const handelChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsFormSubmit(false)
    const { name, value } = e.target;
    dispatch({ type: ACTION_TYPES.SET_FIELD, payload: { field: name, value: value } })
    validationInput(name)
  }

  const validationInput = (field?: string) => {
    switch (field) {
      case "email":
        if (!emailRef.current?.value.trim()) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, email: "Email address is required" } } });
        } else if (
          !emailRef.current?.value
            .trim()
            .match(/^[a-z0-9]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/)
        ) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, email: "Please enter a valid email address" } } });
        } else {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, email: undefined } } });
          dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: true } });
        }
        break;
      case "username":
        if (!usernameRef.current?.value.trim()) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, username: "Username is required" } } });
        } else if (
          !usernameRef.current?.value.trim().match(/^(?!.*\s)[a-zA-Z0-9_-]{5,20}$/)
        ) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, username: "Username must be between 4 and 20 characters, and not contain any special characters" } } });
        } else {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, username: undefined } } });
          dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: true } });
        }
        break;
      case "password":
        if (!passwordRef.current?.value.trim()) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, password: "Password is required" } } });
        } else if (
          !passwordRef.current?.value
            .trim()
            .match(
              /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*.])[A-Za-z\d!@#$%^&*.]{8,25}$/
            )
        ) {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, password: "Password must be between 8-25 characters , include at least one uppercase letter, one number, and one special character ( @ # $ % . ^ & * )" } } });
        } else {
          dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { ...signUpState.errors, password: undefined } } });
          dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: true } });
        }
        break;
      default:
        dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { email: "Email address is required", username: "Username is required", password: "Password is required" } } });
    }
  }

  const handelSubmitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (signUpState.isFormValid) {
      registerUser.mutate({
        email: signUpState.data.email,
        username: signUpState.data.username,
        password: signUpState.data.password
      })

      console.log("Form is valid")
    } else {
      validationInput()
    }
  }

  const getError = (field: "email" | "username" | "password") => {
    return signUpState.errors[field]
  }

  const displayError = (field: "email" | "username" | "password") => {
    const message = getError(field)
    if (message) {
      return <p className="text-red-500 text-sm mt-2"> * {message}</p>
    }
    return null
  }

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-semibold text-4xl mt-10">Sign Up</h1>
          <p className="text-second text-lg mt-1">
            Enter your details to register
          </p>
        </div>

        <form className="max-w-[380px] w-full mt-5" onSubmit={handelSubmitForm} noValidate ref={formRef}>
          <div className="flex flex-col">
            <label className="mb-2">Email</label>
            <Input error={signUpState.errors.email} ref={emailRef} onChange={handelChangeInput} name="email" type="email" placeholder="Enter your email" />
            {displayError("email")}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 mt-3">Username</label>
            <Input error={signUpState.errors.username} ref={usernameRef} onChange={handelChangeInput} name="username" type="text" placeholder="Enter your username" />
            {displayError("username")}
          </div>

          <div className="flex flex-col">
            <label className="mb-2 mt-3">Password</label>
            <PasswordInput error={signUpState.errors.password} ref={passwordRef} onChange={handelChangeInput} name="password" placeholder="Create strong password" />
            {displayError("password")}
          </div>

          <button disabled={registerUser.isPending} className="bg-white rounded flex justify-center  transition-all duration-150 hover:translate-x-1 hover:-translate-y-1 uppercase w-full border mt-5 text-black font-semibold py-2 px-5">
            {registerUser.isPending ?
              <img src={loadingIcon} />
              : "Sign Up"}
          </button>

          {isFormSubmit ? <p className="text-green-500 text-sm mt-3"> - ✅ You have been registered. Go to the login page to sign in to your account.</p> : ""}

          <p className="text-sm mt-3 text-second">
            By signing up, you agree to our{" "}
            <span className="underline text-white font-semibold">
              Terms of services
            </span>{" "}
            &{" "}
            <span className="underline text-white font-semibold">
              Privacy policy
            </span>
          </p>
        </form>

        <div className="flex w-full gap-3 max-w-[380px] justify-center items-center">
          <div className="border-t border-main flex-grow"></div>
          <p className="">Or Sign Up With</p>
          <div className="border-t border-main flex-grow"></div>
        </div>

        <div className="max-w-[380px] w-full flex gap-3 mt-3">
          <a href="" className="w-full">
            <button className="flex w-full rounded  h-12 justify-center items-center px-3 bg-[#333]/20 text-white  hover:bg-mainButton transition-colors">
              <img src={githubIcon} className="w-8 h-8 mr-2" alt="GitHub" />
              <p className="font-medium">GitHub</p>
            </button>
          </a>

          <a href="" className="w-full">
            <button className="flex w-full rounded  h-12 justify-center items-center px-3 bg-[#5865F2] text-white  hover:bg-[#4752C4] transition-colors">
              <img src={discordIcon} className="w-8 h-8 mr-2" alt="Discord" />
              <p className="font-medium">Discord</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
