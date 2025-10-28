import Image from "next/image";
import { MdHorizontalRule } from "react-icons/md";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-r from-gray-100 via-orange-100 to-gray-100 bg-[length:200%_200%] animate-gradientMove pt-20 overflow-hidden">
      <div className="pl-8 md:pl-16 lg:pl-24 flex flex-col-reverse lg:flex-row items-center pt-8">
        {/* Left Content */}
        <div className="lg:w-1/2 flex flex-col justify-center text-center lg:text-left">
          <p className="text-sm font-sans text-gray-500 mb-2 flex items-center">
            Growth Your Business <MdHorizontalRule className="ml-2" />
          </p>
          <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-2">
            Best customized software development
          </h1>
          <p className="max-w-3xl text-gray-600 text-sm md:text-base mb-6 font-sans">
            Get professional & reliable research-oriented solutions for Data
            Science and Machine Learning business needs. Enjoy stress-free
            decision-making!
          </p>
          <button className="max-w-[10rem] px-3 py-3 bg-orange-500 text-white font-bold rounded-xl shadow-lg">
            Get Started
          </button>
        </div>

        <div className="lg:w-1/2 relative mt-12 lg:mt-0 flex  justify-end ">
          <div className="relative w-[600px] h-[400px]  lg:rounded-l-full overflow-hidden hidden md:flex justify-end align-bottom">
            <Image
              src="/Homepage/process-maintenance-img.webp"
              alt="Hero"
              fill
              className="object-cover "
            />
          </div>
        </div>
      </div>
    </section>
  );
}
