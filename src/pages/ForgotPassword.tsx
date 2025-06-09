
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Mail } from 'lucide-react';

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Password reset request for:', email);
    setIsSubmitted(true);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col justify-center px-8">
        <Card className="w-full max-w-md mx-auto">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-green-100 rounded-full w-16 h-16 flex items-center justify-center">
              <Mail className="h-8 w-8 text-green-600" />
            </div>
            <CardTitle className="text-xl">Email Envoyé</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-gray-600">
              Un lien de réinitialisation a été envoyé à {email}
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="w-full bg-blue-600 hover:bg-blue-700"
            >
              Retour à la connexion
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <div className="flex items-center px-4 py-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/login')}
          className="mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold">Mot de passe oublié</h1>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">EZWatiqa</h2>
          <p className="text-gray-600">Entrez votre email pour réinitialiser votre mot de passe</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email">Adresse email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3"
              placeholder="votre@email.com"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-full"
          >
            Envoyer le lien de réinitialisation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
