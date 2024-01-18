import CloseModal from "@/components/CloseModal";
import EditProfileComponent from "@/components/editProfile";
import { authSession } from "@/lib/auth";
import { db } from "@/lib/db";
import { signIn } from "next-auth/react";
const page = async () => {
  const session = await authSession();
  
  const User = await db.user.findFirst({
    where: {
      id: session?.user.id,
    },
  });

  if(!User){
    signIn()
  }
  
  return (
    <div className="fixed inset-0 bg-zinc-900/20 z-10">
      <div className="container flex items-center h-full max-w-fit m-auto  ">
        <div className="relative bg-white m-auto w-fit items-center h-fit py-20 px-2 block rounded-lg">
          <p className="text-3xl font-semibold text-center mb-[3rem]">Edit Your Profile</p>
          <div className="absolute top-4 right-4">
            <CloseModal />
          </div>
          <EditProfileComponent User={User} />
        </div>
      </div>
    </div>
  );
};

export default page;
