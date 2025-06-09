
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    // Add registration logic here
    console.log('Registration attempt:', formData);
    navigate('/email-verification');
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header with back button */}
      <div className="flex items-center px-4 py-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/login')}
          className="mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Inscription</h1>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">EZWatiqa</h2>
          <p className="text-gray-600">Créer votre compte</p>
        </div>

        <form onSubmit={handleRegister} className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">Prénom</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full py-3"
                required
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Nom</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full py-3"
                required
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="password">Mot de passe</Label>
            <Input
              id="password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full py-3"
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirmer le mot de passe</Label>
            <Input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full py-3"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full"
          >
            S'inscrire
          </Button>
        </form>

        <div className="mt-6 text-center">
          <div className="text-gray-600">
            Déjà un compte ?{' '}
            <Button 
              variant="link" 
              onClick={() => navigate('/login')}
              className="text-blue-600 p-0"
            >
              Se connecter
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
