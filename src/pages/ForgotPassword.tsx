
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
      <div className="min-h-screen bg-background flex flex-col justify-center px-8">
        <Card className="w-full max-w-md mx-auto bg-card border-border">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-foreground">Email Envoyé</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            <p className="text-muted-foreground">
              Un lien de réinitialisation a été envoyé à {email}
            </p>
            <Button 
              onClick={() => navigate('/login')}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              Retour à la connexion
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="flex items-center px-4 py-4">
        <Button 
          variant="ghost" 
          size="icon"
          onClick={() => navigate('/login')}
          className="mr-4"
        >
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <h1 className="text-xl font-semibold text-foreground">Mot de passe oublié</h1>
      </div>

      <div className="flex-1 flex flex-col justify-center px-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-primary mb-4">EZWatiqa</h2>
          <p className="text-muted-foreground">Entrez votre email pour réinitialiser votre mot de passe</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-foreground">Adresse email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full py-3 bg-card border-border text-foreground"
              placeholder="votre@email.com"
              required
            />
          </div>

          <Button 
            type="submit"
            className="w-full py-3 bg-primary hover:bg-primary/90 text-primary-foreground font-medium rounded-full"
          >
            Envoyer le lien de réinitialisation
          </Button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;
