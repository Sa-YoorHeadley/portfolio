export type Website = {
  portfolio: string;
  resume: string;
  github: string;
  linkedIn: string;
};

export type Skill = {
  name: string;
  icon: string;
};

export type StackItem = Skill;

export type Project = {
  title: string;
  description: string;
  stack: StackItem[];
  liveSite?: string;
  repository: string;
  preview: string;
  courseProject?: boolean;
};

export type PersonalInfo = {
  name: string;
  address: string;
  websites: Website;
  programmingLanguagesFrameworks: {
    frontend: Skill[];
    backend: Skill[];
    database: Skill[];
    other: Skill[];
  };
  toolsAndOtherSkills: {
    developmentAndDesignTools: Skill[];
    programmingSkills: Skill[];
    itSkills: Skill[];
  };
  majorProjects: Project[];
  minorProjects: Project[];
  profile: string;
};
