import careFlow from '../assets/CareFlow/careflow.png'
import careFlow1 from '../assets/CareFlow/Careflow1.png'
import careFlow2 from '../assets/CareFlow/careflow2.png'
import careFlow3 from '../assets/CareFlow/careflow3.png'
import careFlow5 from '../assets/CareFlow/careflow5.png'
import careFlow6 from '../assets/CareFlow/careflow6.png'
import careFlow7 from '../assets/CareFlow/careflow7.png'
import careFlow8 from '../assets/CareFlow/careflow8.png'
import careFlow9 from '../assets/CareFlow/careflow9.png'
import careFlow10 from '../assets/CareFlow/careflow10.png'
import careFlow13 from '../assets/CareFlow/careflow13.png'
import careFlow14 from '../assets/CareFlow/careflow14.png'
import careFlow15 from '../assets/CareFlow/careflow15.png'
import careFlow16 from '../assets/CareFlow/careflow16.png'
import codeHive1 from '../assets/CodeHive/CodeHive1.png'
import codeHive2 from '../assets/CodeHive/CodeHive2.png'
import codeHive3 from '../assets/CodeHive/CodeHive3.png'
import codeHive4 from '../assets/CodeHive/CodeHive4.png'
import codeHive5 from '../assets/CodeHive/CodeHive5.png'
import fintrack1 from '../assets/fintrack/fintrack1.png'
import fintrack2 from '../assets/fintrack/fintrack2.png'
import fintrack3 from '../assets/fintrack/fintrack3.png'
import fintrack4 from '../assets/fintrack/fintrack4.png'
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
import rentflow1 from '../assets/rentflow/rentflow1.png'
import rentflow2 from '../assets/rentflow/Renflow2.png'
import rentflow3 from '../assets/rentflow/rentflow3.png'
import rentflow4 from '../assets/rentflow/rentflow4.png'
import rentflow5 from '../assets/rentflow/rentflow5.png'

export const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Projects', href: '#projects' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export const projectPageStrings = {
  eyebrow: '03 // Projects',
  title: 'A closer look at selected work.',
  intro: 'Explore the products, platforms, and experiments behind the work. Select any project to see its focus, stack, and interface screens.',
  details: 'View details',
  overview: 'Project overview',
  implementation: 'Implementation focus',
  close: 'Close project details',
}

