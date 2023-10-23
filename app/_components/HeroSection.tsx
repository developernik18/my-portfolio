import {FaGithub, FaLinkedinIn} from 'react-icons/fa6'
import profilePic from '../_assets/profile-pic.png';
import Image from 'next/image';

// image assets
import htmlLogo from '../_assets/_tech-logos/HTML 5.png';
import cssLogo from '../_assets/_tech-logos/CSS 3.png';
import tailwindLogo from '../_assets/_tech-logos/Tailwind.png';

import jsLogo from '../_assets/_tech-logos/JavaScript.png';
import tsLogo from '../_assets/_tech-logos/TypeScript.png';
import reactLogo from '../_assets/_tech-logos/React.png';
import nextLogo from '../_assets/_tech-logos/Next.png';


export default function HeroSection() {
  return (
    <section className="bg-gray-100 min-h-[90vh]">
      <section className="top container max-w-5xl mx-auto flex flex-row justify-between">
        <section className="left max-w-md flex flex-col gap-6 py-10 min-h-[60vh] justify-center">
          <h1 className=" text-5xl font-bold">
            Front-End Focused Web Developer
          </h1>
          <p>
            Hi, I’m Nikhil Kumar. 
            A Front-end Web Developer with 5+ years of experience.
          </p>
          <div className="for-more-info flex flex-row gap-5">
            <FaLinkedinIn />
            <FaGithub />
          </div>
        </section>
        <section className="right max-w-md flex flex-col gap-6 py-10 min-h-[60vh] justify-center">
          <Image src={profilePic} alt={"Profile picture"} />
        </section>
      </section>
      <section className="bottom container max-w-5xl mx-auto flex flex-row gap-10 items-center min-h-[20vh]">
        <h2>
          Tech Stack
        </h2>
        <div className="tech-stack-images flex flex-row gap-10">
          <div className="first-set flex flex-row gap-5">
            <Image src={htmlLogo} alt='HTML 5' />
            <Image src={cssLogo} alt='CSS 3' />
            <Image src={tailwindLogo} alt='Tailwind' />

          </div>
          <div className="second-set flex flex-row gap-5">
            <Image src={jsLogo} alt='JavScript' />
            <Image src={tsLogo} alt='TypeScript' />
            <Image src={reactLogo} alt='React.js' />
            <Image src={nextLogo} alt='Next.js' />
          </div>
        </div>
      </section>
    </section>
  )
}