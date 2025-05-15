
import React from 'react';
import { Button } from '@/components/ui/button';

interface CallIconButtonProps {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  variant?: 'primary' | 'destructive' | 'ghost';
  className?: string;
}

const CallIconButton: React.FC<CallIconButtonProps> = ({ onClick, icon, label, variant = 'primary', className = '' }) => {
  const baseClasses = "rounded-full w-16 h-16 md:w-20 md:h-20 flex flex-col items-center justify-center p-2 text-xs md:text-sm shadow-lg transition-transform hover:scale-105";
  
  let variantClasses = "";
  switch (variant) {
    case 'destructive':
      variantClasses = "bg-red-500 hover:bg-red-600 text-white";
      break;
    case 'ghost':
      variantClasses = "bg-white/20 hover:bg-white/30 text-white";
      break;
    default: // primary
      variantClasses = "bg-memotag-purple-primary/80 hover:bg-memotag-purple-primary text-white";
  }

  return (
    <div className="flex flex-col items-center space-y-1">
      <Button
        onClick={onClick}
        className={`${baseClasses} ${variantClasses} ${className}`}
        aria-label={label}
      >
        {icon}
      </Button>
      <span className="text-white/80 text-xs">{label}</span>
    </div>
  );
};

export default CallIconButton;
