import { useEffect, useRef } from 'react'

interface TVStaticProps {
  intensity: number
}

export function TVStatic({ intensity }: TVStaticProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationId: number

    const drawStatic = () => {
      if (intensity <= 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height)
        return
      }

      const imageData = ctx.createImageData(canvas.width, canvas.height)
      const data = imageData.data

      for (let i = 0; i < data.length; i += 4) {
        const value = Math.random() * 255
        const alpha = Math.random() * intensity * 255

        data[i] = value     // R
        data[i + 1] = value // G
        data[i + 2] = value // B
        data[i + 3] = alpha // A
      }

      ctx.putImageData(imageData, 0, 0)
      animationId = requestAnimationFrame(drawStatic)
    }

    drawStatic()

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId)
      }
    }
  }, [intensity])

  if (intensity <= 0) return null

  return (
    <canvas
      ref={canvasRef}
      width={480}
      height={320}
      className="absolute inset-0 z-5 pointer-events-none"
      style={{ opacity: Math.min(intensity * 2, 1) }}
    />
  )
}
