
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const LanguageSelection = () => {
  const navigate = useNavigate();

  const selectLanguage = (language: string) => {
    // Store selected language in localStorage
    localStorage.setItem('selectedLanguage', language);
    navigate('/login');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Status bar simulation */}
      <div className="flex justify-between items-center px-4 py-2 text-sm font-medium">
        <span>9:41</span>
        <div className="flex items-center gap-1">
          <div className="flex gap-1">
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-black rounded-full"></div>
            <div className="w-1 h-3 bg-gray-300 rounded-full"></div>
          </div>
          <div className="w-4 h-2 border border-black rounded-sm">
            <div className="w-3 h-1 bg-black rounded-sm"></div>
          </div>
          <div className="w-6 h-3 bg-black rounded-sm"></div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Logo */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-blue-600 mb-8">EZWatiqa</h1>
        </div>

        {/* Language Options */}
        <div className="w-full max-w-sm space-y-4">
          <Button 
            onClick={() => selectLanguage('french')}
            variant="outline"
            className="w-full py-6 text-xl font-medium border-2 border-blue-600 text-gray-800 bg-white hover:bg-blue-50 rounded-full"
          >
            FRANÇAIS
          </Button>
          
          <Button 
            onClick={() => selectLanguage('arabic')}
            variant="outline"
            className="w-full py-6 text-xl font-medium border-2 border-blue-600 text-gray-800 bg-white hover:bg-blue-50 rounded-full"
          >
            ARABE
          </Button>
          
          <Button 
            onClick={() => selectLanguage('english')}
            variant="outline"
            className="w-full py-6 text-xl font-medium border-2 border-blue-600 text-gray-800 bg-white hover:bg-blue-50 rounded-full"
          >
            ANGLAIS
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
