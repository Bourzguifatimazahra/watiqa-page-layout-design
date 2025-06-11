
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { MessageCircle, X, Send, Mic, MicOff } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const AssistantBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour! Je suis votre assistant EZWatiqa. Comment puis-je vous aider avec vos documents universitaires?",
      isBot: true,
      timestamp: new Date()
    }
  ]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const newMessage = {
      id: messages.length + 1,
      text: message,
      isBot: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newMessage]);
    setMessage('');

    // Enhanced bot responses
    setTimeout(() => {
      let botResponseText = "Je comprends votre question. Pour vous aider avec vos documents, je peux vous guider sur l'upload, la validation, ou les exigences spécifiques. Que souhaitez-vous faire exactement?";
      
      const lowerMessage = message.toLowerCase();
      if (lowerMessage.includes('document')) {
        botResponseText = "📄 Pour gérer vos documents :\n\n• Accédez à 'Autres Documents'\n• Sélectionnez la catégorie\n• Téléchargez vos fichiers\n• Vérifiez la validation\n\nBesoin d'aide spécifique ?";
      } else if (lowerMessage.includes('inscription')) {
        botResponseText = "📋 Pour l'inscription :\n\n• Documents obligatoires requis\n• Dates limites à respecter\n• Procédure de validation\n• Suivi du dossier\n\nQuelle information cherchez-vous ?";
      } else if (lowerMessage.includes('bourse')) {
        botResponseText = "💰 Informations bourses :\n\n• Bourses d'excellence\n• Bourses sociales\n• Critères d'éligibilité\n• Procédure de candidature\n\nQuel type de bourse vous intéresse ?";
      }

      const botResponse = {
        id: messages.length + 2,
        text: botResponseText,
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      setTimeout(() => {
        setMessage("Comment uploader mes documents?");
        setIsListening(false);
      }, 3000);
    }
  };

  if (!isOpen) {
    return (
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          onClick={() => setIsOpen(true)}
          className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-lg"
          size="icon"
        >
          <div className="relative">
            <MessageCircle className="h-8 w-8 text-primary-foreground" />
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-destructive rounded-full animate-pulse"></div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-xl border-border">
        <CardHeader className="bg-primary text-primary-foreground rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary-foreground rounded-full flex items-center justify-center">
                <span className="text-primary text-lg">🎓</span>
              </div>
              <CardTitle className="text-sm">Assistant EZWatiqa</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </CardHeader>
        
        <CardContent className="p-0 flex flex-col h-80">
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex ${msg.isBot ? 'justify-start' : 'justify-end'}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm whitespace-pre-wrap ${
                    msg.isBot
                      ? 'bg-muted text-muted-foreground'
                      : 'bg-primary text-primary-foreground'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-border p-3">
            <div className="flex space-x-2">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Tapez votre message..."
                className="flex-1"
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              />
              <Button
                variant="outline"
                size="icon"
                onClick={handleVoiceToggle}
                className={isListening ? 'bg-destructive/10 border-destructive/30' : 'border-primary/30'}
              >
                {isListening ? (
                  <MicOff className="h-4 w-4 text-destructive" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {isListening && (
              <p className="text-xs text-destructive mt-1 animate-pulse">
                🎤 Écoute en cours...
              </p>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default AssistantBot;
