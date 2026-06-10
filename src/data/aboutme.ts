export interface AboutMe {
  name: string;
  title: string;
  institution: string;
  description: string;
  email: string;
  imageUrl?: string;
  blogUrl?: string;
  cvUrl?: string;
  googleScholarUrl?: string;
  twitterUsername?: string;
  githubUsername?: string;
  linkedinUsername?: string;
  funDescription?: string; // Gets placed in the left sidebar
  secretDescription?: string; // Gets placed in the bottom
  altName?: string;
  institutionUrl?: string;
}

export const aboutMe: AboutMe = {
  name: "Debdeep Sanyal",
  title: "Research Engineer",
  institution: "Birla AI Labs",
  // Note that links work in the description
  description:
    "<p class='mb-4'>I'm a final year undergrad student working with and learning more about Large Language Models. I'm still exploring the vast array of topics, and I try to get my hands dirty with whatever I find interesting (hence my research profile consists of papers that span through quite a few topics.)</p><p class='mb-4'>I like reasoning, but not the kind that aims at making LLMs score slightly higher on a benchmark; a more general kind, a system that can be used by my mother with the same ease as I do. I am very drawn towards mechanistic interpretability, I like asking <em>why</em> and <em>how</em> when I land on some result or finding which I wasn't expecting, and I love reading about how people look up such answers. I have also been studying reinforcement learning in fair depth recently.</p><p>I am currently a research associate intern at the Birla AI Labs, where we are building India's first Time Series Foundation Model, and I contribute to the novelties of the model and the training pipeline. I work with the <a href='https://respailab.github.io/' target='_blank' rel='noopener noreferrer'>RespAI Lab</a> where I get to collaborate with some amazing people on my research.</p><p>Always looking for more!</p>",
  email: "research@debdeepsanyal.com",
  imageUrl:
    "/website_space.jpg",
  googleScholarUrl: "https://scholar.google.com/citations?user=KfH9xM8AAAAJ&hl=en",
  githubUsername: "debdeepsanyal",
  linkedinUsername: "debdeep-sanyal-18264a211",
  twitterUsername: "debdeeplikesai",
  // blogUrl: "https://",
  cvUrl: "https://magenta-clementina-40.tiiny.site",
  institutionUrl: "https://kiit.ac.in/",
  // altName: "",
  // secretDescription: "I like dogs.",
};
