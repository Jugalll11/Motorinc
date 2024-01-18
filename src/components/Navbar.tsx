import Link from "next/link";
import Image from "next/image";
import MainIcon from "../Icons/MainIcon.jpg";
import { Button, buttonVariants } from "./ui/Button";
import MobileMenu from "./MobileMenu";

export default function Navbar() {
  return (
    <div className="fixed top-0 inset-x-0 h-fit z-[10] py-2 bg-[#0972ff] ">
      <div className=" container h-full mx-auto flex items-center justify-between gap-2">
        <Link className="flex gap-2 items-center" href={"/"}>
          <Image
            alt="MotorInc"
            src={MainIcon}
            height={40}
            width={40}
            className="rounded-md"
          />
          <p className="hidden text-zinc text-[#01114d] text-lg font-medium md:block">
            MotorInc
          </p>
        </Link>

        <div className="w-auto flex  items-center gap-10">
        <div className="flex md:hidden hover:text-white cursor-pointer">
            <MobileMenu/>
        </div>
        <div className="hidden w-full md:flex justify-evenly gap-5 ">
            <Link className="hover:text-white" href={'/'}>Home</Link>         
            <Link className="hover:text-white" href={'/'}>MeetUps</Link>         
            <Link className="hover:text-white" href={'/'}>Forum</Link>         
            <Link className="hover:text-white" href={'/'}>Articles</Link>         
        </div>
        <Link href={'/sign-in'} className={buttonVariants({variant:'Main', className:'min-w-fit'})} >Sign In</Link>
        </div>
      </div>
    </div>
  );
}
