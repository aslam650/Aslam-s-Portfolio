
import {
  logo,
  backend,
  creator,
  mobile,
  web,
  github,
  menu,
  close,
  css,
  gearXpert,
  project2,
  project3,
  mysql,
  express,
  aws,
  mui,
  
  gsap,
  framer,
  figma,
  git,
  html,
  javascript,
  mongodb,
  nodejs,
  reactjs,
  redux,
  tailwind,
  threejs,
  firstTestimonial,
  secondTestimonial,
  thirdTestimonial,
} from '../assets'


// Import Tekisky separately
import tekisky from "../assets/company/tekisky.png";


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
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Application Security",
    icon: mobile,
  },
  {
    title: "AI/ML Developer",
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
    name: "gsap",
    icon: gsap,
  },
  {
    name: "framer",
    icon: framer,
  },

 
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "figma",
    icon: figma,
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
    name: "Express Js",
    icon: express,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "MySql",
    icon: mysql,
  },

  {
    name: "git",
    icon: git,
  },
 

];

const experiences = [
  {
    title: " Software Developer",
    company_name: "Gifty Solutions",
    icon: tekisky,
    iconBg: "#383E56",
    date: "2024 - present",
// points: [
//   "Built and deployed full-stack applications using the MERN stack — MongoDB, Express.js, React, and Node.js.",
//   "Developed interactive, responsive front-ends with React.js, integrating RESTful APIs and state management for smooth UX.",
//   "Worked on Node.js and Express.js back-ends to handle routes, authentication, and real-time data exchange.",
//   "Designed and maintained MongoDB databases for structured, scalable, and efficient data handling.",
//   "Collaborated in agile teams to plan sprints, fix bugs, and ship functional updates on time.",
//   "Enhanced performance with code optimization, modular components, and caching techniques.",
//   "Ensured responsive design and accessibility using HTML, CSS, and TailwindCSS for cross-device compatibility.",
//   "Explored Next.js and TypeScript to expand the MERN stack skillset and improve workflow efficiency.",
//   "Assisted in integrating testing workflows and basic CI/CD pipelines for smoother deployments.",
//   "Driven by curiosity — learning, building, and refining full-stack solutions one project at a time."
// ],
points: [
  "Built and deployed full-stack applications using the MERN stack — MongoDB, Express.js, React, and Node.js — delivering smooth, end-to-end functionality.",
  "Developed responsive user interfaces in React.js, ensuring performance, accessibility, and clean component design.",
  "Integrated RESTful APIs and handled data operations through Node.js and Express.js, enabling real-time interactions.",
  "Designed and structured MongoDB databases for efficient data storage and retrieval.",
  "Collaborated in agile sprints to build, test, and refine features that improved overall product quality.",
  "Optimized front-end performance through code refactoring, caching, and modular architecture.",
  "Implemented mobile responsiveness and UI consistency across devices using modern CSS techniques.",
  "Explored and applied tools like Next.js, TailwindCSS, and TypeScript to enhance workflow and scalability.",
  "Worked closely with team members to troubleshoot issues, review code, and maintain project standards.",
  "Focused on continuous learning and improving MERN stack expertise through real-world projects and experimentation."
],


  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Aslam proved me wrong.",
    name: "MD Mustaqeem",
    designation: "Ecommerce",
    company: "QuickMart",
    image: firstTestimonial,
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Aslam does.",
    name: "Abdul Raheman",
    designation: "Ecommerce Business",
    company: "justbuyz",
    image: secondTestimonial,
  },
  {
    testimonial:
      "After Aslam optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "James Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: thirdTestimonial,
  },
];

const projects = [
  {
    name: "Coffee Shop Website",
    description:
      "Coffee Shop is a modern coffee shop website offering a warm, cozy experience. Users can explore menus, order online, learn about blends, and enjoy the perfect brew crafted with passion and care.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
 
    ],
    image: "https://Aslam07.github.io/Aslam-profile/images/Coffee.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Pizza Slider",
    description:
      "Pizza Slider is an interactive website featuring a smooth slider animation that lets users explore delicious pizza varieties with vibrant visuals, sleek transitions, and an appetizing modern design.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "https://Aslam07.github.io/Aslam-profile/images/Pizza.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "Furni Shop",
    description:
      "Furni Shop is a stylish furniture website showcasing elegant, modern designs. Users can browse collections with smooth visuals, explore details, and find perfect pieces to elevate any living space.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
      // {
      //   name: "mongodb",
      //   color: "green-text-gradient",
      // },
    ],
    image: "https://Aslam07.github.io/Aslam-profile/images/Furni.png",
    source_code_link: "https://github.com/",
  },
  {
    name: "She's Corner",
    description:
      "She’s Corner is a vibrant women’s shopping website offering stylish scarves, hijabs, hairbands, bangles, and accessories. It blends fashion and elegance, helping women express their style effortlessly.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "CSS",
        color: "blue-text-gradient",
      },
      {
        name: "JavaScript",
        color: "yellow-text-gradient",
      },
    ],
    image: "https://Aslam07.github.io/Aslam-profile/images/shescorner.jpeg",
    source_code_link: "https://github.com/",
  },
  {
    name: "QSalon",
    description:
      "QSalon is a modern salon website designed for effortless booking and premium care. It showcases services, stylists, and pricing, offering a smooth, elegant experience that reflects beauty and professionalism.",
    tags: [
      {
        name: "HTML",
        color: "orange-text-gradient",
      },
      {
        name: "TailWind",
        color: "teal-text-gradient",
      },
      {
        name: "React.js",
        color: "cyan-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
    ],
    image: "https://Aslam07.github.io/Aslam-profile/images/qsalon.jpeg",
    source_code_link: "https://github.com/",
  },
  {
    name: "CYBRT",
    description:
      "CYBRT is a cutting-edge cybersecurity website focused on digital safety and awareness. It highlights advanced protection solutions, online threat prevention, and expert insights to keep users secure and informed.",
      tags: [
        {
          name: "HTML",
          color: "orange-text-gradient",
        },
        {
          name: "CSS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
          color: "yellow-text-gradient",
        },
        {
          name: "WordPress",
          color: "red-text-gradient",
        }
      ],
    image: "https://Aslam07.github.io/Aslam-profile/images/cybrt.jpeg",
    source_code_link: "https://github.com/",
  },
  
];

export { services, technologies, experiences, testimonials, projects };
