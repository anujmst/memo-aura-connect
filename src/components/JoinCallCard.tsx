
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { PhoneCall } from 'lucide-react';

const JoinCallCard = () => {
  const navigate = useNavigate();

  return (
    <Card className="w-full animate-scale-in animation-delay-200 glassmorphic border-memotag-blue-sky shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center text-memotag-blue-ocean">
          <PhoneCall className="w-6 h-6 mr-2 text-memotag-blue-bright" />
          Instant Connection
        </CardTitle>
        <CardDescription className="text-memotag-blue-ocean/80">Ready to talk now?</CardDescription>
      </CardHeader>
      <CardContent className="text-center">
        <p className="text-lg mb-4 text-memotag-blue-ocean/90">Join a call immediately.</p>
        <Button 
          onClick={() => navigate('/call')} 
          className="w-full md:w-auto bg-memotag-blue-bright hover:bg-memotag-blue-ocean text-white py-3 px-8 text-lg"
        >
          Call Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default JoinCallCard;
