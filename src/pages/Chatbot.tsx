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

  // Enhanced predefined questions in multiple languages
  const predefinedQuestions = {
    french: [
      "Comment télécharger mes documents ?",
      "Quels documents sont obligatoires ?",
      "Comment contacter mon tuteur ?",
      "Où trouve-t-on les informations de bourse ?",
      "Comment modifier mes informations personnelles ?",
      "Quels sont les délais pour les inscriptions ?",
      "Comment accéder au blog universitaire ?",
      "Quelles sont les bourses disponibles ?"
    ],
    arabic: [
      "كيفية تحميل وثائقي؟",
      "ما هي الوثائق الإجبارية؟",
      "كيفية الاتصال بالولي؟",
      "أين أجد معلومات المنحة؟",
      "كيفية تعديل معلوماتي الشخصية؟",
      "ما هي مواعيد التسجيل؟",
      "كيفية الوصول للمدونة الجامعية؟",
      "ما هي المنح المتاحة؟"
    ],
    english: [
      "How to upload my documents?",
      "What documents are mandatory?",
      "How to contact my tutor?",
      "Where to find scholarship information?",
      "How to modify my personal information?",
      "What are the registration deadlines?",
      "How to access the university blog?",
      "What scholarships are available?"
    ],
    tamazight: [
      "ⵎⴰⵎⴽ ⴰⴷ ⴰⵙⵙⴰⵍⵉ ⵜⵇⴰⵔⴹⵉⵏⵉⵏⵓ?",
      "ⵎⴰⵜⵇⴰⵔⴹⵉⵏ ⵉⵜⵜⵓⵙⴰⵔⵏ?",
      "ⵎⴰⵎⴽ ⴰⴷ ⵎⵢⴰⵡⴰⵙⵖ ⴷ ⵓⵎⵔⴰⴱⵓ?",
      "ⵎⴰⵏⵉ ⴰⴷ ⴰⴼⵖ ⵜⵎⵖⵔⵉⵏ ⵏ ⵜⵎⴰⵡⴰⵙⵜ?",
      "ⵎⴰⵎⴽ ⴰⴷ ⵙⵏⴼⵍⵖ ⵜⵎⵖⵔⵉⵏⵉⵏⵓ?",
      "ⵎⴰⵜⵉⵏ ⵏ ⴰⵙⴽⵍⵙ?",
      "ⵎⴰⵎⴽ ⴰⴷ ⴰⵡⵉⵖ ⵙ ⵓⴱⵍⵓⴳ?",
      "ⵎⴰⵜⵉⵏ ⵜⵎⴰⵡⴰⵙⵉⵏ?"
    ]
  };

  // Enhanced bot responses with more detailed information
  const botResponses = {
    french: {
      "télécharger": "📄 Pour télécharger vos documents :\n\n1. Connectez-vous à votre espace EZWatiqa\n2. Accédez à la section 'Autres Documents'\n3. Sélectionnez la catégorie de document souhaitée\n4. Cliquez sur 'Télécharger' et suivez les instructions\n5. Vérifiez que le format est accepté (PDF, JPG, PNG)\n\n💡 Conseil: Organisez vos documents par catégorie pour un accès plus rapide!",
      
      "obligatoire": "📋 Documents obligatoires pour l'inscription :\n\n✅ Carte d'identité nationale ou passeport\n✅ Photo d'identité récente (fond blanc)\n✅ Certificat médical (moins de 3 mois)\n✅ Justificatif de domicile récent\n✅ Diplôme du baccalauréat ou équivalent\n✅ Relevé de notes du bac\n✅ Certificat de naissance\n\n⚠️ Important: Tous les documents doivent être en format PDF ou image haute qualité.",
      
      "tuteur": "👥 Informations tuteur légal :\n\nVous pouvez gérer les informations de votre tuteur dans la section 'Tuteur Légal' :\n• Consulter ses coordonnées\n• Modifier les informations de contact\n• Ajouter une pièce d'identité\n• Mettre à jour l'adresse\n\n📞 En cas de problème, contactez le secrétariat de votre faculté.",
      
      "bourse": "💰 Informations sur les bourses :\n\n🎯 Types de bourses disponibles :\n• Bourse d'excellence académique\n• Bourse sociale (critères sociaux)\n• Bourse de mérite sportif\n• Bourse pour étudiants en situation de handicap\n\n📍 Accès: Section 'Informations Spécifiques' > 'Informations Administratives'\n\n💡 Astuce: Consultez régulièrement le blog pour les appels à candidatures!",
      
      "modifier": "✏️ Modification des informations personnelles :\n\n1. Accédez à la section 'Informations Personnelles'\n2. Cliquez sur 'Modifier'\n3. Effectuez vos changements\n4. Vérifiez les informations\n5. Cliquez sur 'Sauvegarder'\n\n⚠️ Attention: Certaines modifications peuvent nécessiter une validation administrative.",
      
      "délai": "📅 Délais d'inscription 2024 :\n\n🎓 Licence :\n• 1ère inscription: 15 juin - 30 septembre\n• Réinscription: 1er juillet - 15 octobre\n\n🎓 Master :\n• Candidatures: 1er mai - 30 juin\n• Inscription définitive: après admission\n\n📞 Contactez votre faculté pour des informations spécifiques à votre filière.",
      
      "blog": "📖 Blog Universitaire EZWatiqa :\n\nDécouvrez notre blog riche en contenus :\n• Articles sur l'orientation universitaire\n• Guides pratiques pour les étudiants\n• Actualités des universités marocaines\n• Conseils pour réussir ses études\n• Informations sur les bourses\n\n🔗 Accès direct via le menu principal > 'Blog Universitaire'",
      
      "bourses": "🏆 Bourses disponibles 2024 :\n\n💡 Bourse d'Excellence (500-2000 DH/mois)\n• Critère: Mention TB au bac + moyenne >16/20\n\n🤝 Bourse Sociale (300-1500 DH/mois)\n• Critère: Revenu familial < 50,000 DH/an\n\n🏃 Bourse Sportive (400-1000 DH/mois)\n• Critère: Performance sportive nationale\n\n♿ Bourse Handicap (600-2000 DH/mois)\n• Critère: Situation de handicap certifiée",
      
      "default": "🤖 Je comprends votre question et je suis là pour vous aider !\n\nPour une assistance personnalisée, vous pouvez :\n• Explorer les différentes sections de votre tableau de bord\n• Consulter notre blog universitaire pour des guides détaillés\n• Contacter directement votre secrétariat pédagogique\n• Poser une question plus spécifique\n\n💬 N'hésitez pas à reformuler votre question pour que je puisse mieux vous aider !"
    },
    arabic: {
      "تحميل": "📄 لتحميل وثائقك:\n\n1. قم بتسجيل الدخول إلى حسابك في EZWatiqa\n2. انتقل إلى قسم 'وثائق أخرى'\n3. اختر فئة الوثيقة المطلوبة\n4. انقر على 'تحميل' واتبع التعليمات\n5. تأكد من أن التنسيق مقبول (PDF، JPG، PNG)\n\n💡 نصيحة: نظم وثائقك حسب الفئات للوصول السريع!",
      
      "إجبارية": "📋 الوثائق الإجبارية للتسجيل:\n\n✅ بطاقة الهوية الوطنية أو جواز السفر\n✅ صورة شخصية حديثة (خلفية بيضاء)\n✅ شهادة طبية (أقل من 3 أشهر)\n✅ مبرر السكن حديث\n✅ شهادة البكالوريا أو ما يعادلها\n✅ كشف نقاط البكالوريا\n✅ رسم الولادة\n\n⚠️ مهم: جميع الوثائق يجب أن تكون بصيغة PDF أو صورة عالية الجودة.",
      
      "default": "🤖 أفهم سؤالك وأنا هنا لمساعدتك!\n\nللحصول على مساعدة شخصية، يمكنك:\n• استكشاف الأقسام المختلفة في لوحة التحكم\n• مراجعة مدونتنا الجامعية للأدلة التفصيلية\n• الاتصال مباشرة بأمانة كليتك\n• طرح سؤال أكثر تحديداً\n\n💬 لا تتردد في إعادة صياغة سؤالك لأتمكن من مساعدتك بشكل أفضل!"
    },
    english: {
      "upload": "📄 To upload your documents:\n\n1. Log into your EZWatiqa account\n2. Go to 'Other Documents' section\n3. Select the desired document category\n4. Click 'Upload' and follow instructions\n5. Ensure format is accepted (PDF, JPG, PNG)\n\n💡 Tip: Organize your documents by category for faster access!",
      
      "default": "🤖 I understand your question and I'm here to help!\n\nFor personalized assistance, you can:\n• Explore different sections of your dashboard\n• Check our university blog for detailed guides\n• Contact your faculty secretariat directly\n• Ask a more specific question\n\n💬 Feel free to rephrase your question so I can better assist you!"
    },
    tamazight: {
      "default": "🤖 ⴰⵔⵎⵖ ⴰⵙⵇⵙⵉⵏⵏⵓⵏ ⴷ ⵏⵏⴰ ⴷⴰ ⴳ ⵉⵡⵉⴷ ⴰⵏⴰⵔ!\n\nⵃⵎⴰ ⴰⴷ ⵜⴰⵡⵉⴷ ⴰⵏⴰⵔ ⵓⴷⴷⵉⵙ:\n• ⵙⵙⴼⵔⵓ ⵉⵃⵔⵉⵛⵏ ⴱⴰⵀⵔⴰ ⵏ ⵜⴰⴼⵍⵡⵉⵜⵏⵏⵓⵏ\n• ⵙⵙⴼⵔⵓ ⴰⴱⵍⵓⴳⵏⵏⴰⵖ ⴰⵏⴰⵙⵉⵔⴰⵎ\n• ⵎⵢⴰⵡⴰⵙ ⴷ ⵜⴰⵎⴰⵡⴰⵙⵜⵏⵏⵓⵏ\n• ⵙⵇⵙⴰ ⵢⴰⵏ ⵓⵙⵇⵙⵉ ⵓⴷⴷⵉⵙ\n\n💬 ⵙⵏⴼⵍ ⴰⵙⵇⵙⵉⵏⵏⵓⵏ ⴰⴽⴽⵯ ⴰⴷ ⴰⴽⵉⵏ ⴰⵏⴰⵔ ⵓⴳⴳⴰⵔ!"
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
    
    // Enhanced keyword matching
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
        tamazight: 'fr-FR'
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
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Button 
              variant="ghost" 
              size="icon"
              onClick={() => navigate('/home')}
              className={`${isRTL ? 'ml-4' : 'mr-4'} text-primary-foreground hover:bg-primary-foreground/20`}
            >
              <ArrowLeft className={`h-6 w-6 ${isRTL ? 'rotate-180' : ''}`} />
            </Button>
            <div>
              <h1 className="text-xl font-bold">{t('chatbot.title')}</h1>
              <p className="text-primary-foreground/90 text-sm">{t('chatbot.subtitle')}</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleSpeaking}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              {isSpeaking ? <Volume2 className="h-6 w-6" /> : <VolumeX className="h-6 w-6" />}
            </Button>
            <LanguageSelector />
          </div>
        </div>
      </div>

      {/* Quick Questions */}
      <div className="px-6 py-4 bg-card border-b border-border">
        <p className="text-sm text-muted-foreground mb-3">Questions fréquentes :</p>
        <div className="flex flex-wrap gap-2">
          {currentQuestions.slice(0, 3).map((question, index) => (
            <Button
              key={index}
              variant="outline"
              size="sm"
              onClick={() => setInputMessage(question)}
              className="text-xs border-primary/30 hover:bg-primary/10"
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
                className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg whitespace-pre-wrap ${
                  message.isBot
                    ? 'bg-muted text-muted-foreground'
                    : 'bg-gradient-to-r from-primary to-primary/80 text-primary-foreground'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isBot ? 'text-muted-foreground' : 'text-primary-foreground/80'}`}>
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
      <div className="px-6 py-4 bg-card border-t border-border">
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
            className={isListening ? 'bg-destructive/10 border-destructive/30' : 'border-primary/30 hover:bg-primary/10'}
          >
            {isListening ? <MicOff className="h-4 w-4 text-destructive" /> : <Mic className="h-4 w-4" />}
          </Button>
          <Button onClick={handleSendMessage} className="bg-gradient-to-r from-primary to-primary/80">
            <Send className="h-4 w-4" />
          </Button>
        </div>
        {isListening && (
          <p className="text-xs text-destructive mt-1 animate-pulse">
            {t('chatbot.listening')}
          </p>
        )}
      </div>
    </div>
  );
};

export default Chatbot;
