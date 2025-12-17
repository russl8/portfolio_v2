export type SectionName = "about" | "experience" | "projects"

export type Experience = {
    startMonth: string,
    startYear: number,
    endMonth:string,
    endYear:number,
    position: string,
    company:string,
    description:string,
    technologies: Array<string>,
    websiteUrl: string,
    logoPath: string,
}

export type Project = {
    name: string,
    description: string,
    websiteUrl:string,
    technologies: Array<String>
}