
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { Mail, CheckCircle, RefreshCw } from 'lucide-react';

const EmailVerification = () => {
  const navigate = useNavigate();
  const [isVerified, setIsVerified] = useState(false);
  const [isResending, setIsResending] = useState(false);

  const handleResendEmail = async () => {
    setIsResending(true);
    // Simuler l'envoi d'email
    setTimeout(() => {
      setIsResending(false);
    }, 2000);
  };

  const handleVerifyAndContinue = () => {
    setIsVerified(true);
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  if (isVerified) {
    return (
      <div className="min-h-screen bg-background flex flex-col justify-center px-8">
        <Card className="w-full max-w-md mx-auto bg-card border-border">
          <CardHeader className="text-center">
            <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
              <CheckCircle className="h-8 w-8 text-primary" />
            </div>
            <CardTitle className="text-xl text-primary">Email Vérifié!</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-muted-foreground mb-4">
              Votre compte a été activé avec succès
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col justify-center px-8">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-primary mb-4">EZWatiqa</h2>
      </div>

      <Card className="w-full max-w-md mx-auto bg-card border-border">
        <CardHeader className="text-center">
          <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-16 h-16 flex items-center justify-center">
            <Mail className="h-8 w-8 text-primary" />
          </div>
          <CardTitle className="text-xl text-foreground">Vérifiez votre email</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-4">
          <p className="text-muted-foreground">
            Nous avons envoyé un lien de vérification à votre adresse email. 
            Cliquez sur le lien pour activer votre compte.
          </p>
          
          <div className="space-y-3">
            <Button 
              onClick={handleVerifyAndContinue}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              J'ai vérifié mon email
            </Button>
            
            <Button 
              variant="outline"
              onClick={handleResendEmail}
              disabled={isResending}
              className="w-full border-border text-foreground hover:bg-accent"
            >
              {isResending ? (
                <>
                  <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                'Renvoyer l\'email'
              )}
            </Button>
            
            <Button 
              variant="link"
              onClick={() => navigate('/login')}
              className="w-full text-primary hover:text-primary/80"
            >
              Retour à la connexion
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default EmailVerification;
