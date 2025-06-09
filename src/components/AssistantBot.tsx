
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

    // Simuler la réponse du bot
    setTimeout(() => {
      const botResponse = {
        id: messages.length + 2,
        text: "Je comprends votre question. Pour vous aider avec vos documents, je peux vous guider sur l'upload, la validation, ou les exigences spécifiques. Que souhaitez-vous faire exactement?",
        isBot: true,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botResponse]);
    }, 1000);
  };

  const handleVoiceToggle = () => {
    setIsListening(!isListening);
    if (!isListening) {
      // Simuler la reconnaissance vocale
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
          className="h-16 w-16 rounded-full bg-blue-600 hover:bg-blue-700 shadow-lg"
          size="icon"
        >
          <div className="relative">
            <MessageCircle className="h-8 w-8 text-white" />
            <div className="absolute -top-2 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></div>
          </div>
        </Button>
      </div>
    );
  }

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Card className="w-80 h-96 shadow-xl">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center">
                <span className="text-blue-600 text-lg">🎓</span>
              </div>
              <CardTitle className="text-sm">Assistant EZWatiqa</CardTitle>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:bg-blue-700"
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
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
                    msg.isBot
                      ? 'bg-gray-100 text-gray-800'
                      : 'bg-blue-600 text-white'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t p-3">
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
                className={isListening ? 'bg-red-100 border-red-300' : ''}
              >
                {isListening ? (
                  <MicOff className="h-4 w-4 text-red-600" />
                ) : (
                  <Mic className="h-4 w-4" />
                )}
              </Button>
              <Button onClick={handleSendMessage} size="icon">
                <Send className="h-4 w-4" />
              </Button>
            </div>
            {isListening && (
              <p className="text-xs text-red-600 mt-1 animate-pulse">
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