export const siteStrings = {
  name: 'Nedim Majdanac',
  role: 'Full-stack developer',
  themeToggle: {
    dark: 'Dark mode',
    light: 'Light mode',
  },
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
      'CareFlow OS is an enterprise multi-tenant SaaS platform for managing polyclinic chains — real-time scheduling, event-sourced medical records, e-prescriptions with safety checks, lab workflows, and insurance billing, built on ASP.NET Core 9 (Clean Architecture, CQRS, Redis, RabbitMQ) with a React + TypeScript frontend',
    details: 'Designed around dependable clinical workflows, role-aware access, and a clear operational view for teams managing care across multiple locations.',
    stack: ['React TS', 'ASP.NET', 'SQL', 'Redis', "RabbitMQ"],
    images: [careFlow, careFlow1, careFlow2, careFlow3, careFlow5, careFlow6, careFlow7, careFlow8, careFlow9, careFlow10, careFlow13, careFlow14, careFlow15, careFlow16],
    liveUrl: '#',
  },
  {
    name: 'Order Flow',
    type: 'Operations dashboard',
    status: 'Order management tool',
    description:
      'B2B order management API built with ASP.NET Core 8, CQRS/MediatR, and Clean Architecture. Features a multi-role order workflow, JWT auth, PDF generation, Redis caching, and event-driven notifications.',
    details: 'The platform connects order intake, fulfillment, document generation, and notifications into a structured workflow with clear ownership at every step.',
    stack: ['ASP.NET Core 8', 'PostgreSQL + Entity Framework Core', 'MediatR', 'React 18 + TypeScript', 'Redis', 'QuestPDF', 'JWT Bearer + refresh tokens', 'xUnit, NSubstitute, FluentAssertions', 'Tailwind CSS', 'Axios'],
    images: [orderFlow1, orderFlow2, orderFlow3, orderFlow4, orderFlow5, orderFlow6, orderFlow7],
    liveUrl: '#',
  },
  {
  name: 'RentFlow',
  type: 'Full-Stack Web Application',
  status: 'In Development',
  description:
    'A real estate rental and property management platform that connects property owners with people looking to rent or purchase properties. Users can list properties, explore available offers, submit rental or purchase requests, and manage their property-related activities through a centralized dashboard.',
  details:
    'Designed to simplify real estate transactions by providing property listing management, advanced search and filtering, rental and purchase request handling, user profile management, and automated PDF rental contract generation. The platform also includes payment tracking with multi-currency support, exchange rate management, and refund handling.',
  stack: [
    'C#',
    '.NET 10',
    'ASP.NET Core Web API',
    'Entity Framework Core',
    'SQL Server',
    'Angular',
    'TypeScript',
    'REST API',
    'Git',
    'GitHub'
    ],
  images: [rentflow1,rentflow2,rentflow3,rentflow4,rentflow5],
  liveUrl: '#',
},
  {
  name: 'CodeHive',
  type: 'Full-Stack Web Application',
  status: 'In Development',
  description:
    'A real-time project management and team collaboration platform built with .NET 8 and React 19. Combines Kanban boards, sprint planning, threaded comments, file attachments, and live notifications into one tool — inspired by Jira and Linear.',
  details:
    'CodeHive is a full-stack developer collaboration platform designed to replace the fragmented workflow of juggling multiple tools. The backend follows Clean Architecture with strict layer separation (Domain, Application, Infrastructure, API), where every operation is a CQRS Command or Query dispatched through MediatR with automatic FluentValidation pipeline execution before any handler runs. Authentication uses short-lived JWT access tokens with BCrypt-hashed refresh token rotation. Real-time features are powered by SignalR — the Kanban board syncs drag-and-drop moves across all connected clients instantly, and a dedicated notification hub pushes in-app alerts without polling. The database layer uses EF Core with PostgreSQL, including composite keys, self-referencing relations, split queries for multi-collection navigation, and raw projections to avoid over-fetching. Sprints have a full lifecycle (planned → active → completed) with story point tracking and QuestPDF-generated PDF reports. The frontend is structured with Feature-Sliced Design — each domain feature owns its API calls, hooks, and components. Axios handles all HTTP communication with a queued 401 interceptor that silently refreshes expired access tokens and retries failed requests without the user noticing. The Kanban board uses @dnd-kit with optimistic UI updates so moves feel instant regardless of network latency. Theming is built on Tailwind CSS v4 CSS variables, giving the app a full dark/light toggle persisted across sessions.',
  stack: [
    // Backend
    '.NET 8',
    'ASP.NET Core',
    'C#',
    'Clean Architecture',
    'CQRS',
    'MediatR',
    'Entity Framework Core',
    'PostgreSQL',
    'SignalR',
    'JWT Authentication',
    'FluentValidation',
    'BCrypt',
    'QuestPDF',
    'ImageSharp',
    'Serilog',
    // Frontend
    'React 19',
    'TypeScript',
    'Vite',
    'Tailwind CSS v4',
    'React Router v7',
    'Axios',
    '@dnd-kit',
    '@microsoft/signalr',
    'Feature-Sliced Design',
  ],
  images: [codeHive1, codeHive2, codeHive3, codeHive4, codeHive5],
  liveUrl: '#',
},
  {
    name: 'Mountain App',
    type: 'Travel & activity app',
    status: 'Outdoor discovery app',
    description:
      'Mobile-friendly product concept for exploring hiking destinations, route details, and trip planning.',
    details: 'A mobile-first exploration flow that balances route discovery, practical trip information, and a calm outdoor browsing experience.',
    stack: ['React Native', 'API', 'Geolocation'],
    images: [mountain1, mountain2, mountain3, mountain4, mountain5, mountain6, mountain7],
    liveUrl: '#',
  },
  {
    name: 'FinTrack',
    type: 'Personal finance dashboard',
    status: 'Expense and planning tool',
    description:
      'Personal finance product idea for monitoring spending, planning budgets, and keeping track of financial goals.',
    details: 'The concept brings spending patterns, budgeting decisions, and longer-term goals into one straightforward personal dashboard.',
    stack: ['React', 'GraphQL', 'Redis'],
    images: [fintrack1, fintrack2, fintrack3, fintrack4],
    liveUrl: '#',
  },
  {
    name: 'Vaktija',
    type: 'Prayer times app',
    status: 'Faith and daily planning app',
    description:
      'A focused mobile experience for checking daily prayer times and keeping a calm, dependable rhythm throughout the day.',
    details: 'A quiet daily utility designed to make prayer times easy to check at a glance while keeping the experience clear and respectful.',
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
  { label: 'LinkedIn', href: 'https://ba.linkedin.com/in/nedim-majdanac-22418525a', icon: 'linkedin' },
  { label: 'GitHub', href: 'https://github.com/NedimMajdanac', icon: 'github' },
  { label: 'Email', href: 'mailto:nedimmajdanac13@gmail.com', icon: 'email' },
]
