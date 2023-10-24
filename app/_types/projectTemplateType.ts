import { StaticImageData } from "next/image"

export type ProjectDataType = {
  title: string,
  paragraphs: string[],
  projectImage: StaticImageData,
  altImage: string,
  techStack: string[],
  websiteUrl: string,
}