
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';

const Chatbot = () => {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: "Bonjour ! Je suis votre assistant EZWatiqa. Comment puis-je vous aider aujourd'hui ?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const predefinedQuestions = [
    "Comment télécharger mes documents ?",
    "Quels documents sont obligatoires ?",
    "Comment contacter mon tuteur ?",
    "Où trouve-t-on les informations de bourse ?",
    "Comment modifier mes informations personnelles ?",
    "Quels sont les délais pour les inscriptions ?"
  ];

  const botResponses: Record<string, string> = {
    "télécharger": "Pour télécharger vos documents, rendez-vous dans la section 'Autres Documents' depuis le tableau de bord. Cliquez sur la catégorie de document souhaitée et suivez les instructions.",
    "obligatoire": "Les documents obligatoires incluent : carte d'identité ou passeport, photo d'identité récente, certificat médical, justificatif de domicile, et vos diplômes précédents.",
    "tuteur": "Les informations de votre tuteur légal se trouvent dans la section 'Tuteur Légal' du tableau de bord. Vous pouvez y consulter et modifier ses coordonnées.",
    "bourse": "Les informations de bourse sont dans la section 'Informations Spécifiques' sous 'Informations Administratives'. Vous pouvez y renseigner le type et montant de votre bourse.",
    "modifier": "Vous pouvez modifier vos informations personnelles en allant dans la section correspondante depuis le tableau de bord. N'oubliez pas de sauvegarder vos modifications.",
    "délai": "Les délais d'inscription varient selon les formations. Consultez le calendrier académique ou contactez votre secrétariat pédagogique pour plus d'informations."
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSendMessage = () => {
    if (inputMessage.trim()) {
      const userMessage = {
        id: messages.length + 1,
        text: inputMessage,
        isBot: false,
        timestamp: new Date()
      };

      setMessages(prev => [...prev, userMessage]);

      // Generate bot response
      setTimeout(() => {
        const botResponse = generateBotResponse(inputMessage);
        const botMessage = {
          id: messages.length + 2,
          text: botResponse,
          isBot: true,
          timestamp: new Date()
        };
        setMessages(prev => [...prev, botMessage]);
        
        // Speak the response if speaking is enabled
        if (isSpeaking) {
          speakText(botResponse);
        }
      }, 1000);

      setInputMessage('');
    }
  };

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    
    for (const [keyword, response] of Object.entries(botResponses)) {
      if (lowerInput.includes(keyword)) {
        return response;
      }
    }

    return "Je comprends votre question. Pour une assistance personnalisée, je vous recommande de consulter les différentes sections de votre tableau de bord ou de contacter directement votre secrétariat pédagogique.";
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      recognition.lang = 'fr-FR';
      recognition.onstart = () => setIsListening(true);
      recognition.onend = () => setIsListening(false);
      
      recognition.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript;
        setInputMessage(transcript);
      };

      recognition.start();
    } else {
      alert('La reconnaissance vocale n\'est pas supportée par votre navigateur.');
    }
  };

  const speakText = (text: string) => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = 'fr-FR';
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/dashboard')}
              className="mr-4 text-white hover:bg-blue-700"
            >
              <ArrowLeft className="h-6 w-6" />
            </Button>
            <div>
              <h1 className="text-xl font-bold">Assistant IA</h1>
              <p className="text-blue-100 text-sm">Chatbot intelligent EZWatiqa</p>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSpeaking}
            className="text-white hover:bg-blue-700"
          >
            {isSpeaking ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-4 bg-white border-b">
        <p className="text-sm text-gray-600 mb-3">Questions fréquentes :</p>
        <div className="flex flex-wrap gap-2">
          {predefinedQuestions.slice(0, 3).map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setInputMessage(question)}
              className="text-xs"
            >
              {question}
            </Button>
          ))}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 px-6 py-4 overflow-y-auto">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-blue-600 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-blue-100'}`}>
                  {message.timestamp.toLocaleTimeString('fr-FR', { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </p>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="px-6 py-4 bg-white border-t">
        <div className="flex items-center space-x-2">
          <Input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Tapez votre message..."
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={handleVoiceInput}
            className={isListening ? 'bg-red-100 border-red-300' : ''}
          >
            {isListening ? <MicOff className="h-4 w-4 text-red-600" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSendMessage}>
            <Send className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Chatbot;
