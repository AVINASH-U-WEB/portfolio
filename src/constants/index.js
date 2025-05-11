import {
  frontend,
  backend,
  ux,
  prototyping,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  git,
  figma,
  docker,
  postgresql,
  rubyrails,
  graphql,
  komikult,
  leaderboard,
  math,
  movie,
  nyeusi,
  space,
  // Strydo,
  dcc,
  kelhel,
  microverse,
} from '../assets';
import Strydo from '../assets/company/Strydo.png';
import Heptre from '../assets/company/Heptre.png';
import alt from '../assets/company/alt.png';
import vvnkm from '../assets/company/vvnkm.png'
import barath from '../assets/company/barath.png'
import sda from '../assets/company/sda.png'
import Velammal from '../assets/company/Velammal.png'


export const navLinks = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'projects',
    title: 'Projects',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services = [
  {
    title: 'Frontend Developer',
    icon: frontend,
  },
  {
    title: 'Backend Developer',
    icon: backend,
  },
  {
    title: 'UI/UX Design',
    icon: ux,
  },
  {
    title: 'Software Prototyping',
    icon: prototyping,
  },
];

const technologies = [
  {
    name: 'HTML 5',
    icon: html,
  },
  {
    name: 'CSS 3',
    icon: css,
  },
  {
    name: 'JavaScript',
    icon: javascript,
  },
  {
    name: 'TypeScript',
    icon: typescript,
  },
  {
    name: 'React JS',
    icon: reactjs,
  },
  {
    name: 'Redux Toolkit',
    icon: redux,
  },
  {
    name: 'Tailwind CSS',
    icon: tailwind,
  },
  {
    name: 'Node JS',
    icon: nodejs,
  },
  {
    name: 'Rails',
    icon: rubyrails,
  },
  {
    name: 'graphql',
    icon: graphql,
  },
  {
    name: 'postgresql',
    icon: postgresql,
  },
  {
    name: 'git',
    icon: git,
  },
  {
    name: 'figma',
    icon: figma,
  },
  {
    name: 'docker',
    icon: docker,
  },
];
export const internships = [
  {
    id: 1,
    title: 'Full Stack Developer Intern',
    company_name: 'Strydo',
    icon: Strydo,
    iconBg: '#333',
    date: 'June 1 2024 - JUN 31 2024',
  },
  {
    id: 2,
    title:'FullStack Development With Design',
    company_name: 'ALTRUISTY',
    icon: alt,
    iconBg: '#333',
    date: 'Dem 2024 – Feb 2025',
  },
  {
    id: 3,
    title:'FullStack Development ERP Software',
    company_name: 'HEPTRE TECHWORKS ',
    icon: Heptre,
    iconBg: '#333',
    date: 'Mar 2025- May ',
  },
  {
    id: 4,
    title:'FullStack Development  Software',
    company_name: 'DEQCODEAI - Quantum Computing Startup  ',
    icon: Strydo,
    iconBg: '#333',
    date: 'Mar 2025-Apr ',
  },
  // Add more internship experiences
];

export const education = [
  {
    id: 1,
    title: 'B.Tech [ Information Technology ]',
    company_name: 'Velammal Engineering College Chennai',
    icon: Velammal,
    iconBg: '#333',
    date: '2022-2026',
  },
  {
    id: 2,
    title: '11TH TO 12TH',
    company_name: 'Seventh-Day School Vellore',
    icon: sda,
    iconBg: '#333',
    date: '2020-2022',
  },{
    id: 3,
    title: '6TH TO 10TH',
    company_name: 'Bharat School Vellore',
    icon: barath,
    iconBg: '#333',
    date: '2016-2020',
  },
  {
    id: 4,
    title: 'LKG TO 5TH',
    company_name: 'VVNKM Vellore',
    icon: vvnkm,
    iconBg: '#333',
    date: ' 2010-2015',
  },
  // Add more education experiences
];

// const experiences = [
//   {
//     title: 'Front-End Developer',
//     company_name: 'Cover Hunt',
//     icon: Strydo,
//     iconBg: '#333333',
//     date: 'Aug 2021 - Feb 2022',
//   },
//   {
//     title: 'Mentor (Volunteer)',
//     company_name: 'Microverse',
//     icon: microverse,
//     iconBg: '#333333',
//     date: 'Mar 2022 - May 2022',
//   },
//   {
//     title: 'Junior Software Engineer',
//     company_name: 'Kelhel',
//     icon: kelhel,
//     iconBg: '#333333',
//     date: 'May 2022 - Oct 2022',
//   },
//   {
//     title: 'Full Stack Developer',
//     company_name: 'Diversity Cyber Council',
//     icon: dcc,
//     iconBg: '#333333',
//     date: 'Sep 2022 - Present',
//   },
// ];

const projects = [
  {
    id: 'project-1',
    name: 'Watch Website',
    description: 'The website utilizes React for dynamic UI components and Framer Motion for advanced animations.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: komikult,
    repo: 'https://github.com/AVINASH-U-WEB/watch-',
    demo: 'https://github.com/AVINASH-U-WEB/watch-',
  },
  {
    id: 'project-2',
    name: 'Product-List',
    description:
      'Implement Redux product list with React and style using Tailwind.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: leaderboard,
    repo: 'https://github.com/AVINASH-U-WEB/redux-product',
    demo: 'https://redux-product-gold.vercel.app/',
  },
  {
    id: 'project-3',
    name: 'AR-VR Game',
    description: 'AR/VR Game features a sleek, immersive design that highlights interactive 3D experiences and modern web aesthetics.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: math,
    repo: 'https://github.com/AVINASH-U-WEB/AR-VR-Game',
    demo: 'https://ar-vr-game.vercel.app/',
  },
  {
    id: 'project-4',
    name: 'Spotify-clone',
    description: `The Spotify clone features a sleek and user-friendly interface for music lovers.`,
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: movie,
    repo: 'https://github.com/AVINASH-U-WEB/Spotify-clone',
    demo: 'https://spotify-clone-red-nine.vercel.app/',
  },
  {
    id: 'project-5',
    name: '3d model in car',
    description:
      'The 3D model of the car showcases a detailed exterior with realistic textures and reflections.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: nyeusi,
    repo: 'https://github.com/AVINASH-U-WEB/3d-car',
    demo: 'https://3d-car-peach.vercel.app/',
  },
];

export { services, technologies,  projects };
