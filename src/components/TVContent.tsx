import { useState, useEffect } from 'react'
import { ChevronDown, Eye, FileText, Users, AlertTriangle, Clock } from 'lucide-react'
import type { Channel } from '../data/channels'

interface TVContentProps {
  channel: Channel
}

export function TVContent({ channel }: TVContentProps) {
  const [displayedText, setDisplayedText] = useState('')
  const [isTyping, setIsTyping] = useState(true)

  useEffect(() => {
    setDisplayedText('')
    setIsTyping(true)

    let index = 0
    const text = channel.content

    const typeInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayedText(text.slice(0, index + 1))
        index++
      } else {
        setIsTyping(false)
        clearInterval(typeInterval)
      }
    }, 8)

    return () => clearInterval(typeInterval)
  }, [channel])

  const getIcon = () => {
    switch (channel.icon) {
      case 'eye': return <Eye className="w-5 h-5" />
      case 'file': return <FileText className="w-5 h-5" />
      case 'users': return <Users className="w-5 h-5" />
      case 'alert': return <AlertTriangle className="w-5 h-5" />
      case 'clock': return <Clock className="w-5 h-5" />
      default: return <FileText className="w-5 h-5" />
    }
  }

  return (
    <div className="absolute inset-0 bg-stone-950 text-green-400 font-mono overflow-hidden">
      {/* Header bar */}
      <div className="bg-green-900/30 border-b border-green-700/30 px-4 py-2 flex items-center justify-between">
        <div className="flex items-center gap-2">
          {getIcon()}
          <span className="text-green-300 text-sm font-bold tracking-wider uppercase">
            {channel.title}
          </span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-green-600 text-xs">
            CH-{String(channel.id).padStart(2, '0')}
          </span>
          <span className="text-green-600 text-xs animate-pulse">
            ● LIVE
          </span>
        </div>
      </div>

      {/* Classification banner */}
      <div className="bg-amber-900/40 border-b border-amber-700/30 px-4 py-1 flex items-center justify-center">
        <span className="text-amber-400 text-[10px] tracking-[0.2em] uppercase">
          ▲ Declassified • CIA-RDP96-00791R000100030073-5 • Released 2003 ▲
        </span>
      </div>

      {/* Content area */}
      <div className="p-4 h-[230px] overflow-y-auto scrollbar-thin scrollbar-thumb-green-800 scrollbar-track-transparent">
        <div className="text-green-300/90 text-xs leading-relaxed whitespace-pre-wrap">
          {displayedText}
          {isTyping && (
            <span className="inline-block w-2 h-4 bg-green-400 ml-1 animate-pulse" />
          )}
        </div>

        {!isTyping && channel.details && (
          <div className="mt-4 space-y-3">
            {channel.details.map((detail, index) => (
              <div
                key={index}
                className="bg-green-900/20 border border-green-800/30 rounded p-3 animate-fadeIn"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="text-green-400 text-[10px] uppercase tracking-wider mb-1 flex items-center gap-1">
                  <ChevronDown className="w-3 h-3" />
                  {detail.label}
                </div>
                <div className="text-green-300/80 text-xs">
                  {detail.value}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 bg-stone-950/90 border-t border-green-900/30 px-4 py-1.5 flex items-center justify-between">
        <span className="text-green-700 text-[10px]">
          PROJECT STARGATE • DIA ARCHIVES
        </span>
        <span className="text-green-600 text-[10px] tabular-nums">
          {new Date().toLocaleTimeString()}
        </span>
      </div>

      {/* CRT glow effect */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-green-500/5 via-transparent to-green-500/5" />
    </div>
  )
}
