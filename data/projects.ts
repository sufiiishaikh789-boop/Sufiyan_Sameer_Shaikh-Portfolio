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
  workflow?: string[]
  security?: string[]
  currentStatus?: string
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
    title: 'Table-Embedded Smart Restaurant Ordering System',
    subtitle: 'Self-service ordering concept',
    summary:
      'A table-based self-service ordering solution designed to give restaurant customers time to explore menus, compare prices, customize meals, and order comfortably without feeling rushed at a counter or shared kiosk.',
    featured: false,
    technologies: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript', 'XAMPP'],
    features: [
      'Browse food items at the customer’s own pace',
      'Explore menu choices instead of ordering under counter pressure',
      'Add items to a cart and manage quantities',
      'Review cart contents during checkout',
      'Place food orders through the existing application workflow',
      'Show order confirmation after placement',
      'Track order status where supported by the backend',
    ],
    github: 'https://github.com/sufiishaikh789-boop/On_Table_Food_Ordering_Base',
    overview:
      'This PHP and MySQL Web Technology project explores a table-embedded ordering experience: a customer sits at an assigned table, browses the menu privately, reviews a cart, and submits an order without needing to decide in front of a waiting counter or shared kiosk.',
    problem:
      'Customers who are unsure what to order can feel rushed at a staffed counter, while a shared kiosk can make them uncomfortable when other customers are waiting. That pressure discourages menu exploration, price comparison, and thoughtful decisions.',
    solution:
      'The existing browser application provides the foundation for a table-based self-service flow. A stable table identifier can connect the customer session and resulting order to the correct table, while PHP and MySQL handle the ordering workflow, cart, checkout, confirmation, and tracking data.',
    architecture: [
      { name: 'Interface', description: 'HTML5, CSS3, and JavaScript provide the customer-facing food selection, cart, checkout, confirmation, and tracking screens.' },
      { name: 'Application logic', description: 'PHP handles the ordering workflow, including cart processing, checkout, order placement, confirmation, and tracking requests.' },
      { name: 'Database', description: 'MySQL stores the application data required by the ordering workflow and its order-tracking views.' },
      { name: 'Local runtime', description: 'XAMPP provides the local Apache and MySQL environment used to run and test the PHP application.' },
    ],
    testing: ['Local testing with XAMPP and the existing project workflow'],
    workflow: [
      'Customer sits at an assigned table and identifies the table session.',
      'Customer explores and filters the menu, then reviews ingredients, prices, and dietary labels that the data actually provides.',
      'Customer customizes supported items, updates quantities, and reviews the itemized cart.',
      'Checkout submits the order to the server for validation and associates it with the table.',
      'The system generates an order confirmation and exposes tracking information where the backend supports it.',
      'Restaurant staff can use the order details to prepare and deliver the order to the correct table.',
    ],
    security: [
      'Use prepared SQL statements and server-side validation for table identifiers, item availability, quantities, and totals.',
      'Do not treat browser-calculated totals or client-supplied payment states as verified transaction results.',
      'Payment processing, staff authentication, and role-based authorization require confirmation in the source application before being described as implemented.',
    ],
    currentStatus:
      'Academic/local implementation. The portfolio documents the table-embedded direction and existing ordering workflow; physical touchscreen deployment, production restaurant operations, and verified live payments are not claimed.',
    challenges: [
      'Connecting the cart, checkout, and order-placement stages into one consistent workflow.',
      'Designing database-backed order tracking while developing in a local PHP environment.',
      'Separating implemented local behavior from the additional controls needed for a production table-ordering service.',
    ],
    futureImprovements: [
      'Add validated table provisioning instead of accepting arbitrary client-side table identifiers.',
      'Add authenticated customer and staff accounts with server-side role-based access.',
      'Add server-recalculated totals, transactional order creation, and idempotent submissions.',
      'Integrate and verify Razorpay only when credentials, signature verification, and reconciliation are configured.',
      'Deploy the application to a hosted PHP and MySQL environment with maintained menu and order data.',
    ],
    screenshots: [],
  },
]

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug)
}
