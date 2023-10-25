import Image from "next/image";
import AboutMeImg from '../_assets/About_me_img.png';

export default function AboutSection() {
  return (
    <section id="about" className="bg-white min-h-[90vh] flex flex-row items-center">
        <div className="main-area container max-w-5xl mx-auto flex flex-row justify-between">
          <div className="left basis-1/2">
            <Image src={AboutMeImg} alt={"decorative img"} />
          </div>
          <div className="right basis-1/2 flex flex-col gap-5 justify-center">
            <h2 className="text-lg text-blue-600 font-semibold">
              About me
            </h2>
            <h3 className="text-3xl font-semibold">
              A Lead Web Developer with multiple years of development experience.
            </h3>
            <p className="text-lg">
              I have worked for 3+ years as a lead web developer in 2 companies. I excel in debugging and working as a team to reach desired result. Afterward, Transitioning to freelancing, I've embraced UI design using Figma, enhancing my ability to deliver well-rounded solutions that integrate technical excellence with compelling design.
            </p>
          </div>
        </div>
    </section>
  )
}