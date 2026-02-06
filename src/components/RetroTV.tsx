import { useEffect, useRef } from 'react'
import { Power } from 'lucide-react'
import { TVStatic } from './TVStatic'
import { TVContent } from './TVContent'
import type { Channel } from '../data/channels'

interface RetroTVProps {
  isPoweredOn: boolean
  currentChannel: Channel
  staticIntensity: number
  onPowerToggle: () => void
}

export function RetroTV({ isPoweredOn, currentChannel, staticIntensity, onPowerToggle }: RetroTVProps) {
  const screenRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (screenRef.current) {
      screenRef.current.scrollTop = 0
    }
  }, [currentChannel])

  return (
    <div className="relative">
      {/* TV Body */}
      <div className="relative bg-gradient-to-b from-amber-900 via-amber-950 to-stone-950 rounded-3xl p-6 shadow-2xl border-4 border-stone-800">
        {/* Wood grain texture overlay */}
        <div className="absolute inset-0 rounded-3xl opacity-30 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj48ZmlsdGVyIGlkPSJub2lzZSI+PGZlVHVyYnVsZW5jZSB0eXBlPSJmcmFjdGFsTm9pc2UiIGJhc2VGcmVxdWVuY3k9IjAuOCIgbnVtT2N0YXZlcz0iNCIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPjwvZmlsdGVyPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbHRlcj0idXJsKCNub2lzZSkiIG9wYWNpdHk9IjAuNCIvPjwvc3ZnPg==')]" />

        {/* Screen bezel */}
        <div className="relative bg-stone-950 rounded-2xl p-3 shadow-inner">
          {/* Inner bezel */}
          <div className="relative bg-stone-900 rounded-xl p-1 shadow-[inset_0_0_30px_rgba(0,0,0,0.8)]">
            {/* CRT Screen */}
            <div
              ref={screenRef}
              className="relative w-[480px] h-[320px] bg-stone-950 rounded-lg overflow-hidden"
              style={{
                boxShadow: isPoweredOn
                  ? 'inset 0 0 60px rgba(34, 197, 94, 0.1), inset 0 0 100px rgba(0,0,0,0.5)'
                  : 'inset 0 0 100px rgba(0,0,0,0.8)'
              }}
            >
              {/* CRT curvature effect */}
              <div className="absolute inset-0 rounded-lg pointer-events-none z-20"
                style={{
                  background: 'radial-gradient(ellipse at center, transparent 0%, transparent 70%, rgba(0,0,0,0.3) 100%)',
                }}
              />

              {/* Scanlines */}
              {isPoweredOn && (
                <div
                  className="absolute inset-0 pointer-events-none z-10 opacity-20"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,0,0,0.3) 2px, rgba(0,0,0,0.3) 4px)',
                  }}
                />
              )}

              {/* Screen content */}
              {isPoweredOn ? (
                <>
                  <TVStatic intensity={staticIntensity} />
                  {staticIntensity < 0.5 && (
                    <TVContent channel={currentChannel} />
                  )}
                </>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-2 h-2 bg-stone-800 rounded-full" />
                </div>
              )}

              {/* Screen reflection */}
              <div
                className="absolute inset-0 pointer-events-none z-30"
                style={{
                  background: 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, transparent 100%)',
                }}
              />
            </div>
          </div>
        </div>

        {/* TV Controls */}
        <div className="flex items-center justify-between mt-4 px-2">
          {/* Brand name */}
          <div className="flex items-center gap-2">
            <div className="text-amber-600/60 font-serif text-lg tracking-wider">
              STARGATE
            </div>
            <div className="text-amber-700/40 text-[10px] tracking-widest">
              MODEL RV-1995
            </div>
          </div>

          {/* Control knobs */}
          <div className="flex items-center gap-4">
            {/* Volume knob decoration */}
            <div className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 rounded-full bg-gradient-to-b from-stone-700 to-stone-800 shadow-lg border border-stone-600 flex items-center justify-center">
                <div className="w-1 h-3 bg-stone-500 rounded-full" />
              </div>
              <span className="text-[8px] text-amber-700/50 uppercase tracking-wider">Vol</span>
            </div>

            {/* Power button */}
            <div className="flex flex-col items-center gap-1">
              <button
                onClick={onPowerToggle}
                className={`w-10 h-10 rounded-full shadow-lg border-2 flex items-center justify-center transition-all duration-300 ${
                  isPoweredOn
                    ? 'bg-gradient-to-b from-green-600 to-green-800 border-green-500 shadow-green-500/30'
                    : 'bg-gradient-to-b from-stone-700 to-stone-800 border-stone-600 hover:from-stone-600 hover:to-stone-700'
                }`}
              >
                <Power className={`w-5 h-5 ${isPoweredOn ? 'text-green-200' : 'text-stone-400'}`} />
              </button>
              <span className="text-[8px] text-amber-700/50 uppercase tracking-wider">Power</span>
            </div>
          </div>
        </div>

        {/* Speaker grille */}
        <div className="mt-4 mx-auto w-32 h-8 rounded-lg bg-stone-900 shadow-inner flex items-center justify-center gap-0.5 px-2">
          {Array.from({ length: 20 }).map((_, i) => (
            <div key={i} className="w-0.5 h-5 bg-stone-700 rounded-full" />
          ))}
        </div>
      </div>

      {/* TV Stand */}
      <div className="flex justify-center gap-16 -mt-1">
        <div className="w-6 h-8 bg-gradient-to-b from-amber-900 to-amber-950 rounded-b-lg shadow-lg" />
        <div className="w-6 h-8 bg-gradient-to-b from-amber-900 to-amber-950 rounded-b-lg shadow-lg" />
      </div>
    </div>
  )
}
