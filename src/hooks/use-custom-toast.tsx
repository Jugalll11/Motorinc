import Link from "next/link";
import { toast } from "./use-toast";
import { buttonVariants } from "@/components/ui/Button";

export const useCustomToast = () => {
  const loginToast = () => {
    const { dismiss } = toast({
      title: "Login Required.",
      description: "You need to be Logged in",
      variant: "destructive",
      action: (
        <Link
          href={"/sign-in"}
          onClick={() => dismiss()}
          className={buttonVariants({ variant: "outline" })}
        >
          Log in
        </Link>
      ),
    });
  };
  const NotifToast = (sender:any, msg:any) => {
    const { dismiss } = toast({
      title: "New Message Recieved",
      description: `${sender}: ${msg}`,
      variant: "default",
    });
  };

  return { loginToast, NotifToast };
};
