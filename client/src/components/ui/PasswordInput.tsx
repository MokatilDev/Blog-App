import eye from "../../assets/icons/eye.svg";
import eye_off from "../../assets/icons/eye-off.svg";
import { forwardRef, InputHTMLAttributes, useState } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}


const PasswordInput = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const handelShowPassword = () => {
    setShowPassword((prevState) => {
      return !prevState;
    });
  };

  return (
    <>
      <div className="relative w-full">
        <img
          src={showPassword ? eye_off : eye}
          className="absolute right-2 top-3 cursor-pointer"
          onClick={handelShowPassword}
        />

        <input
          {...props}
          type={(showPassword ? "text" : "password")}
          ref={ref}
          className={(props.error !== undefined ?
            "focus:outline-none focus:ring-4 focus:ring-red-500/20 border-red-500 " :
            "border-main focus:border-white focus:ring-4 focus:ring-white/10 ") +
            "bg-dark pr-10 rounded  transition-all duration-150 w-full  placeholder:text-[#242424] py-2 px-3 text-lg border border-main"
          }
        />
      </div>
    </>
  );
});

export default PasswordInput;
