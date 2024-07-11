import { useMutation } from "@tanstack/react-query"
import { UserData } from "../types/user"
import { registerUser } from "./api"
import { ErrorResponse, SuccessResponse } from "../types/response"
import { ACTION_TYPES, SIGN_UP_ACTION } from "../types/signup"
import { AxiosError } from "axios"



const useRegisterUser = (dispatch: React.Dispatch<SIGN_UP_ACTION>, setIsFormSubmit: React.Dispatch<React.SetStateAction<boolean>>, formRef: React.RefObject<HTMLFormElement>) => {
    return useMutation<SuccessResponse, AxiosError<ErrorResponse>, UserData>({
        mutationFn: (userDate: UserData) => {
            return registerUser(userDate)
        },
        onError: (error) => {
            if (!error) return;

            if (error.response?.data.errorType === "BAD_CREDENTIALS") {
                dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { email: error.response.data.message } } });
                dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: false } })
                return;
            }
            if (error.response?.data.errorType === "DUPLICATE_EMAIL") {
                dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { email: error.response.data.message } } });
                dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: false } })
                return;
            }
            if (error.response?.data.errorType === "DUPLICATE_USERNAME") {
                dispatch({ type: ACTION_TYPES.SET_ERRORS, payload: { errors: { username: error.response.data.message } } });
                dispatch({ type: ACTION_TYPES.SET_FORM_VALIDATY, payload: { isValid: false } })
                return;
            }
        },
        onSuccess: () => {
            setIsFormSubmit(true);
            formRef.current?.reset()
   
        }
    })
}

export default useRegisterUser