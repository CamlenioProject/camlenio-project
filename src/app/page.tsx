import dynamic from "next/dynamic";
import Hero from "./components/Homepage/hero";
const ItSolution = dynamic(() => import("./components/Homepage/Itsolution"));
const IndustriesSection = dynamic(
  () => import("./components/Homepage/Industries-section")
);
const DevServices = dynamic(() => import("./components/Homepage/dev-services"));
const MakeUsTop = dynamic(() => import("./components/Homepage/make-us-top"));

const MakeUsUnique = dynamic(
  () => import("./components/Homepage/make-us-unique")
);
const SolutionsScale = dynamic(
  () => import("./components/Homepage/solutions-scale")
);
const OurProcess = dynamic(() => import("./components/Homepage/our-process"));
const Technologies = dynamic(
  () => import("./components/Homepage/technologies")
);
const Testimonials = dynamic(
  () => import("./components/Homepage/testimonials")
);
const FreeDemo = dynamic(() => import("./components/Homepage/free-demo"));
const BlogSection = dynamic(() => import("./components/Homepage/blog-section"));
const LogoSlider = dynamic(() => import("./components/Homepage/logo-slider"));

const Home = () => {
  return (
    <div className=" relative bg-gray-800">
      <Hero />
      <ItSolution />
      <IndustriesSection />
      <DevServices />
      <MakeUsTop />
      <MakeUsUnique />
      <SolutionsScale />
      <OurProcess />
      <Technologies />
      <Testimonials />
      <FreeDemo />
      <BlogSection />
      <LogoSlider />
    </div>
  );
};
export default Home;
