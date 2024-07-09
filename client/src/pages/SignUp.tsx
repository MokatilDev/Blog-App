import Input from "../components/ui/Input";
import github from "../assets/icons/github-mark-white.svg";
import discord from "../assets/icons/discord.svg";

function SignUp() {
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="container flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="font-semibold text-4xl mt-10">Sign Up</h1>
          <p className="text-second text-lg mt-1">
            Enter your details to register
          </p>
        </div>

        <form className="max-w-[380px] w-full mt-5">
          <div className="flex flex-col">
            <label className="mb-2">Email</label>
            <Input type="text" placeholder="Enter your email" />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 mt-3">Username</label>
            <Input type="text" placeholder="Enter your username" />
          </div>

          <div className="flex flex-col">
            <label className="mb-2 mt-3">Password</label>
            <Input type="text" placeholder="Create a strong password" />
          </div>

          <button className="bg-white transition-all duration-150 hover:translate-x-1 hover:-translate-y-1 uppercase w-full border mt-5 text-black font-semibold py-2 px-5">
            Sign Up
          </button>

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
            <button className="flex w-full h-12 justify-center items-center px-3 bg-black text-white  hover:bg-mainButton transition-colors">
              <img src={github} className="w-8 h-8 mr-2" alt="GitHub" />
              <p className="font-medium">GitHub</p>
            </button>
          </a>

          <a href="" className="w-full">
            <button className="flex w-full h-12 justify-center items-center px-3 bg-[#5865F2] text-white  hover:bg-[#4752C4] transition-colors">
              <img src={discord} className="w-8 h-8 mr-2" alt="Discord" />
              <p className="font-medium">Discord</p>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
