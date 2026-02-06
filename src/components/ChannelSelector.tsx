import type { Channel } from '../data/channels'

interface ChannelSelectorProps {
  channels: Channel[]
  currentChannel: number
  onChannelChange: (channel: number) => void
  isPoweredOn: boolean
}

export function ChannelSelector({ channels, currentChannel, onChannelChange, isPoweredOn }: ChannelSelectorProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2 max-w-lg">
      {channels.map((channel, index) => (
        <button
          key={channel.id}
          onClick={() => onChannelChange(index)}
          disabled={!isPoweredOn}
          className={`
            relative px-3 py-2 rounded-lg font-mono text-xs transition-all duration-200
            border-2 min-w-[100px]
            ${!isPoweredOn
              ? 'bg-stone-800 border-stone-700 text-stone-600 cursor-not-allowed'
              : currentChannel === index
                ? 'bg-green-900/40 border-green-500 text-green-400 shadow-lg shadow-green-500/20'
                : 'bg-stone-800/80 border-stone-600 text-stone-400 hover:bg-stone-700 hover:border-amber-600 hover:text-amber-400'
            }
          `}
        >
          <span className="block text-[10px] text-left opacity-60 mb-0.5">
            CH-{String(channel.id).padStart(2, '0')}
          </span>
          <span className="block text-left truncate">
            {channel.shortTitle}
          </span>
          {currentChannel === index && isPoweredOn && (
            <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-green-400 rounded-full animate-pulse" />
          )}
        </button>
      ))}
    </div>
  )
}
