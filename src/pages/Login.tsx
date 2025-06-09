
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Login attempt:', { email, password });
    navigate('/home'); // Changed to navigate to home instead of dashboard
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center px-4 py-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/language')}
          className="mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Connexion</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">🎓 EZWatiqa</h2>
          <p className="text-gray-600">Connectez-vous à votre compte</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="password">Mot de passe</Label>
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
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full"
          >
            Se connecter
          </Button>
        </form>

        <div className="mt-6 text-center space-y-4">
          <Button 
            variant="link" 
            onClick={() => navigate('/forgot-password')}
            className="text-blue-600"
          >
            Mot de passe oublié ?
          </Button>
          
          <div className="text-gray-600">
            Pas de compte ?{' '}
            <Button 
              variant="link" 
              onClick={() => navigate('/register')}
              className="text-blue-600 p-0"
            >
              S'inscrire
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
