import { useState, useEffect } from 'react'
import { RetroTV } from './components/RetroTV'
import { ChannelSelector } from './components/ChannelSelector'
import { channels } from './data/channels'

function App() {
  const [currentChannel, setCurrentChannel] = useState(0)
  const [isPoweredOn, setIsPoweredOn] = useState(false)
  const [isChangingChannel, setIsChangingChannel] = useState(false)
  const [staticIntensity, setStaticIntensity] = useState(1)

  const handleChannelChange = (newChannel: number) => {
    if (newChannel === currentChannel || !isPoweredOn) return
    setIsChangingChannel(true)
    setStaticIntensity(1)

    setTimeout(() => {
      setCurrentChannel(newChannel)
      setTimeout(() => {
        setIsChangingChannel(false)
        setStaticIntensity(0)
      }, 300)
    }, 200)
  }

  const handlePowerToggle = () => {
    if (isPoweredOn) {
      setStaticIntensity(1)
      setTimeout(() => {
        setIsPoweredOn(false)
      }, 300)
    } else {
      setIsPoweredOn(true)
      setStaticIntensity(1)
      setTimeout(() => {
        setStaticIntensity(0)
      }, 800)
    }
  }

  useEffect(() => {
    if (isPoweredOn && !isChangingChannel) {
      const interval = setInterval(() => {
        setStaticIntensity(Math.random() * 0.03)
      }, 100)
      return () => clearInterval(interval)
    }
  }, [isPoweredOn, isChangingChannel])

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-4 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-900/10 via-transparent to-transparent" />

      <div className="relative flex flex-col items-center gap-6">
        <h1 className="text-amber-500/80 text-sm tracking-[0.3em] uppercase font-mono">
          CIA Declassified Archives • 1995
        </h1>

        <RetroTV
          isPoweredOn={isPoweredOn}
          currentChannel={channels[currentChannel]}
          staticIntensity={staticIntensity}
          onPowerToggle={handlePowerToggle}
        />

        <ChannelSelector
          channels={channels}
          currentChannel={currentChannel}
          onChannelChange={handleChannelChange}
          isPoweredOn={isPoweredOn}
        />

        <p className="text-slate-500 text-xs font-mono mt-2">
          Click power button to start • Use channel buttons to navigate
        </p>
      </div>
    </div>
  )
}

export default App
