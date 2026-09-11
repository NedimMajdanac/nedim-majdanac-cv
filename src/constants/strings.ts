import careFlow1 from '../assets/CareFlow/CareFlow1.png'
import careFlow2 from '../assets/CareFlow/CareFlow2.png'
import careFlow3 from '../assets/CareFlow/CareFlow3.png'
import codeHive1 from '../assets/CodeHive/CodeHive1.png'
import codeHive2 from '../assets/CodeHive/CodeHive2.png'
import codeHive3 from '../assets/CodeHive/CodeHive3.png'
import codeHive4 from '../assets/CodeHive/CodeHive4.png'
import codeHive5 from '../assets/CodeHive/CodeHive5.png'
import mountain1 from '../assets/MountainApp/mountain1.jpeg'
import mountain2 from '../assets/MountainApp/mountain2.jpeg'
import mountain3 from '../assets/MountainApp/mountain3.jpeg'
import mountain4 from '../assets/MountainApp/mountain4.jpeg'
import mountain5 from '../assets/MountainApp/mountain5.jpeg'
import mountain6 from '../assets/MountainApp/mountain6.jpeg'
import mountain7 from '../assets/MountainApp/mountain7.jpeg'
import orderFlow1 from '../assets/OrderFlow/OrderFlow1.png'
import orderFlow2 from '../assets/OrderFlow/OrderFlow2.png'
import orderFlow3 from '../assets/OrderFlow/OrderFlow3.png'
import orderFlow4 from '../assets/OrderFlow/OrderFlow4.png'
import orderFlow5 from '../assets/OrderFlow/OrderFlow5.png'
import orderFlow6 from '../assets/OrderFlow/OrderFlow6.png'
import orderFlow7 from '../assets/OrderFlow/OrderFlow7.png'
import vaktija2 from '../assets/Vaktija/vaktija2.jpeg'
import vaktija3 from '../assets/Vaktija/vaktija3.jpeg'
import vaktija4 from '../assets/Vaktija/vaktrija4.jpeg'
import vaktija5 from '../assets/Vaktija/vaktija5.jpeg'
import vaktija6 from '../assets/Vaktija/vaktija6.jpeg'
import vaktija7 from '../assets/Vaktija/vaktija7.jpeg'
import vaktija8 from '../assets/Vaktija/vaktija8.jpeg'
import vaktija9 from '../assets/Vaktija/vaktija9.jpeg'
import vaktija10 from '../assets/Vaktija/vaktija10.jpeg'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const siteStrings = {
  name: 'Nedim Majdanac',
  role: 'Full-stack developer',
  heroTag: 'Available for product and engineering work',
  heroTitle: 'I build reliable products with clean systems and thoughtful UX.',
  heroLead:
    'I am a developer focused on creating stable, user-friendly solutions across frontend, backend, and distributed systems. I enjoy turning business needs into software that is practical, scalable, and easy to maintain.',
  navCta: 'Resume',
  location: 'Based in Bosnia and Herzegovina',
  availability: 'Open to freelance, product, and software collaborations',
  currentFocus: 'Currently working across modern web apps, APIs, and SaaS-style product flows.',
  highlightLabel: 'Core stack',
  technologies: ['.NET / ASP.NET', 'React TS / JS', 'React Native', 'PostgreSQL / SSMS', 'AWS', 'Docker'],
}

export const educationEntries = [
  { school: 'MSTS', period: '2019 - 2023', details: 'Elektrotehnicar IT' },
  { school: 'UNMO FIT', period: '2023 - 2027', details: 'Faculty of Information Technologies' },
]

export const languageEntries = [
  { name: 'Bosnian', level: 'Native' },
  { name: 'English', level: 'Professional' },
  { name: 'German', level: 'Semi-proficient' },
]

export const projectCards = [
  {
    name: 'Care Flow',
    type: 'Healthcare platform',
    status: 'Case workflow system',
    description:
      'Workflow and care coordination platform designed to streamline processes and improve visibility across operational tasks.',
    stack: ['React', 'ASP.NET', 'SQL'],
    images: [careFlow1, careFlow2, careFlow3],
    liveUrl: '#',
  },
  {
    name: 'Order Flow',
    type: 'Operations dashboard',
    status: 'Order management tool',
    description:
      'Internal system for handling orders, tracking status, and reducing manual coordination between teams.',
    stack: ['React', 'REST API', 'PostgreSQL'],
    images: [orderFlow1, orderFlow2, orderFlow3, orderFlow4, orderFlow5, orderFlow6, orderFlow7],
    liveUrl: '#',
  },
  {
    name: 'Court Pulse',
    type: 'Legal data tool',
    status: 'Monitoring and reporting platform',
    description:
      'A case insight dashboard for monitoring legal data points and surfacing key operational trends.',
    stack: ['React', 'Node.js', 'SQL'],
    liveUrl: '#',
  },
  {
    name: 'Code Hive',
    type: 'Developer workspace',
    status: 'Team collaboration app',
    description:
      'Collaborative coding and knowledge-sharing platform focused on smoother team workflows and project tracking.',
    stack: ['React', 'Docker', 'AWS'],
    images: [codeHive1, codeHive2, codeHive3, codeHive4, codeHive5],
    liveUrl: '#',
  },
  {
    name: 'Mountain App',
    type: 'Travel & activity app',
    status: 'Outdoor discovery app',
    description:
      'Mobile-friendly product concept for exploring hiking destinations, route details, and trip planning.',
    stack: ['React Native', 'API', 'Geolocation'],
    images: [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7],
    liveUrl: '#',
  },
  {
    name: 'Finance App',
    type: 'Personal finance dashboard',
    status: 'Expense and planning tool',
    description:
      'Personal finance product idea for monitoring spending, planning budgets, and keeping track of financial goals.',
    stack: ['React', 'GraphQL', 'Redis'],
    liveUrl: '#',
  },
  {
    name: 'Vaktija',
    type: 'Prayer times app',
    status: 'Faith and daily planning app',
    description:
      'A focused mobile experience for checking daily prayer times and keeping a calm, dependable rhythm throughout the day.',
    stack: ['React Native', 'Mobile UI', 'API'],
    images: [vaktija2, vaktija3, vaktija4, vaktija5, vaktija6, vaktija7, vaktija8, vaktija9, vaktija10],
    liveUrl: '#',
  },
]

export const skillGroups = [
  {
    label: 'Backend & Architecture',
    skills: ['.NET / ASP.NET', 'API / REST / gRPC / GraphQL', 'PostgreSQL / SSMS', 'SQL'],
  },
  {
    label: 'Frontend & Mobile',
    skills: ['React TS / JS', 'React Native', 'AWS', 'Docker'],
  },
  {
    label: 'DevOps & Delivery',
    skills: ['CI / CD', 'Redis', 'Rabbit MQ', 'Cloud deployment'],
  },
]

export const contactLinks = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com', icon: 'github' },
  { label: 'Email', href: 'mailto:nedimmajdanac13@gmail.com', icon: 'email' },
]
