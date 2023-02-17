import Image from "next/image";
import { useRouter } from "next/router";
import Blob from "../public/404-blob.svg";

export default function NotFound() {
  const route = useRouter();

  return (
    <div className="flex justify-center items-center px-4 gap-8 h-screen">
      <div className="flex-1 md:flex-[0.5] flex flex-col items-start justify-center">
        <div className="w-full mb-12 max-w-[3xl]">
          <div className="text-4xl lg:text-5xl mb-6">Are you lost?</div>
          <p className="text-2xl md:text-2xl">
            it looks like that page doesn’t - please check the URL and try again
          </p>
        </div>
        <button
          className="inline-block text-white text-base sm:text-xl my-4 px-12 py-[.7em] bg-gradient-to-r from-primary to-secondary rounded-[7px] hover:shadow-md active:scale-90 duration-200"
          onClick={() => route.back()}>
          Home Page
        </button>
      </div>
      <div className="flex-[0.5] hidden md:flex justify-center items-center  md:relative h-full">
        <div className="text-[7rem] font-bold hidden md:inline-block">404</div>
        <Image src={Blob} className="absolute h-[70%]" alt="404 page" />
      </div>
    </div>
  );
}
