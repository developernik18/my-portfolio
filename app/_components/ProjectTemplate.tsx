import Image, { StaticImageData } from "next/image";
import { ProjectDataType } from "../_types/projectTemplateType";
import Link from "next/link";

export default function ProjectTemplate({projectData}: {projectData: ProjectDataType}) {
  return (
    <section className="project-area container max-w-5xl mx-auto  
    bg-white p-5 sm:p-10 rounded flex flex-col gap-10"
    >
      <div 
        className="top flex flex-col lg:flex-row gap-14 items-center"
      >
        <div className="left basis-1/2 flex flex-col gap-5 
          order-2 lg:order-1"
        >
          <h3 className="text-2xl font-semibold opacity-0 animate-upFadeIn">
            {projectData.title}
          </h3>
            {projectData.paragraphs.map( paragraph => {
              return <p className="text-lg animate-upFadeIn" key={paragraph}>
                {paragraph}
              </p>
            })}
          
          <h4 className="text-xl font-semibold pt-10 opacity-0 animate-fadeIn">
            Tech used:
          </h4>
          <div className="flex flex-row flex-wrap gap-5">
            {projectData.techStack.map( techUsed => {
              return (
                <div 
                  className=" px-10 py-3 shadow rounded-sm opacity-0 animate-upFadeIn" 
                  key={techUsed}
                >
                  {techUsed}
                </div>
              )
            })}

            
          </div>
        </div>
        <div className="right basis-1/2 order-1 lg:order-2">
          <div 
            className="img-container max-h-[70vh] overflow-hidden 
            shadow-md rounded opacity-0 animate-fadeIn relative"
          >
            <Image 
              src={projectData.projectImage} 
              alt={projectData.imageAlt} 
              className="hover:translate-y-full"
            />
          </div>
        </div>
      </div>
      <div className="bottom flex justify-center items-center">
        <Link 
          href={projectData.websiteUrl} 
          className="px-10 py-3 bg-blue-600 hover:bg-blue-700 
            text-white rounded opacity-0 animate-upFadeIn"
        >
          Visit Website
        </Link>
      </div>
      
    </section>
  );
}