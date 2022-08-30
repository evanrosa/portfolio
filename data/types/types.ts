export type ProjectsFrontMatter = {
  thumbnailUrl: string
  title: string
  headline: string
  description: string
  publishedDate: string
  tags: string[]
  website: string
}

export type ProjectsLayoutProps = {
  children: React.ReactNode
  frontMatter: ProjectsFrontMatter
  wordCount: number
  readingTime: string
}

export type ProjectPostProps = {
  slug: string
  siteTitle: string
  frontMatter: ProjectsFrontMatter
  markdownBody: any
  wordCount: number
  readingTime: string
}

export type ProjectPost = {
  projects?: ProjectPostProps[]
}

export interface ProjectsProps extends ProjectPost {
  title: string
  headline: string
  description: string
  image: string
}