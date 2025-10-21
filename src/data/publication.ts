export interface Publication {
  year: string;
  conference: string;
  title: string;
  authors: string;
  paperUrl?: string;
  HfUrl?: string;
  codeUrl?: string;
  bibtex?: string;
  tldr?: string;
  imageUrl?: string;
  award?: string;
}

export const publicationData: Publication[] = [
  // If you don't want to show publications, just make the array empty.
  {
    year: "2025",
    conference: "EMNLP Mains",
    title: "Investigating Pedagogical Teacher and Student LLM Agents: Genetic Adaptation Meets Retrieval Augmented Generation Across Learning Style",
    authors: "Debdeep Sanyal, Agniva Maiti, Umakanta Maharana, Dhruv Kumar, Ankur Mali, C. Lee Giles, Murari Mandal",
    paperUrl: "https://arxiv.org/abs/2505.19173",
    // codeUrl: "https://github.com/jsmith/scalable-causal-discovery",
    //bibtex: "https://arxiv.org/abs/2409.15476.bib",
    tldr: "We created a digital sandbox for an AI to practice teaching and discover what truly works for different students.",
    imageUrl:
      "/pedagogical.png",
    // award: "🏆 Best Paper Award",
    // if you have an image in public/images, you can use it like this:
    // imageUrl: "/images/publication-image.jpg"
  },
  {
    year: "2025",
    conference: "COLM",
    title: "Agents Are All You Need for LLM Unlearning",
    authors: "Debdeep Sanyal, Murari Mandal",
    paperUrl: "https://arxiv.org/abs/2502.00406",
    codeUrl: "https://github.com/respailab/agentic-llm-unlearning",
    imageUrl: "/alu_img.png",
    tldr: "We assemble a team of specialized AI agents that work together to guard a language model's output, removing unwanted information in real-time.",
  },
  {
    year: "2025",
    conference: "EMNLP Findings, EMNLP NLLP Workshop Oral",
    title: "Nine Ways to Break Copyright Law and Why Our LLM Won't: A Fair Use Aligned Generation Framework",
    authors: "Aakash Sen Sharma, Debdeep Sanyal, Priyansh Srivastava, Sundar Atreya H., Shirish Karande, Mohan Kankanhalli, Murari Mandal",
    paperUrl: "https://arxiv.org/abs/2505.23788",
    HFUrl: "https://huggingface.co/collections/respai-lab/law-lm-68c8a8577d4233e576162c4e",
    imageUrl: "/lawlm.png",
    tldr: "LAW-LM empowers LLMs to generate maximally helpful content while thoughtfully adhering to complex copyright laws.",
  },
  {
    year: "2025",
    conference: "NeurIPS BERT2S Workshop",
    title: "time2time: Causal Intervention in Hidden States to Simulate Rare Events in Time Series Foundation Models",
    authors: "Debdeep Sanyal, Aaryan Nagpal, Dhruv Kumar, Murari Mandal, Saurabh Deshpande",
    paperUrl: "https://arxiv.org/abs/2509.05801",
    codeUrl: "https://github.com/birla-ai-labs/time2time/",
    imageUrl: "/time2time.png",
    tldr: "We show how to take the essence of a past event, like a market crash, and directly implant it into a TSFM to change how it models the future.",
  },
  {
    year: "2025",
    conference: "arXiv",
    title: "OrgAccess: A Benchmark for Role Based Access Control in Organization Scale LLMs",
    authors: "Debdeep Sanyal, Umakanta Maharana, Yash Sinha, Hong Ming Tan, Shirish Karande, Mohan Kankanhalli, Murari Mandal",
    paperUrl: "https://arxiv.org/abs/2505.19165",
    HFUrl: "https://huggingface.co/datasets/respai-lab/orgaccess",
    imageUrl: "/orgaccess.png",
    tldr: "We introduce a novel, expert-crafted benchmark to test if LLMs can truly understand and respect complex organizational roles and permissions for enterprise use.",
  },
  {
    year: "2025",
    conference: "arXiv",
    title: "AntiDote: Bi-level Adversarial Training for Tamper-Resistant LLMs",
    authors: "Debdeep Sanyal, Manodeep Ray, Murari Mandal",
    paperUrl: "https://arxiv.org/abs/2509.08000",
    // HFUrl: "https://huggingface.co/datasets/respai-lab/orgaccess",
    imageUrl: "/antidote.png",
    tldr: "We make an LLM robust against malicious fine-tuning by co-evolving it in a game against an adversary model.",
  },
];
