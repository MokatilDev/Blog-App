import { SuccessResponse } from "../types/response"
import { UserData } from "../types/user"
import axiosInstance from "../utils/axiosInstance"


const registerUser = async (userDate: UserData) => {
    return (await axiosInstance.post<SuccessResponse>("/auth/register", userDate)).data
}


export { registerUser }