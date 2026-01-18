import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  express,
  mysql,
  github,
  aws,
  project2,
  project1,
  project3,
} from "../assets";
import pwioi from '../assets/company/pwioi.png';
// import project2 from '../assets/project2.png'

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full-Stack Developer",
    icon: web,
  },
  {
    title: "Data Analytics",
    icon: mobile,
  },
  {
    title: "Data Science (ML) & Open Source Contributor",
    icon: backend,
  },
  {
    title: "AI Application Developer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "express",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "mysql",
    icon: mysql,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "github",
    icon: github,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "aws",
    icon: aws,
  },
];

const experiences = [
  {
    title: "AI Application Developer and Data Scientist",
    company_name: "Tekisky",
    icon: pwioi,
    iconBg: "#383E56",
    date: "Jan 2025",
    points: [
      "Developing and maintaining web applications using MERN technologies along integration with GenAI.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.Also contribute in open source",
      "I also make AI and ML Models and implement chatbot, RAG and Langchain Frameworks."
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Riyanshi proved me wrong.",
    name: "Rahul Iyer",
    designation: "Export AutoParts",
    company: "GearXpert",
    image:
      "https://www.stglawfirm.com/wp-content/uploads/2022/11/Rahul-Iyer-Attorney-Profile.png.webp",
  },
  {
    testimonial:
      "Nice website design of portfolio.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "Whenever you want to integrate AI Chatbots in your web apps.You can contact to her.",
    name: "Kavita Nair",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "VSCode AI Powered Code Review Extension",
    description:
      "AI-Powered Code Review: Detects bugs, security issues, and performance problems in your Visual Studio Code.",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Mistral API",
        color: "green-text-gradient",
      },
      {
        name: "Extension Marketplace",
        color: "orange-text-gradient",
      },
      {
        name: "VSIX",
        color: "-text-gradient",
      },
    ],
    image: project2,
    source_code_link: "https://github.com/RiyanshiTomar/Code-Reviewer-Extension-for-VS-Code",
  },
  {
    name: "Cursor like AI",
    description:
      "An intelligent Node.js CLI tool that generates beautiful, modern, production-ready websites using local LLM (Ollama). Ask in plain English, get a complete website in seconds!",
    tags: [
      {
        name: "Javascript",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      
      {
        name: "OLLMA Setup",
        color: "green-text-gradient",
      },
      {
        name: "Mistral API",
        color: "orange-text-gradient",
      },
    ],
    image: project1,
    source_code_link: "https://github.com/RiyanshiTomar/Apna_Cursor_LLama_and_Mistral",
  },
  {
    name: "RAG Model",
    description:
      "A Retrieval-Augmented Generation (RAG) chatbot built with LangChain.js that enables intelligent conversations with your PDF documents. Supports both Google Gemini and local Ollama models for flexible deployment.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "Node.js",
        color: "green-text-gradient",
      },
      {
        name: "Express",
        color: "pink-text-gradient",
      },
    ],
    image: project3,
    source_code_link: "https://github.com/RiyanshiTomar/RAG_Context",
  },
];

export { services, technologies, experiences, testimonials, projects };
