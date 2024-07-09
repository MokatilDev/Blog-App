import {  InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {}

function Input({...props}: InputProps) {
  return (<>
    <input {...props} className="bg-dark transition-all duration-150 focus:border-white placeholder:text-[#242424] py-2 px-3 text-lg border border-main"/>
  </>);
}

export default Input;
