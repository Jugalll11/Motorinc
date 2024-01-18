
import Link from "next/link";
import { FC } from "react";
import UserAuthForm from "./UserAuthForm";

const SignIn: FC = () => {
  return (
    <div className=" container  mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[400px]">
      <div className="flex flex-col text-center space-y-2">
      <h1 className="text-2xl font-semibol tracking-tight">Welcome back!</h1>
      <p className="text-sm max-w-xs">Lets Get You signed In</p>
      <UserAuthForm />
      </div>
    </div>
  );
};

export default SignIn;