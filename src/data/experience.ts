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
    date: "Summer 2025",
    title: "Research Associate Intern",
    company: "Birla AI Labs",
    description:
      "Developing India's first Time Series Foundation Model. I take care of the novelties to be incorporated in the model and the training pipeline.",
    advisor: "Saurabh Deshpande",
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
