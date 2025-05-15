
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
  }, []);

  return (
    <Card className="w-full relative overflow-hidden animate-float group hover:scale-[1.02] transition-transform ease-bounce duration-300 border-memotag-purple-light shadow-md hover:shadow-xl bg-gradient-to-br from-white/90 to-memotag-purple-soft/50">
      <div className="absolute -right-12 -top-12 w-40 h-40 bg-memotag-purple-primary/10 rounded-full blur-2xl animate-pulse-slow"></div>
      <div className="absolute -left-12 -bottom-12 w-40 h-40 bg-memotag-blue-sky/10 rounded-full blur-2xl animate-pulse-slow animation-delay-2000"></div>
      
      <CardHeader className="relative z-10">
        <CardTitle className="flex items-center text-memotag-purple-tertiary text-2xl">
          <Clock className="w-6 h-6 mr-3 text-memotag-purple-primary animate-bounce-gentle" />
          <span className="relative">
            Next Call
            <span className="absolute -top-1 -right-4 w-3 h-3 bg-memotag-purple-primary rounded-full animate-ping"></span>
          </span>
        </CardTitle>
        <CardDescription className="text-memotag-purple-secondary text-lg">Your upcoming scheduled session.</CardDescription>
      </CardHeader>
      
      <CardContent className="text-center relative z-10">
        <div className="space-y-6 py-2">
          <div className="relative">
            <p className="text-xl text-memotag-purple-secondary">
              Next call at: <span className="font-bold text-memotag-purple-primary relative inline-block">
                {nextCallTime}
                <span className="absolute bottom-0 left-0 w-full h-1 bg-memotag-purple-light transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
              </span>
            </p>
          </div>
          
          <div className="bg-white/80 backdrop-blur-sm py-4 px-6 rounded-xl shadow-inner transition-all duration-300 hover:bg-white/90 border border-white">
            <p className="text-5xl font-bold text-memotag-purple-primary animate-pulse-subtle tracking-wider font-display">
              {timeLeft}
            </p>
            <p className="text-sm text-memotag-purple-secondary/80 mt-2 animate-fade-in animation-delay-300">
              Time remaining until your next adventure!
            </p>
          </div>
          
          <div className="h-2 w-full bg-gray-100 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-memotag-purple-primary to-memotag-blue-bright animate-progress rounded-full"></div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default NextCallCard;
