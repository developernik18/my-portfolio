import { FaGithub, FaLinkedinIn } from "react-icons/fa6";
import profilePic from "../_assets/profile-pic.png";
import Image from "next/image";
import Link from "next/link";

// image assets
import htmlLogo from "../_assets/_tech-logos/HTML 5.png";
import cssLogo from "../_assets/_tech-logos/CSS 3.png";
import tailwindLogo from "../_assets/_tech-logos/Tailwind.png";

import jsLogo from "../_assets/_tech-logos/JavaScript.png";
import tsLogo from "../_assets/_tech-logos/TypeScript.png";
import reactLogo from "../_assets/_tech-logos/React.png";
import nextLogo from "../_assets/_tech-logos/Next.png";

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="bg-gray-100 min-h-[90vh] 
      px-5 sm:px-10 xl:px-0"
    >
      <section
        className="top container max-w-5xl mx-auto flex 
        flex-col items-center justify-center gap-5
        lg:flex-row lg:justify-between "
      >
        <section
          className="left lg:max-w-xl flex flex-col gap-8 px-10 
          min-h-[20vh] justify-center order-2 text-center 
          lg:min-h-[60vh] lg:order-1 lg:py-10 lg:text-left lg:px-0"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            Front-End Focused Web Developer
          </h1>
          <p className="text-lg">
            Hi, I’m Nikhil Kumar. A Front-end Web Developer with 5+ years of
            experience.
          </p>
          <div className="for-more-info flex flex-row gap-5 text-lg justify-center lg:justify-start">
            <Link
              href={"https://www.linkedin.com/in/nikhil1994/"}
              target="_linkedin"
            >
              <FaLinkedinIn />
            </Link>
            <Link 
              href={"https://github.com/developernik18"} 
              target="_github"
            >
              <FaGithub />
            </Link>
          </div>
        </section>
        <section
          className="right max-w-md flex flex-col items-center gap-6 
          pt-10 min-h-[10vh] justify-center order-1 w-full
          lg:py-10 lg:pt-16 lg:order-2 lg:min-h-[60vh] lg:w-fit"
        >
          <Image src={profilePic} alt={"Profile picture"} />
        </section>
      </section>

      <section className="bottom container max-w-5xl mx-auto 
        flex flex-col py-20 
        lg:flex-row gap-10 items-center min-h-[20vh] "
      >
        <h2 
          className="text-xl font-semibold pb-2
          border-b-2 border-gray-300 lg:border-none"
        >
          Tech Stack
        </h2>
        <div className="tech-stack-images flex flex-col items-center md:flex-row gap-10">
          <div className="first-set flex flex-row gap-5">
            <Image src={htmlLogo} alt="HTML 5" />
            <Image src={cssLogo} alt="CSS 3" />
            <Image src={tailwindLogo} alt="Tailwind" />
          </div>
          <div className="second-set flex flex-row gap-5">
            <Image src={jsLogo} alt="JavScript" />
            <Image src={tsLogo} alt="TypeScript" />
            <Image src={reactLogo} alt="React.js" />
            <Image src={nextLogo} alt="Next.js" />
          </div>
        </div>
      </section>
    </section>
  );
}
