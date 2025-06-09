
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '@/components/LanguageSelector';

const Login = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    navigate('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={() => navigate('/language')}
            className={`${isRTL ? 'ml-4' : 'mr-4'}`}
          >
            <ArrowLeft className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
          </Button>
          <h1 className="text-xl font-semibold">{t('auth.login')}</h1>
        </div>
        <LanguageSelector />
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <div className="mb-4">
            <span className="text-5xl">🎓</span>
          </div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-red-600 to-green-600 bg-clip-text text-transparent mb-4">
            EZWatiqa
          </h2>
          <p className="text-gray-600">{t('welcome.subtitle')}</p>
          <div className="mt-2 text-sm text-gray-500 flex items-center justify-center space-x-2">
            <span>🇲🇦</span>
            <span>{t('welcome.moroccanUniversities')}</span>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">{t('auth.email')}</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">{t('auth.password')}</Label>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full py-3"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-green-600 to-red-600 hover:from-green-700 hover:to-red-700 text-white font-medium rounded-full"
          >
            {t('auth.connect')}
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Button 
            variant="link" 
            onClick={() => navigate('/forgot-password')}
            className="text-green-600"
          >
            {t('auth.forgotPassword')}
          </Button>
          
          <div className="text-gray-600">
            {t('auth.noAccount')}{' '}
            <Button 
              variant="link" 
              onClick={() => navigate('/register')}
              className="text-red-600 p-0"
            >
              {t('auth.register')}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
