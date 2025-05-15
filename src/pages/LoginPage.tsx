
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import DoodleSparkle from '@/components/icons/DoodleSparkle';

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Placeholder for Otpless login logic
    // For now, just navigate to dashboard on any input
    if (email) { // Simple validation
      console.log('Logging in with:', email);
      navigate('/dashboard');
    } else {
      alert("Please enter your email or phone number to proceed.");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-memotag-purple-light via-memotag-purple-soft to-white p-4 animate-fade-in">
      <div className="absolute top-5 left-5">
        <DoodleSparkle className="w-8 h-8 text-memotag-purple-primary" />
      </div>
      <div className="absolute bottom-5 right-5 transform rotate-45">
        <DoodleSparkle className="w-12 h-12 text-memotag-blue-sky opacity-70" />
      </div>
      
      <div className="w-full max-w-md p-8 space-y-8 bg-white/80 backdrop-blur-md shadow-2xl rounded-xl glassmorphic">
        <div className="text-center">
          <DoodleSparkle className="w-16 h-16 text-memotag-purple-primary mx-auto mb-4 animate-pulse-subtle" />
          <h1 className="text-4xl font-bold text-memotag-purple-tertiary">Welcome to Memotag!</h1>
          <p className="mt-2 text-memotag-purple-secondary">Sign in to schedule your moments.</p>
        </div>
        
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" className="text-memotag-purple-secondary">Email or Phone (OTP)</Label>
            <Input
              id="email"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email or phone"
              className="mt-1 w-full border-memotag-purple-light focus:ring-memotag-purple-primary focus:border-memotag-purple-primary"
              required
            />
          </div>
          
          <Button type="submit" className="w-full bg-memotag-purple-primary hover:bg-memotag-purple-secondary text-white py-3 text-lg">
            Login with OTP
          </Button>
        </form>
        <p className="text-xs text-center text-memotag-purple-secondary/70">
          By continuing, you agree to Memotag's Terms of Service and Privacy Policy.
        </p>
      </div>
      <p className="mt-8 text-sm text-memotag-purple-secondary">
        Powered by Lovable ❤️
      </p>
    </div>
  );
};

export default LoginPage;
