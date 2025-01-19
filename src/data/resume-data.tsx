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
  OrderlyLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Wen Zhan (Zion)",
  initials: "Zion",
  location: "Karlsruhe, Germany, CET",
  locationLink: "https://www.google.com/maps/place/Karlsruhe",
  about:
    "In Crypto We Trust.",
  summary:
     "I'm a blockchain researcher and smart contract developer for Solana and EVM chains. I have a strong background in computer science and cryptography, and I believe in the future of decentralized finance. BTC HODL!",
  avatarUrl: "https://avatars.githubusercontent.com/zlog-in",
  personalWebsiteUrl: "https://www.zlog.in/",
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
      }
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
      badges: ["Remote", "Onsite"],
      title: "Blockchain Researcher & Smart Contract Developer",
      logo: OrderlyLogo,
      start: "Nov. 2022",
      end: "Present",
      description: "Research on blockchain tech stack, and develop smart contracts for DeFi protocols.",    
    },
    {
      company: "Poly Network",
      link: "https://poly.network/",
      badges: ["Onsite", "Remote"],
      title: "Blockchain Research Intern",
      start: "Dez. 2020",
      end: "Dez. 2021",
      description: "Researched the cryptographic fundamentation of cryptocurrenty and the consensus meachnism of PoW and PoS familiy.",
    },
  ],
  skills: [
    "EVM Stack, Solana Stack",
    "Solidity, Rust, JS/TS",
    "Anchor, Hardhat, Foundry",
    "Web3js, Ethersjs",
    "Squads, OpenZeppelin, Gnosis Safe",
    "Truffle, Chai",
    "JavaScript, TypeScript",
    "Node.js",
  ],
  projects: [
    {
      title: "ORDER Token",
      techStack: [
        "Solidity + Rust",
        "Hardhat + Anchor",
        "Layerzero OFT Protocol",
      ],
      description: "The ORDER token in native ERC20 on Ethereum and its OFT version on Solana and EVM chains (Arbtirum, Optimism, Base and Orderly).",
      logo: ConsultlyLogo,
      link: {
        label: "ORDER Token",
        href: "https://github.com/OrderlyNetwork/oft-token",
      },
    },
    {
      title: "Solana Vault",
      techStack: [
        "Rust",
        "Anchor",
        "Solana",
        "Solana/Web3js",
        "Layerzero OFT Protocol",
      ],
      description: "A vault program to guard the user's assets on Solana chain without custodian and connected with Orderly chain through Layerzero Endpoint program.",
      logo: ConsultlyLogo,
      link: {
        label: "Solana Vault",
        href: "https://github.com/OrderlyNetwork/solana-vault",
      },
    },
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
