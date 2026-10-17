export type ArchitectureLayer = {
  name: string
  description: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  status?: string
  summary: string
  featured: boolean
  role?: string
  technologies: string[]
  features: string[]
  github?: string
  liveDemo?: string
  overview?: string
  problem?: string
  solution?: string
  architecture?: ArchitectureLayer[]
  gpu?: string[]
  testing?: string[]
  challenges?: string[]
  futureImprovements?: string[]
  screenshots: { src: string; alt: string }[]
}

export const projects: Project[] = [
  {
    slug: 'intelliprint-nexus',
    title: 'IntelliPrint Nexus',
    subtitle: 'Smart Printing Management System',
    summary:
      'A smart printing management platform that allows students to submit, pay for, track, and manage printing jobs while providing administrators with queue, payment, print-job, analytics, and hardware monitoring capabilities.',
    featured: true,
    role: 'Full-Stack Developer & AI/GPU Implementation',
    technologies: ['Python', 'Streamlit', 'SQLite', 'NVIDIA CUDA', 'PyTorch', 'GPU Computing', 'Git/GitHub', 'pytest'],
    features: [
      'Student and Admin dashboards',
      'Print-job submission and queue management',
      'Payment and refund management',
      'Automated refund rules based on printing status',
      'GPU detection and hardware monitoring',
      'CUDA-based acceleration',
      'GPU benchmarking and profiling',
      'CPU fallback for non-CUDA systems',
      'Hardware telemetry',
      'Admin analytics and monitoring',
      'Testing and reproducibility documentation',
    ],
    github: 'https://github.com/sufiiishaikh789-boop/IntelliPrint-Nexus',
    liveDemo: 'https://lnkd.in/p/gNXJYpDR',
    overview:
      'IntelliPrint Nexus is a smart printing management platform with dedicated experiences for students and administrators, covering the full print-job lifecycle from submission and payment to queue management, refunds, analytics, and hardware monitoring.',
    problem:
      'Students need a simple way to submit, pay for, and track print jobs, while administrators need visibility into queues, payments, refunds, and the health of the hardware running the system.',
    solution:
      'A unified Streamlit application with separate Student and Admin dashboards, backed by SQLite, with automated refund rules tied to printing status and a GPU module that detects NVIDIA hardware, applies CUDA-based acceleration, and falls back to CPU on non-CUDA systems.',
    architecture: [
      { name: 'Interface', description: 'Streamlit-based Student and Admin dashboards.' },
      { name: 'Application logic', description: 'Print-job submission, queue management, payments, and status-based refund rules.' },
      { name: 'Persistence', description: 'SQLite storage for jobs, payments, and refunds.' },
      { name: 'GPU & hardware layer', description: 'NVIDIA GPU detection, CUDA acceleration with PyTorch, benchmarking, profiling, and telemetry with CPU fallback.' },
    ],
    gpu: [
      'NVIDIA GPU detection and CUDA-based acceleration',
      'GPU benchmarking and profiling',
      'GPU and hardware telemetry',
      'CPU fallback for non-CUDA systems',
    ],
    testing: ['Automated tests with pytest', 'Testing and reproducibility documentation'],
    // Add genuine app screenshots to /public/projects/intelliprint/ and list them here.
    screenshots: [],
  },
  {
    slug: 'emergency-msg-sender',
    title: 'Emergency Message Sender',
    subtitle: 'Arduino-based embedded concept',
    status: 'Prototype / Concept',
    summary:
      'An Arduino-based emergency messaging concept involving a GPS module, GSM module, LCD display, buzzer, and push-button trigger.',
    featured: false,
    technologies: ['Arduino UNO', 'GPS', 'GSM', 'LCD', 'Buzzer', 'Push Button'],
    features: [],
    screenshots: [],
  },
  {
    slug: 'restaurant-ordering-system',
    title: 'Restaurant Ordering System',
    subtitle: 'Web Application',
    summary:
      'A web-based restaurant food ordering application developed as a Web Technology academic project. It supports a food-ordering workflow with cart management, checkout, order placement, confirmation, and order tracking.',
    featured: false,
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
    features: [
      'Browse available food items',
      'Add items to a cart and manage quantities',
      'Review cart contents during checkout',
      'Place food orders through the application workflow',
      'Show order confirmation after placement',
      'Track order status',
    ],
    github: 'https://github.com/sufiishaikh789-boop/On_Table_Food_Ordering_Base',
    overview:
      'Restaurant Ordering System is a PHP and MySQL web application created for a Web Technology academic project. It models the customer journey from selecting food items through order placement, confirmation, and tracking.',
    problem:
      'A restaurant needs a structured digital ordering flow so customers can select food, review their cart, submit an order, and understand what happens after placement instead of relying on an informal or manual process.',
    solution:
      'The application combines a browser-based interface with PHP server-side logic and a MySQL database. Customers can manage a cart, proceed through checkout, place an order, receive confirmation, and view order-tracking information.',
    architecture: [
      { name: 'Interface', description: 'HTML5, CSS3, and JavaScript provide the customer-facing food selection, cart, checkout, confirmation, and tracking screens.' },
      { name: 'Application logic', description: 'PHP handles the ordering workflow, including cart processing, checkout, order placement, confirmation, and tracking requests.' },
      { name: 'Database', description: 'MySQL stores the application data required by the ordering workflow and its order-tracking views.' },
      { name: 'Local runtime', description: 'XAMPP provides the local Apache and MySQL environment used to run and test the PHP application.' },
    ],
    testing: ['Local testing with XAMPP and the project workflow'],
    challenges: [
      'Connecting the cart, checkout, and order-placement stages into one consistent workflow.',
      'Designing database-backed order tracking while developing in a local PHP environment.',
    ],
    futureImprovements: [
      'Deploy the application to a hosted PHP and MySQL environment.',
      'Add authenticated customer and staff accounts with role-based access.',
      'Add production-ready payment integration and automated notifications after validation.',
    ],
    screenshots: [],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
