import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const NextCallCard = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [nextCallTime, setNextCallTime] = useState('');
  const { toast } = useToast();

  useEffect(() => {
    // Simulate retrieving next call time from persistent storage or API
    // For now, store in localStorage to persist between page visits
    let targetTime = localStorage.getItem('nextCallTime');
    let callTime: Date;
    
    if (!targetTime || new Date(targetTime).getTime() <= Date.now()) {
      // If no stored time or time has passed, set to 30 minutes from now
      callTime = new Date(Date.now() + 30 * 60 * 1000);
      localStorage.setItem('nextCallTime', callTime.toISOString());
    } else {
      callTime = new Date(targetTime);
    }
    
    const formattedCallTime = callTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setNextCallTime(formattedCallTime);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = callTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('Now!');
        clearInterval(interval);
        toast({
          title: "It's time for your call!",
          description: "Your scheduled call is ready to join.",
          duration: 5000,
        });
        return;
      }

      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, [toast]);

  return (
    <Card className="w-full relative overflow-hidden group hover:scale-[1.02] transition-transform ease-bounce duration-300 bg-white/70 backdrop-blur-md border border-memotag-purple-light/30 shadow-lg hover:shadow-xl">
      <div className="absolute -right-10 -top-10 w-32 h-32 bg-memotag-purple-primary/5 rounded-full blur-xl animate-pulse-slow opacity-70"></div>
      <div className="absolute -left-10 -bottom-10 w-32 h-32 bg-memotag-blue-sky/5 rounded-full blur-xl animate-pulse-slow animation-delay-2000 opacity-70"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center text-memotag-purple-tertiary text-xl">
          <Clock className="w-5 h-5 mr-2.5 text-memotag-purple-primary animate-bounce-gentle" />
          <span className="relative">
            Next Call
            <span className="absolute -top-0.5 -right-3 w-2.5 h-2.5 bg-memotag-purple-primary/70 rounded-full animate-ping-small"></span>
          </span>
        </CardTitle>
        <CardDescription className="text-memotag-purple-secondary/90 text-base">Your upcoming scheduled session.</CardDescription>
      </CardHeader>
      
      <CardContent className="text-center relative z-10 pb-6 pt-2">
        <div className="space-y-4 py-1">
          <div className="relative">
            <p className="text-lg text-memotag-purple-secondary">
              Next call at: <span className="font-bold text-memotag-purple-primary relative inline-block">
                {nextCallTime}
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-memotag-purple-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </span>
            </p>
          </div>
          
          <div className="bg-white/60 backdrop-blur-sm py-3 px-4 rounded-xl shadow-inner transition-all duration-300 hover:bg-white/70 border border-white/50">
            <p className="text-4xl font-bold text-memotag-purple-primary animate-pulse-subtle tracking-wide font-display">
              {timeLeft}
            </p>
            <p className="text-xs text-memotag-purple-secondary/70 mt-1.5 animate-fade-in animation-delay-300">
              Time remaining!
            </p>
          </div>
          
          <div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-memotag-purple-primary to-memotag-blue-bright animate-progress rounded-full"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextCallCard;
