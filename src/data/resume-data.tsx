import { GitHubIcon } from "@/components/icons/GitHubIcon";
import { LinkedInIcon } from "@/components/icons/LinkedInIcon";
import { XIcon } from "@/components/icons/XIcon";

export const RESUME_DATA = {
  name: "Maitra Khatri",
  initials: "MK",
  location: "Ahmedabad, Gujarat, India",
  locationLink: "https://www.google.com/maps/place/Ahmedabad",
  role: "Software Engineer",
  about:
    "Software Engineer focused on building products with extra attention to details",
  summary:
    "As a Software Engineer, I have successfully taken multiple mini products of the organization from 0 to 1, where I have contributed from Product Design to Research to Developing them. I work mostly with TypeScript, React and TailwindCSS. I have over 1 years of experience in working remotely with people all around the world.",
  avatarUrl: "https://avatars.githubusercontent.com/u/54719132?v=4",
  peerlistProfile: "https://peerlist.io/maitrakhatri",
  contact: {
    email: "maitrakhatri@gmail.com",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/maitrakhatri",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maitrakhatri",
        icon: LinkedInIcon,
      },
      {
        name: "Twitter",
        url: "https://x.com/maitrakhatri",
        icon: XIcon,
      },
    ],
  },
  education: [
    {
      school: "SAL College of Engineering",
      degree: "Bachelor's Degree in Information Technology",
      start: "2019",
      end: "2023",
    },
  ],
  work: [
    {
      company: "Fileverse",
      link: "https://fileverse.io/",
      badges: ["Remote"],
      title: "Software Engineer",
      start: "Aug '23",
      end: "Present",
      description: [],
    },
    {
      company: "Fileverse",
      link: "https://fileverse.io/",
      badges: ["Remote"],
      title: "Software Engineer Intern",
      start: "Jan '23",
      end: "Jul '23",
      description: [
        "Designed and developed Subgraphs, decentralized APIs for blockchain data.",
        "Built an Admin Panel for Fileverse Portal, displaying user activity analytics.",
        "Developed file editing and deletion features, including frontend and smart contract integration.",
        "Conducted UI e2e testing with tools like Cypress and Synpress.",
        "Used TypeScript, Tailwind CSS, and Ethers for feature development and bug fixes.",
        "Worked with various Rich Tech Editors like Quill JS, Tiptap, and Editor JS.",
        "Integrated REST APIs on the frontend to enhance functionality.",
        "Managed decentralized databases using Gun JS.",
      ],
    },
  ],
  skills: [
    "TypeScript",
    "Subgraph",
    "React/Next.js",
    "JavaScript",
    "Gun JS",
    "Tailwind CSS",
  ],
  projects: [
    {
      title: "Maitra learns DSA",
      techStack: [
        "Learning",
        "TypeScript",
        "Vite",
        "Data Structures",
        "Algorithms",
      ],
      description: "Learning DSA by pratical usecases.",
      link: {
        label: "maitra-learns-dsa.netlify.app",
        href: "https://maitra-learns-dsa.netlify.app/",
      },
    },
    {
      title: "Pixel Visualizer",
      techStack: ["Mini Project", "React JS"],
      description:
        "Mini App to visualize how Pixels work in real life, how change in RGB codes change the color and how pixels are saved in Matrix in RGB channels",
      link: {
        label: "https://ihc20h.csb.app/",
        href: "https://ihc20h.csb.app/",
      },
    },
    {
      title: "Gozo Main Focus",
      techStack: [
        "Browser Extention",
        "React JS",
        "Live on Firefox",
        "3rd Party API",
      ],
      description:
        "Browser extension made in ReactJS replaces new tab screen with your today's Main Focus, Weather and Time.",
      link: {
        label: "https://github.com/maitrakhatri/gozo-browser-extension",
        href: "https://github.com/maitrakhatri/gozo-browser-extension",
      },
    },
    {
      title: "Gozo UI",
      techStack: ["CSS Component Library", "Docs", "HTML5", "CSS3"],
      description:
        "Light weight Component Library for everyone can use in their projects.",
      link: {
        label: "https://gozo-ui.netlify.app/",
        href: "https://gozo-ui.netlify.app/",
      },
    },
    {
      title: "Gozo Pomodoro",
      techStack: ["React JS", "Local Storage", "CRUD", "Responsive"],
      description:
        "Very simple, light weight, easy to use Pomodoro App with To-Do List",
      link: {
        label: "https://gozo-pomodoro.netlify.app/",
        href: "https://gozo-pomodoro.netlify.app/",
      },
    },
    {
      title: "Watch Gozo",
      techStack: [
        "Video Library",
        "Authentication",
        "Mock Backend",
        "Context API",
        "State Management",
        "React JS",
        "React Router",
      ],
      description: "Video Library for Superhero nerds",
      link: {
        label: "https://watchgozo.netlify.app/",
        href: "https://watchgozo.netlify.app/",
      },
    },
    {
      title: "Gozo Stores",
      techStack: [
        "E-commerce Store",
        "Filtering",
        "Sorting",
        "Authentication",
        "Mock Backend",
        "React JS",
        "React Router",
      ],
      description:
        "E-commerce platform for Superhero fans for Premium Movie Posters.",
      link: {
        label: "https://gozo-stores.netlify.app/",
        href: "https://gozo-stores.netlify.app/",
      },
    },
  ],
} as const;
