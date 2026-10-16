import { ImageResponse } from 'next/og'
import { site } from '@/data/site'

export const alt = site.title
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '72px 80px',
          background: '#fbfaf7',
          color: '#0f172a',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, fontSize: 24, letterSpacing: 4, color: '#475569' }}>
          <div style={{ width: 14, height: 14, borderRadius: 999, background: '#2563eb' }} />
          COMPUTER SCIENCE ENGINEERING · BENGALURU, INDIA
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 76, fontWeight: 700, letterSpacing: -2, lineHeight: 1.05 }}>{site.name}</div>
          <div style={{ marginTop: 24, fontSize: 40, color: '#2563eb', fontWeight: 600 }}>
            Building Software, AI & GPU-Powered Solutions.
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 26, color: '#475569' }}>
          <div>AI/ML & Software Developer</div>
          <div>B.Tech CSE · Presidency University</div>
        </div>
      </div>
    ),
    size,
  )
}
