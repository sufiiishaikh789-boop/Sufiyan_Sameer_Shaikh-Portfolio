export type Experience = {
  id: string
  organization: string
  institution: string
  role: string
  start: string
  end: string
  summary: string
  learningAreas: string[]
  technologies: string[]
  // Set to e.g. '/certificates/nvidia-ai-coe-internship.pdf' once the certificate is issued.
  certificateUrl: string | null
}

export const experiences: Experience[] = [
  {
    id: 'nvidia-ai-coe',
    organization: 'NVIDIA Accelerated AI Center of Excellence (CoE)',
    institution: 'Presidency University',
    role: 'AI/ML Intern / Student Trainee',
    start: '01 June 2026',
    end: '12 June 2026',
    summary:
      'A university-associated AI/ML training internship at the NVIDIA Accelerated AI Center of Excellence, hosted at Presidency University. I learned core machine learning and deep learning concepts, explored generative AI, LLMs, and computer vision, and gained hands-on exposure to GPU-based computing and practical model implementation.',
    learningAreas: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'Large Language Models',
      'Computer Vision',
      'GPU-based Computing',
      'Practical Model Implementation',
    ],
    technologies: [
      'Python',
      'Jupyter Notebook',
      'NVIDIA GPU',
      'Kubernetes',
      'Antigravity IDE',
      'OpenCV',
      'YOLOv8',
      'TensorFlow',
      'PyTorch',
      'Hugging Face',
      'LoRA / PEFT',
      'Stable Diffusion',
    ],
    certificateUrl: null,
  },
]
