import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wen Zhan (Zion)",
  initials: "Zion",
  location: "Karlsruhe, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  about:
    "A blockchain researcher and smart contract developer with a focus on cryptocurrency.",
  summary:
    "I have a strong background in computer science and cryptography, and I am passionate about building decentralized applications and contributing to the open-source community. I am a lifelong learner, and always looking for new challenges and opportunities to grow.",
  avatarUrl: "https://avatars.githubusercontent.com/zlog-in",
  personalWebsiteUrl: "www.zlog.in",
  contact: {
    email: "im.wenzhan@gmail.com",
    tel: "+491625342038",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/zlog-in",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/im-zion",
        icon: LinkedInIcon,
      },
      {
        name: "X",
        url: "https://x.com/zlog_in",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "Karlsruhe Institute of Technology",
      degree: "Master's Degree in Computer Science",
      start: "Oct. 2018",
      end: "Oct. 2022",
    },
    {
      school: "Karlsruhe Institute of Technology",
      degree: "German Language Course: Level C1",
      start: "Oct. 2017",
      end: "Oct. 2018",
    },
    {
      school: "University of Electronic Science and Technology of China",
      degree: "Bachelor's Degree in Network Engineering",
      start: "Sep. 2013",
      end: "Jun. 2017",
    },
  ],
  work: [
    {
      company: "Orderly Network",
      link: "https://orderly.network/",
      badges: ["Remote"],
      title: "Blockchain Researcher & Smart Contract Developer",
      logo: ParabolLogo,
      start: "Nov. 2022",
      end: "Present",
      description: "Focused on the research of EVM tech stack, and the development of smart contracts for DeFi protocols.",    
    },
    {
      company: "Poly Network",
      link: "https://poly.network/",
      badges: ["Onsite", "Remote"],
      title: "Blockchain Research Intern",
      logo: ClevertechLogo,
      start: "Dez. 2020",
      end: "Dez. 2021",
      description: "Researched the cryptographica fundamentation of cryptocurrenty and the consensus meachnism of PoW and PoS familiy.",
    },
  ],
  skills: [
    "Solidity, EVM",
    "Go, Rust",
    "Hardhat, Foundry",
    "Ethersjs, Web3js",
    "OpenZeppelin, Gnosis Safe",
    "Truffle, Chai",
    "JavaScript, TypeScript",
    "React/Next.js/Remix",
    "Node.js",
  ],
  projects: [
    {
      title: "Set Safe",
      techStack: [
        "Shell",
        "Deterministic-Deployment",
        "Safe-Deployment",
        "Safe-Contracts",
      ],
      description: "A tool to permissonlessly deploy the Safe contracts on an EVM chain to enable the MultiSig wallet.",
      logo: ConsultlyLogo,
      link: {
        label: "Set Safe",
        href: "https://github.com/zlog-in/set-safe",
      },
    },
  ],
  
} as const;
