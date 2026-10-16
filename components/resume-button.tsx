import { Download } from 'lucide-react'
import { linkButtonClass, type LinkButtonSize, type LinkButtonVariant } from '@/components/link-button'

type ResumeButtonProps = {
  variant?: LinkButtonVariant
  size?: LinkButtonSize
  label?: string
  fallbackLabel?: string
  download?: boolean
  className?: string
}

export function ResumeButton({
  variant = 'outline',
  size = 'md',
  label = 'Download Resume',
  fallbackLabel = 'Request Resume',
  download = false,
  className,
}: ResumeButtonProps) {
  return (
    <a
      href="/resume.pdf"
      target={download ? undefined : '_blank'}
      rel={download ? undefined : 'noreferrer'}
      download={download ? 'Sufiyan_Sameer_Shaikh_Resume.pdf' : undefined}
      className={linkButtonClass(variant, size, className)}
    >
      {download ? label : 'View Resume'}
      <Download aria-hidden="true" className="group-hover:translate-y-0.5" />
    </a>
  )
}
