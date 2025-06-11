
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const Welcome = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8 relative">
        {/* Blue geometric shapes */}
        <div className="absolute top-0 left-0 w-0 h-0 border-l-[200px] border-l-primary border-b-[300px] border-b-transparent"></div>
        <div className="absolute bottom-0 right-0 w-0 h-0 border-r-[150px] border-r-primary border-t-[200px] border-t-transparent"></div>
        
        {/* Logo and brand */}
        <div className="text-center mb-20">
          <h1 className="text-6xl font-bold text-primary mb-8">EZWatiqa</h1>
        </div>

        {/* CTA Button */}
        <div className="absolute bottom-20 left-8 right-8">
          <Button 
            onClick={() => navigate('/language')}
            className="w-full py-4 text-lg font-medium bg-transparent border-none text-muted-foreground hover:bg-muted"
          >
            Tap to continue
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
