import { StaticImageData } from "next/image"

export type ProjectDataType = {
  title: string,
  paragraphs: string[],
  projectImage: StaticImageData,
  imageAlt: string,
  techStack: string[],
  websiteUrl: string,
}