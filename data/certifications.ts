export type Certification = {
  id: string
  title: string
  subtitle?: string
  type: string
  issuer: string
  date: string
  image?: string
  url?: string
  pending?: boolean
}

export const certifications: Certification[] = [
  {
    id: 'sdp-teenpreneur-2025',
    title: 'Student Development Program (SDP)',
    subtitle: '\u201CTeenpreneur and His 20+ Year\u2019s Journey\u201D',
    type: 'Certificate of Participation',
    issuer: 'Presidency University, Bengaluru',
    date: '28 March 2025',
    image: '/certificates/sdp-teenpreneur-2025.png',
    url: '/certificates/sdp-teenpreneur-2025.png',
  },
  {
    // Once issued: add the file to /public/certificates, set image/url, and remove `pending`.
    id: 'nvidia-ai-coe-internship-2026',
    title: 'AI/ML Internship Certificate',
    subtitle: 'NVIDIA Accelerated AI Center of Excellence (CoE), Presidency University',
    type: 'Internship Certificate',
    issuer: 'Presidency University, Bengaluru',
    date: 'June 2026',
    pending: true,
  },
]
