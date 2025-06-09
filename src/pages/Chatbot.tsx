
import React, { useState, useRef, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Send, Mic, MicOff, Volume2, VolumeX } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';
import LanguageSelector from '@/components/LanguageSelector';

const Chatbot = () => {
  const navigate = useNavigate();
  const { t, language, isRTL } = useLanguage();
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: t('chatbot.welcome'),
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Predefined questions in multiple languages
  const predefinedQuestions = {
    french: [
      "Comment télécharger mes documents ?",
      "Quels documents sont obligatoires ?",
      "Comment contacter mon tuteur ?",
      "Où trouve-t-on les informations de bourse ?",
      "Comment modifier mes informations personnelles ?",
      "Quels sont les délais pour les inscriptions ?"
    ],
    arabic: [
      "كيفية تحميل وثائقي؟",
      "ما هي الوثائق الإجبارية؟",
      "كيفية الاتصال بالولي؟",
      "أين أجد معلومات المنحة؟",
      "كيفية تعديل معلوماتي الشخصية؟",
      "ما هي مواعيد التسجيل؟"
    ],
    english: [
      "How to upload my documents?",
      "What documents are mandatory?",
      "How to contact my tutor?",
      "Where to find scholarship information?",
      "How to modify my personal information?",
      "What are the registration deadlines?"
    ],
    tamazight: [
      "ⵎⴰⵎⴽ ⴰⴷ ⴰⵙⵙⴰⵍⵉ ⵜⵇⴰⵔⴹⵉⵏⵉⵏⵓ?",
      "ⵎⴰⵜⵇⴰⵔⴹⵉⵏ ⵉⵜⵜⵓⵙⴰⵔⵏ?",
      "ⵎⴰⵎⴽ ⴰⴷ ⵎⵢⴰⵡⴰⵙⵖ ⴷ ⵓⵎⵔⴰⴱⵓ?",
      "ⵎⴰⵏⵉ ⴰⴷ ⴰⴼⵖ ⵜⵎⵖⵔⵉⵏ ⵏ ⵜⵎⴰⵡⴰⵙⵜ?",
      "ⵎⴰⵎⴽ ⴰⴷ ⵙⵏⴼⵍⵖ ⵜⵎⵖⵔⵉⵏⵉⵏⵓ?",
      "ⵎⴰⵜⵉⵏ ⵏ ⴰⵙⴽⵍⵙ?"
    ]
  };

  // Bot responses in multiple languages
  const botResponses = {
    french: {
      "télécharger": "Pour télécharger vos documents, rendez-vous dans la section 'Autres Documents' depuis le tableau de bord. Cliquez sur la catégorie de document souhaitée et suivez les instructions.",
      "obligatoire": "Les documents obligatoires incluent : carte d'identité ou passeport, photo d'identité récente, certificat médical, justificatif de domicile, et vos diplômes précédents.",
      "tuteur": "Les informations de votre tuteur légal se trouvent dans la section 'Tuteur Légal' du tableau de bord. Vous pouvez y consulter et modifier ses coordonnées.",
      "bourse": "Les informations de bourse sont dans la section 'Informations Spécifiques' sous 'Informations Administratives'. Vous pouvez y renseigner le type et montant de votre bourse.",
      "modifier": "Vous pouvez modifier vos informations personnelles en allant dans la section correspondante depuis le tableau de bord. N'oubliez pas de sauvegarder vos modifications.",
      "délai": "Les délais d'inscription varient selon les formations. Consultez le calendrier académique ou contactez votre secrétariat pédagogique pour plus d'informations.",
      "default": "Je comprends votre question. Pour une assistance personnalisée, je vous recommande de consulter les différentes sections de votre tableau de bord ou de contacter directement votre secrétariat pédagogique."
    },
    arabic: {
      "تحميل": "لتحميل وثائقك، اذهب إلى قسم 'وثائق أخرى' من لوحة التحكم. انقر على فئة الوثيقة المطلوبة واتبع التعليمات.",
      "إجبارية": "تشمل الوثائق الإجبارية: بطاقة الهوية أو جواز السفر، صورة شخصية حديثة، شهادة طبية، مبرر السكن، وشهاداتك السابقة.",
      "ولي": "معلومات وليك القانوني موجودة في قسم 'الولي القانوني' في لوحة التحكم. يمكنك الاطلاع وتعديل معلومات الاتصال الخاصة به.",
      "منحة": "معلومات المنحة في قسم 'معلومات محددة' تحت 'المعلومات الإدارية'. يمكنك إدخال نوع ومبلغ منحتك.",
      "تعديل": "يمكنك تعديل معلوماتك الشخصية بالذهاب إلى القسم المقابل من لوحة التحكم. لا تنس حفظ تعديلاتك.",
      "مواعيد": "تختلف مواعيد التسجيل حسب التخصصات. استشر التقويم الأكاديمي أو اتصل بأمانة كليتك للمزيد من المعلومات.",
      "default": "أفهم سؤالك. للحصول على مساعدة شخصية، أنصحك بمراجعة الأقسام المختلفة في لوحة التحكم أو الاتصال مباشرة بأمانة كليتك."
    },
    english: {
      "upload": "To upload your documents, go to the 'Other Documents' section from the dashboard. Click on the desired document category and follow the instructions.",
      "mandatory": "Mandatory documents include: ID card or passport, recent ID photo, medical certificate, proof of residence, and your previous diplomas.",
      "tutor": "Your legal guardian's information is in the 'Legal Guardian' section of the dashboard. You can view and modify their contact details there.",
      "scholarship": "Scholarship information is in the 'Specific Information' section under 'Administrative Information'. You can enter your scholarship type and amount there.",
      "modify": "You can modify your personal information by going to the corresponding section from the dashboard. Don't forget to save your changes.",
      "deadline": "Registration deadlines vary by program. Check the academic calendar or contact your faculty's secretariat for more information.",
      "default": "I understand your question. For personalized assistance, I recommend consulting the different sections of your dashboard or contacting your faculty secretariat directly."
    },
    tamazight: {
      "ⴰⵙⵙⴰⵍⵉ": "ⵃⵎⴰ ⴰⴷ ⵜⴰⵙⵙⴰⵍⵉⴷ ⵜⵇⴰⵔⴹⵉⵏⵏⵓⵏ, ⴷⴷⵓ ⵙ ⵢⵉⵃⵔⵉⵛ ⵏ 'ⵜⵇⴰⵔⴹⵉⵏ ⵢⴰⴹⵏ' ⵙⴳ ⵜⴰⴼⵍⵡⵉⵜ ⵏ ⵓⵎⵜⵜⵓ.",
      "ⵉⵜⵜⵓⵙⴰⵔ": "ⵜⵇⴰⵔⴹⵉⵏ ⵉⵜⵜⵓⵙⴰⵔⵏ: ⵜⴰⴽⴰⵔⴹⴰ ⵏ ⵓⵙⵓⵍ, ⵜⵓⵙⵙⵏⴰ ⵜⴰⵎⴰⵢⵏⵓⵜ, ⵜⵉⴱⵔⴰⵜ ⵏ ⵓⴷⴷⴰⵏ...",
      "ⵓⵎⵔⴰⴱⵓ": "ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵎⵔⴰⴱⵓⵏⵏⵓⵏ ⵜⵍⵍⴰⵏⵜ ⴳ ⵢⵉⵃⵔⵉⵛ ⵏ 'ⴰⵎⵔⴰⴱⵓ ⵏ ⵓⵣⵔⴼ'.",
      "ⵜⵎⴰⵡⴰⵙⵜ": "ⵜⵎⵖⵔⵉⵏ ⵏ ⵜⵎⴰⵡⴰⵙⵜ ⵜⵍⵍⴰⵏⵜ ⴳ ⵢⵉⵃⵔⵉⵛ ⵏ 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵙⵍⴰⵢ'.",
      "ⵙⵏⴼⵍ": "ⵜⵖⵉⵍⴷ ⴰⴷ ⵜⵙⵏⴼⵍⴷ ⵜⵎⵖⵔⵉⵏⵏⵓⵏ ⵙ ⵓⴷⴷⵓ ⵙ ⵢⵉⵃⵔⵉⵛ ⵉⵎⵢⴰⵙⴰⵏ.",
      "ⵜⵉⵣⵉ": "ⵜⵉⵣⵉⵢⵉⵏ ⵏ ⵓⵙⴽⵍⵙ ⵎⵣⴰⵔⴰⵢⵏⵜ ⵙ ⵓⵙⵍⵎⴷ. ⵙⵙⴼⵔⵓ ⴰⵙⵎⵏⵉⴷ ⴰⵏⴰⵙⵉⵔⴰⵎ.",
      "default": "ⴰⵔⵎⵖ ⴰⵙⵇⵙⵉⵏⵏⵓⵏ. ⵃⵎⴰ ⴰⴷ ⵜⴰⵡⵉⴷ ⴰⵏⴰⵔ ⵓⴷⴷⵉⵙ, ⵙⵙⴼⵔⵓ ⵉⵃⵔⵉⵛⵏ ⴱⴰⵀⵔⴰ ⵏ ⵜⴰⴼⵍⵡⵉⵜⵏⵏⵓⵏ."
    }
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
        
        if (isSpeaking) {
          speakText(botResponse);
        }
      }, 1000);

      setInputMessage('');
    }
  };

  const generateBotResponse = (input: string): string => {
    const lowerInput = input.toLowerCase();
    const responses = botResponses[language] || botResponses.french;
    
    for (const [keyword, response] of Object.entries(responses)) {
      if (keyword !== 'default' && lowerInput.includes(keyword)) {
        return response;
      }
    }

    return responses.default;
  };

  const handleVoiceInput = () => {
    if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
      const SpeechRecognition = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
      const recognition = new SpeechRecognition();
      
      const langMap = {
        french: 'fr-FR',
        arabic: 'ar-MA',
        english: 'en-US',
        tamazight: 'fr-FR' // Fallback to French for Tamazight
      };
      
      recognition.lang = langMap[language];
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
      const langMap = {
        french: 'fr-FR',
        arabic: 'ar-SA',
        english: 'en-US',
        tamazight: 'fr-FR'
      };
      utterance.lang = langMap[language];
      window.speechSynthesis.speak(utterance);
    }
  };

  const toggleSpeaking = () => {
    setIsSpeaking(!isSpeaking);
    if (isSpeaking) {
      window.speechSynthesis.cancel();
    }
  };

  const currentQuestions = predefinedQuestions[language] || predefinedQuestions.french;

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-red-50 flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-green-600 to-red-600 text-white px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/dashboard')}
              className={`${isRTL ? 'ml-4' : 'mr-4'} text-white hover:bg-white/20`}
            >
              <ArrowLeft className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{t('chatbot.title')}</h1>
              <p className="text-green-100 text-sm">{t('chatbot.subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSpeaking}
              className="text-white hover:bg-white/20"
            >
              {isSpeaking ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
            </Button>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-4 bg-white border-b">
        <p className="text-sm text-gray-600 mb-3">Questions fréquentes :</p>
        <div className="flex flex-wrap gap-2">
          {currentQuestions.slice(0, 3).map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setInputMessage(question)}
              className="text-xs border-green-300 hover:bg-green-50"
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
              className={`flex ${message.isBot ? (isRTL ? 'justify-end' : 'justify-start') : (isRTL ? 'justify-start' : 'justify-end')}`}
            >
              <div
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                  message.isBot
                    ? 'bg-gray-200 text-gray-800'
                    : 'bg-gradient-to-r from-green-600 to-red-600 text-white'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-gray-500' : 'text-green-100'}`}>
                  {message.timestamp.toLocaleTimeString(language === 'arabic' ? 'ar-MA' : 'fr-FR', { 
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
            placeholder={t('chatbot.placeholder')}
            onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
            className="flex-1"
          />
          <Button
            variant="outline"
            size="icon"
            onClick={handleVoiceInput}
            className={isListening ? 'bg-red-100 border-red-300' : 'border-green-300 hover:bg-green-50'}
          >
            {isListening ? <MicOff className="h-4 w-4 text-red-600" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSendMessage} className="bg-gradient-to-r from-green-600 to-red-600">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {isListening && (
          <p className="text-xs text-red-600 mt-1 animate-pulse">
            {t('chatbot.listening')}
          </p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
