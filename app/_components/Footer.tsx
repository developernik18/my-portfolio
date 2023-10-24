import { FaLinkedinIn, FaGithub } from "react-icons/fa6";

export default function Footer() {
  return (
    <section className=" bg-gray-900 py-14 px-5 md:px-10 
    flex flex-row justify-between text-white">
      <div className="left">
        Copyright © 2023. All rights reserved.
      </div>
      <div className="for-more-info flex flex-row gap-5">
        <FaLinkedinIn />
        <FaGithub />
      </div>
    </section>
  );
}