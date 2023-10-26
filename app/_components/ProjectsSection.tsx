import techTalkHub from '../_assets/_projects/tech-talk-hub-homepage.png';
import ProjectTemplate from './ProjectTemplate';

const projectsInfo = [{
  title: "Tech Talk Hub",
  paragraphs: [
    "Tech Talk Hub is a project created to talk about latest upcoming technology and allow visitors to remain updated with current advancement.",
    "This project also comes with separate admin panel to allow admin to post new blogs and update any information related to old blogs."
  ],
  techStack: ["Next.js", "React.js", "Tailwind CSS", "Sanity"],
  projectImage: techTalkHub,
  imageAlt: "Tech Talk Hub Project Image",
  websiteUrl: "https://tech-talk-hub-e6x8.vercel.app/"
}]


export default function ProjectsSection() {
  return (
    <section 
      id='projects' 
      className="bg-gray-100 min-h-[90vh] py-24 
      flex flex-col gap-10 px-5 lg:px-10"
    >
      <div className="container max-w-5xl mx-auto 
        flex flex-col gap-5 px-0 sm:px-5 md:px-10 lg:px-0"
      >
        <h2 className="text-lg text-blue-600 font-semibold">
          Portfolio
        </h2>
        <p className="text-3xl font-semibold">
          Few of my personal projects to showcase my work.
        </p>
      </div>
      <div className="px-0 sm:px-5 md:px-10">
        {projectsInfo.map(projectData => {
          return <ProjectTemplate 
            projectData={projectData}
            key={projectData.title}
          />
        })}
      </div>
      
      


    </section>
  )
}