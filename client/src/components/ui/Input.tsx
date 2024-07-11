import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(({ ...props }, ref) => {
  return (
    <input
      ref={ref}
      {...props}
      className={(props.error !== undefined ?
        "focus:outline-none focus:ring-4 focus:ring-red-500/20 border-red-500 autofill:border-red-500 " :
        "border-main focus:border-white focus:ring-4 focus:ring-white/10 ")
        + "bg-dark transition-all duration-150 rounded  placeholder:text-[#242424] py-2 px-3 text-lg border border-main"}
    />
  );
});

export default Input;
