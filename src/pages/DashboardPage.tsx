import React, { useEffect } from 'react';
import MoodDropdown from '@/components/MoodDropdown';
import NextCallCard from '@/components/NextCallCard';
import JoinCallCard from '@/components/JoinCallCard';
import DoodleSparkle from '@/components/icons/DoodleSparkle';
import { Smile, Heart } from 'lucide-react';
import DoodleStar from '@/components/icons/DoodleStar';
import DoodleCloud from '@/components/icons/DoodleCloud';
import DoodleHeart from '@/components/icons/DoodleHeart';

const DashboardPage = () => {
  const userName = "Friend"; // Placeholder, fetch from auth state later

  useEffect(() => {
    // Add confetti effect when dashboard loads
    const createFloatingElement = (count: number, classNames: string) => {
      const container = document.getElementById('confetti-container');
      if (!container) return;

      for (let i = 0; i < count; i++) {
        const element = document.createElement('div');
        element.className = classNames;
        
        // Random position
        element.style.left = `${Math.random() * 100}%`;
        element.style.top = `${Math.random() * 100}%`;
        
        // Random animation duration & delay
        element.style.animationDuration = `${Math.random() * 15 + 15}s`; // Slower duration
        element.style.animationDelay = `${Math.random() * 5}s`;
        
        container.appendChild(element);
        
        // Remove after animation completes + a buffer
        setTimeout(() => {
          if (element.parentNode) {
            element.parentNode.removeChild(element);
          }
        }, 30000); // Increased timeout to match longer potential durations
      }
    };
    
    // Create various floating elements - reduced count, smaller, fainter, slower
    createFloatingElement(3, 'absolute w-2 h-2 text-yellow-200 animate-float-slow z-0 opacity-10'); // Stars
    createFloatingElement(2, 'absolute w-1.5 h-1.5 text-red-200 animate-float-reverse z-0 opacity-10'); // Hearts
    createFloatingElement(3, 'absolute w-2.5 h-2.5 text-purple-200 animate-float z-0 opacity-10'); // Sparkles
    
    return () => {
      // Cleanup floating elements on unmount
      const container = document.getElementById('confetti-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-memotag-purple-soft via-memotag-blue-sky/10 to-white p-4 md:p-8 animate-fade-in relative overflow-hidden">
      {/* Background decoration */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0" id="confetti-container"></div>
      <div className="absolute top-[10%] left-[5%] w-40 h-40 bg-memotag-purple-soft/70 rounded-full blur-3xl opacity-20 animate-pulse-slow"></div>
      <div className="absolute bottom-[5%] right-[10%] w-60 h-60 bg-memotag-blue-sky/10 rounded-full blur-3xl opacity-20 animate-pulse-slow animation-delay-3000"></div>
      
      {/* Doodle elements */}
      <DoodleStar className="absolute top-[15%] right-[10%] w-12 h-12 text-yellow-400/30 animate-rotate-slow" />
      <DoodleCloud className="absolute bottom-[20%] left-[5%] w-20 h-20 text-memotag-blue-sky/30 animate-float-slow" />
      <DoodleHeart className="absolute top-[40%] right-[3%] w-10 h-10 text-red-300/30 animate-bounce-gentle animation-delay-1000" />
      
      <header className="mb-8 relative z-10">
        <div className="container mx-auto flex justify-between items-center py-6 px-4 bg-white/50 backdrop-blur-md rounded-2xl shadow-sm border border-white">
          <div className="flex items-center space-x-4">
            <div className="relative">
              <DoodleSparkle className="w-10 h-10 text-memotag-purple-primary animate-rotate-slow" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-memotag-purple-light rounded-full animate-ping"></span>
            </div>
            <h1 className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-memotag-purple-tertiary to-memotag-blue-ocean">
              Memotag Dashboard
            </h1>
          </div>
          
          <div className="flex items-center space-x-2 bg-white/70 px-4 py-2 rounded-full border border-memotag-purple-light/30 shadow-inner animate-bounce-gentle">
            <Smile className="w-5 h-5 text-yellow-500" />
            <p className="text-memotag-purple-secondary font-medium">
              Welcome, <span className="font-bold text-memotag-purple-primary">{userName}</span>!
            </p>
            <Heart className="w-4 h-4 text-red-400 animate-beat" />
          </div>
        </div>
      </header>
      
      <main className="container mx-auto flex-grow z-10">
        <MoodDropdown />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          <NextCallCard />
          <JoinCallCard />
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-lg text-memotag-purple-secondary/80 animate-fade-in animation-delay-1000">
            Remember to keep your device nearby for your upcoming call!
          </p>
        </div>
      </main>
      
      <footer className="text-center py-8 mt-10 text-memotag-purple-secondary/70 relative z-10">
        <div className="flex justify-center items-center space-x-2">
          <DoodleSparkle className="w-5 h-5 text-memotag-purple-primary animate-spin-slow" />
          <span>Keep track of your moments with Memotag</span>
          <DoodleSparkle className="w-5 h-5 text-memotag-blue-bright animate-spin-slow" />
        </div>
      </footer>
    </div>
  );
};

export default DashboardPage;
