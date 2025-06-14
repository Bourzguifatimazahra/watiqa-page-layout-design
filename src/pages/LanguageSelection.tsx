
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { useLanguage } from '@/hooks/useLanguage';

const LanguageSelection = () => {
  const navigate = useNavigate();
  const { setLanguage, t } = useLanguage();

  const selectLanguage = (language: string) => {
    setLanguage(language as any);
    navigate('/login');
  };

  const languages = [
    { code: 'french', name: 'FRANÇAIS', flag: '🇫🇷' },
    { code: 'arabic', name: 'العربية', flag: '🇲🇦' },
    { code: 'english', name: 'ENGLISH', flag: '🇬🇧' },
    { code: 'tamazight', name: 'ⵜⴰⵎⴰⵣⵉⵖⵜ', flag: 'ⵣ' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/20 flex flex-col">
      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-8">
        {/* Logo with Moroccan colors */}
        <div className="text-center mb-16">
          <div className="mb-4">
            <span className="text-6xl">🎓</span>
          </div>
          <h1 className="text-5xl font-bold text-primary mb-4">
            EZWatiqa
          </h1>
          <p className="text-muted-foreground text-lg">{t('lang.selectLanguage')}</p>
          <div className="mt-2 text-sm text-muted-foreground">
            🇲🇦 {t('welcome.moroccanUniversities')}
          </div>
        </div>

        {/* Language Options */}
        <div className="w-full max-w-sm space-y-4">
          {languages.map((lang) => (
            <Button 
              key={lang.code}
              onClick={() => selectLanguage(lang.code)}
              variant="outline"
              className="w-full py-6 text-xl font-medium border-2 border-primary text-foreground bg-card hover:bg-primary/10 rounded-full transition-all duration-200 hover:scale-105"
            >
              <div className="flex items-center justify-center space-x-3">
                <span className="text-2xl">{lang.flag}</span>
                <span>{lang.name}</span>
              </div>
            </Button>
          ))}
        </div>

        {/* Footer */}
        <div className="mt-8 text-center text-sm text-muted-foreground">
          <p>🏛️ Universités Marocaines • جامعات مغربية</p>
        </div>
      </div>
    </div>
  );
};

export default LanguageSelection;
