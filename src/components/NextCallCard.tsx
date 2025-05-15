
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Clock } from 'lucide-react';

const NEXT_CALL_END_TIME_KEY = 'nextCallEndTime';

const NextCallCard = () => {
  const [timeLeft, setTimeLeft] = useState('');
  const [nextCallTime, setNextCallTime] = useState('');

  useEffect(() => {
    let callTime: Date;
    const storedCallEndTime = localStorage.getItem(NEXT_CALL_END_TIME_KEY);

    if (storedCallEndTime) {
      const endTime = parseInt(storedCallEndTime, 10);
      if (endTime > Date.now()) {
        callTime = new Date(endTime);
      } else {
        // Stored time is in the past, schedule a new one
        localStorage.removeItem(NEXT_CALL_END_TIME_KEY); // Clear outdated item
        const newCallEndTime = Date.now() + 30 * 60 * 1000;
        localStorage.setItem(NEXT_CALL_END_TIME_KEY, newCallEndTime.toString());
        callTime = new Date(newCallEndTime);
      }
    } else {
      // No stored time, schedule a new one
      const newCallEndTime = Date.now() + 30 * 60 * 1000;
      localStorage.setItem(NEXT_CALL_END_TIME_KEY, newCallEndTime.toString());
      callTime = new Date(newCallEndTime);
    }

    const formattedCallTime = callTime.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    setNextCallTime(formattedCallTime);

    const interval = setInterval(() => {
      const now = new Date();
      const difference = callTime.getTime() - now.getTime();

      if (difference <= 0) {
        setTimeLeft('Now!');
        localStorage.removeItem(NEXT_CALL_END_TIME_KEY); // Clear storage once call time is reached
        clearInterval(interval);
        return;
      }

      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);
      setTimeLeft(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="w-full animate-scale-in glassmorphic border-memotag-purple-light shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-memotag-purple-tertiary">
          <Clock className="w-6 h-6 mr-2 text-memotag-purple-primary" />
          Next Call
        </CardTitle>
        <CardDescription className="text-memotag-purple-secondary">Your upcoming scheduled session.</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-lg text-memotag-purple-secondary">Next call at: <span className="font-semibold text-memotag-purple-primary">{nextCallTime}</span></p>
        <p className="text-4xl font-bold mt-2 text-memotag-purple-primary animate-pulse-subtle">{timeLeft}</p>
        <p className="text-sm text-memotag-purple-secondary/80 mt-1">Time remaining</p>
      </CardContent>
    </Card>
  );
};

export default NextCallCard;
