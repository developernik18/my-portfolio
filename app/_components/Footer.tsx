import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <section 
      className=" bg-gray-900 text-white 
        py-14 px-5 md:px-10 flex flex-col gap-5
        sm:flex-row justify-between items-center"
    >
      <div className="left">
        Copyright © 2023. All rights reserved.
      </div>
      <div className="for-more-info flex flex-row gap-5">
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
  );
}