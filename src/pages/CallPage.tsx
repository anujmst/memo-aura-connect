
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, PhoneOff, Clock } from 'lucide-react';
import CallIconButton from '@/components/CallIconButton';
import DoodleSparkle from '@/components/icons/DoodleSparkle';

const CallPage = () => {
  const navigate = useNavigate();
  const [isMuted, setIsMuted] = useState(false);
  const [callDuration, setCallDuration] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCallDuration(prev => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  };

  const handleToggleMute = () => setIsMuted(!isMuted);
  const handleEndCall = () => navigate('/post-call');

  return (
    <div className="min-h-screen flex flex-col items-center justify-between bg-gradient-to-br from-memotag-purple-tertiary via-memotag-blue-ocean to-memotag-purple-secondary p-6 text-white animate-fade-in">
      <header className="w-full flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <Clock className="w-5 h-5" />
          <span>{formatDuration(callDuration)}</span>
        </div>
        <DoodleSparkle className="w-6 h-6 text-memotag-purple-light animate-pulse-subtle" />
      </header>

      <main className="flex flex-col items-center justify-center text-center flex-grow">
        <div className="w-32 h-32 md:w-40 md:h-40 bg-white/20 rounded-full flex items-center justify-center mb-6 shadow-lg">
          {/* Placeholder for user avatar or initials */}
          <span className="text-4xl md:text-5xl font-bold text-white/80">U</span>
        </div>
        <h1 className="text-2xl md:text-3xl font-semibold mb-1">Connecting...</h1>
        <p className="text-sm md:text-base text-white/70">Memotag Call</p>
      </main>

      <footer className="w-full max-w-xs md:max-w-sm">
        <div className="flex justify-around items-center p-4 bg-black/20 rounded-full shadow-xl backdrop-blur-sm">
          <CallIconButton
            onClick={handleToggleMute}
            icon={isMuted ? <MicOff size={28} /> : <Mic size={28} />}
            label={isMuted ? 'Unmute' : 'Mute'}
            variant="ghost"
          />
          <CallIconButton
            onClick={handleEndCall}
            icon={<PhoneOff size={28} />}
            label="End Call"
            variant="destructive"
          />
        </div>
      </footer>
    </div>
  );
};

export default CallPage;
