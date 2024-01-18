import Image from "next/image";
import karthikeya from "./Images/Karthikeya.png";
import Shumi from "./Images/shumi-removebg-preview.png";
import NewVideos from "@/components/NewVideos";

export default function Home() {
  return (
    <div>
    <div className="text-5xl font-semibold text-center text-slate-900">Welcome to MotorInc</div>
    <div className="flex flex-col justify-center md:gap-6 pt-10 lg:flex-row  gap-y-9 h-fit">
      <div className=" md:flex min-w-[50%] h-fit gap-2">
        <div className="flex md:w-[500px] md:min-h-[500px] md:h-fit rounded-3xl bg-[#0972ff] items-center justify-center md:rounded-full">
          <div className="max-h-fit">
            <Image
              src={karthikeya}
              className="max-h-fit "
              height={250}
              width={350}
              alt="Karthikeya"
            />
          </div>
        </div>
        <div className="flex-1 px-2 ">
          <div className="text-3xl font-semibold text-clip border-b-[#E20A17] border-b-8 rounded p-3">
            Karthikeya Singhee
          </div>
          <div className="text-right text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure illum excepturi quaerat architecto tempora, repellendus assumenda quia sunt aperiam eum debitis minus nulla delectus laborum tenetur quam quos, aliquid aut voluptatum quod non blanditiis omnis dolor eius. Dicta velit quis omnis voluptates delectus? Neque dolor debitis sunt! Suscipit vitae veniam inventore ratione quam perferendis laboriosam esse aliquid molestias dolor, quos ab! Ipsam nemo provident debitis nesciunt eligendi voluptas esse in?
          </div>
        </div>
      </div>
      <div className="md:flex md:flex-row-reverse min-w-[50%] ">
        <div className="flex md:w-[500px] md:min-h-[500px] md:h-fit rounded-3xl bg-[#0972ff] items-center justify-center md:rounded-full">
          <div className="max-h-fit">
            <Image
              src={Shumi}
              className="max-h-fit"
              height={250}
              width={350}
              alt="Karthikeya"
            />
          </div>
        </div>
        <div className="flex-1 px-2 ">
          <div className="text-3xl font-semibold text-clip border-b-[#F2771A] border-b-8 text-right rounded p-3">
            Shubhabrata Marmar
          </div>
          <div className="text-left text-sm">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Maiores, unde quod pariatur, repellendus asperiores cumque quia amet dolorum ex fuga ab eligendi officia perferendis, voluptatem placeat similique. Recusandae, atque doloribus obcaecati excepturi ipsa, commodi dolore non consequuntur praesentium, illum debitis laudantium nisi at dicta dolor repellat vel ut quaerat. Fugiat architecto velit ipsum, consequatur atque voluptas ut distinctio repudiandae deserunt corporis iste in enim! Ab nihil iste dicta laboriosam voluptatibus.
          </div>
        </div>
      </div>
    </div>

    <NewVideos />
    </div>
  );
}
