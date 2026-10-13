export interface Experience {
  date: string;
  title: string;
  company: string;
  description?: string;
  advisor?: string;
  manager?: string;
  companyUrl?: string;
}

export const experienceData: Experience[] = [
  {
    date: "April 2026–Present",
    title: "Founding research engineer",
    company: "Birla AI Labs",
    description:
      "I build time-series foundation models, owning the training pipeline, experimentation, evaluation, and inference. I currently lead pretraining and architecture experimentation for Bharat-TSFM under the IndiaAI initiative.",
    // companyUrl: "https://deepmind.com",
  },
  // {
  //   date: "Summer 2022",
  //   title: "Research Intern",
  //   company: "Google Research",
  //   description:
  //     "Worked on improving robustness of large language models to distribution shifts",
  //   manager: "Elise Brown",
  //   companyUrl: "https://google.com",
  // },
];
