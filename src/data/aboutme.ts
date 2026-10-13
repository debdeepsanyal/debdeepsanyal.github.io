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
  title: "Founding research engineer",
  institution: "Birla AI Labs",
  // Note that links work in the description
  description:
    "<p class='mb-4'>Hello. I like computers (adult fascination, really) and I also happen to have studied computer science for my bachelors, which is great. I'm still figuring out my interest niche, but I have noticed that I'm always a bit more inclined towards the fundamentals of things, be it computer systems or neural networks. </p><p class='mb-4'> My research spectrum has been broad and not in a bragging way. When I had started out, I had no reading taste and just read about anything which came up. If something seemed pretty off about some work, I tried fixing it. That's really how I got my initial papers (this story probably sounds silly and maybe I could put something more motivational, but it reads human. And true.) I like reading, and lately working, on works which questions core concepts, breaks assumption walls, and tries to approach things from first principles. </p><p class='mb-4'> I enjoy building foundation models at my work, working with large systems enthuse me. I've also learnt that training models is more of an intuition and observation art which I thoroughly enjoy. I am looking for a PhD, among all the recent speculations of the worth of doing a PhD. I'd still do it for the fun of it actually. </p><p class='mb-4'> This entire text is composed of human generated tokens and the stochasticity is intentional, for beyond computers and maths, I am a whole human.</p>",
  email: "research@debdeepsanyal.com",
  imageUrl:
    "/icml_dp.jpeg",
  googleScholarUrl: "https://scholar.google.com/citations?user=KfH9xM8AAAAJ&hl=en",
  githubUsername: "debdeepsanyal",
  linkedinUsername: "debdeep-sanyal-18264a211",
  twitterUsername: "debdeeplikesai",
  // blogUrl: "https://",
  cvUrl: "/resume.pdf",
  // altName: "",
  // secretDescription: "I like dogs.",
};
