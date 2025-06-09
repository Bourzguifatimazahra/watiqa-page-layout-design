
import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'french' | 'arabic' | 'english' | 'tamazight';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  isRTL: boolean;
}

const translations = {
  french: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.personalInfo': 'Infos Personnelles',
    'nav.legalTutor': 'Tuteur Légal',
    'nav.contactDetails': 'Coordonnées',
    'nav.specificInfo': 'Infos Spécifiques',
    'nav.otherDocs': 'Autres Documents',
    'nav.chatbot': 'Assistant IA',
    'nav.dashboard': 'Tableau de Bord',
    
    // Login/Auth
    'auth.login': 'Connexion',
    'auth.register': 'S\'inscrire',
    'auth.email': 'Email',
    'auth.password': 'Mot de passe',
    'auth.forgotPassword': 'Mot de passe oublié ?',
    'auth.noAccount': 'Pas de compte ?',
    'auth.hasAccount': 'Déjà un compte ?',
    'auth.connect': 'Se connecter',
    'auth.createAccount': 'Créer un compte',
    
    // Welcome
    'welcome.title': 'Bienvenue sur EZWatiqa',
    'welcome.subtitle': 'Votre assistant universitaire pour gérer vos documents académiques',
    'welcome.getStarted': 'Commencer',
    'welcome.moroccanUniversities': 'Spécialement conçu pour les universités marocaines',
    
    // Language Selection
    'lang.selectLanguage': 'Choisissez votre langue',
    'lang.french': 'FRANÇAIS',
    'lang.arabic': 'العربية',
    'lang.english': 'ENGLISH',
    'lang.tamazight': 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
    
    // Services
    'services.title': 'Nos Services',
    'services.personalInfo': 'Informations Personnelles',
    'services.personalInfoDesc': 'Gérez vos données personnelles',
    'services.documents': 'Gestion des Documents',
    'services.documentsDesc': 'Organisez tous vos documents',
    'services.tutor': 'Tuteur Légal',
    'services.tutorDesc': 'Informations du tuteur',
    'services.assistant': 'Assistant IA',
    'services.assistantDesc': 'Aide intelligente 24/7',
    
    // Chatbot
    'chatbot.title': 'Assistant IA',
    'chatbot.subtitle': 'Chatbot intelligent EZWatiqa',
    'chatbot.placeholder': 'Tapez votre message...',
    'chatbot.listening': '🎤 Écoute en cours...',
    'chatbot.welcome': 'Bonjour ! Je suis votre assistant EZWatiqa. Comment puis-je vous aider aujourd\'hui ?',
    
    // Common
    'common.save': 'Sauvegarder',
    'common.cancel': 'Annuler',
    'common.next': 'Suivant',
    'common.previous': 'Précédent',
    'common.submit': 'Soumettre',
    'common.edit': 'Modifier',
    'common.delete': 'Supprimer',
    'common.required': 'Obligatoire',
  },
  
  arabic: {
    // Navigation
    'nav.home': 'الرئيسية',
    'nav.personalInfo': 'المعلومات الشخصية',
    'nav.legalTutor': 'الولي القانوني',
    'nav.contactDetails': 'تفاصيل الاتصال',
    'nav.specificInfo': 'معلومات محددة',
    'nav.otherDocs': 'وثائق أخرى',
    'nav.chatbot': 'المساعد الذكي',
    'nav.dashboard': 'لوحة التحكم',
    
    // Login/Auth
    'auth.login': 'تسجيل الدخول',
    'auth.register': 'إنشاء حساب',
    'auth.email': 'البريد الإلكتروني',
    'auth.password': 'كلمة المرور',
    'auth.forgotPassword': 'نسيت كلمة المرور؟',
    'auth.noAccount': 'ليس لديك حساب؟',
    'auth.hasAccount': 'لديك حساب بالفعل؟',
    'auth.connect': 'دخول',
    'auth.createAccount': 'إنشاء حساب',
    
    // Welcome
    'welcome.title': 'مرحباً بكم في إي زي واثقة',
    'welcome.subtitle': 'مساعدكم الجامعي لإدارة الوثائق الأكاديمية',
    'welcome.getStarted': 'ابدأ الآن',
    'welcome.moroccanUniversities': 'مصمم خصيصاً للجامعات المغربية',
    
    // Language Selection
    'lang.selectLanguage': 'اختر لغتك',
    'lang.french': 'الفرنسية',
    'lang.arabic': 'العربية',
    'lang.english': 'الإنجليزية',
    'lang.tamazight': 'الأمازيغية',
    
    // Services
    'services.title': 'خدماتنا',
    'services.personalInfo': 'المعلومات الشخصية',
    'services.personalInfoDesc': 'إدارة بياناتك الشخصية',
    'services.documents': 'إدارة الوثائق',
    'services.documentsDesc': 'تنظيم جميع وثائقك',
    'services.tutor': 'الولي القانوني',
    'services.tutorDesc': 'معلومات الولي',
    'services.assistant': 'المساعد الذكي',
    'services.assistantDesc': 'مساعدة ذكية على مدار الساعة',
    
    // Chatbot
    'chatbot.title': 'المساعد الذكي',
    'chatbot.subtitle': 'روبوت المحادثة الذكي إي زي واثقة',
    'chatbot.placeholder': 'اكتب رسالتك...',
    'chatbot.listening': '🎤 جاري الاستماع...',
    'chatbot.welcome': 'مرحباً! أنا مساعدك إي زي واثقة. كيف يمكنني مساعدتك اليوم؟',
    
    // Common
    'common.save': 'حفظ',
    'common.cancel': 'إلغاء',
    'common.next': 'التالي',
    'common.previous': 'السابق',
    'common.submit': 'إرسال',
    'common.edit': 'تعديل',
    'common.delete': 'حذف',
    'common.required': 'مطلوب',
  },
  
  english: {
    // Navigation
    'nav.home': 'Home',
    'nav.personalInfo': 'Personal Info',
    'nav.legalTutor': 'Legal Guardian',
    'nav.contactDetails': 'Contact Details',
    'nav.specificInfo': 'Specific Info',
    'nav.otherDocs': 'Other Documents',
    'nav.chatbot': 'AI Assistant',
    'nav.dashboard': 'Dashboard',
    
    // Login/Auth
    'auth.login': 'Login',
    'auth.register': 'Register',
    'auth.email': 'Email',
    'auth.password': 'Password',
    'auth.forgotPassword': 'Forgot Password?',
    'auth.noAccount': 'No account?',
    'auth.hasAccount': 'Already have an account?',
    'auth.connect': 'Sign In',
    'auth.createAccount': 'Create Account',
    
    // Welcome
    'welcome.title': 'Welcome to EZWatiqa',
    'welcome.subtitle': 'Your university assistant for managing academic documents',
    'welcome.getStarted': 'Get Started',
    'welcome.moroccanUniversities': 'Specially designed for Moroccan universities',
    
    // Language Selection
    'lang.selectLanguage': 'Choose your language',
    'lang.french': 'FRENCH',
    'lang.arabic': 'ARABIC',
    'lang.english': 'ENGLISH',
    'lang.tamazight': 'TAMAZIGHT',
    
    // Services
    'services.title': 'Our Services',
    'services.personalInfo': 'Personal Information',
    'services.personalInfoDesc': 'Manage your personal data',
    'services.documents': 'Document Management',
    'services.documentsDesc': 'Organize all your documents',
    'services.tutor': 'Legal Guardian',
    'services.tutorDesc': 'Guardian information',
    'services.assistant': 'AI Assistant',
    'services.assistantDesc': 'Smart help 24/7',
    
    // Chatbot
    'chatbot.title': 'AI Assistant',
    'chatbot.subtitle': 'EZWatiqa intelligent chatbot',
    'chatbot.placeholder': 'Type your message...',
    'chatbot.listening': '🎤 Listening...',
    'chatbot.welcome': 'Hello! I am your EZWatiqa assistant. How can I help you today?',
    
    // Common
    'common.save': 'Save',
    'common.cancel': 'Cancel',
    'common.next': 'Next',
    'common.previous': 'Previous',
    'common.submit': 'Submit',
    'common.edit': 'Edit',
    'common.delete': 'Delete',
    'common.required': 'Required',
  },
  
  tamazight: {
    // Navigation
    'nav.home': 'ⴰⵙⵎⵍ',
    'nav.personalInfo': 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵎⴷⴰⵏ',
    'nav.legalTutor': 'ⴰⵎⵔⴰⴱⵓ ⵏ ⵓⵣⵔⴼ',
    'nav.contactDetails': 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵜⵎⵢⴰⵡⴰⵙⵜ',
    'nav.specificInfo': 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵙⵍⴰⵢ',
    'nav.otherDocs': 'ⵜⵇⴰⵔⴹⵉⵏ ⵢⴰⴹⵏ',
    'nav.chatbot': 'ⴰⵏⴰⵔ ⴰⵣⵔⴰⵔ',
    'nav.dashboard': 'ⵜⴰⴼⵍⵡⵉⵜ ⵏ ⵓⵎⵜⵜⵓ',
    
    // Login/Auth
    'auth.login': 'ⴰⴽⵛⵛⵓⵎ',
    'auth.register': 'ⴰⵙⴽⵍⵙ',
    'auth.email': 'ⵜⴰⴱⴷⴰ ⵏ ⵓⵏⵙⵙⴰ',
    'auth.password': 'ⴰⵣⵡⴰⵍ ⵓⴷⴷⵉⵙ',
    'auth.forgotPassword': 'ⵜⵏⵙⴰⴷ ⴰⵣⵡⴰⵍ ⵓⴷⴷⵉⵙ?',
    'auth.noAccount': 'ⵓⵔ ⵜⵍⴰⴷ ⵙ ⵓⵎⵉⴹⴰⵏ?',
    'auth.hasAccount': 'ⵜⵍⴰⴷ ⵙ ⵓⵎⵉⴹⴰⵏ?',
    'auth.connect': 'ⴽⵛⵛⵓⵎ',
    'auth.createAccount': 'ⵙⴽⵍⵙ ⴰⵎⵉⴹⴰⵏ',
    
    // Welcome
    'welcome.title': 'ⴰⵏⵙⵓⴼ ⵙ ⵉ ⵣⵉ ⵡⴰⵜⵉⵇⴰ',
    'welcome.subtitle': 'ⴰⵏⴰⵔⵏⵏⵓⵏ ⵏ ⵜⵓⵏⴱⴰⴹⵜ ⵉ ⵓⵙⵙⵉⵡⴹ ⵏ ⵜⵇⴰⵔⴹⵉⵏ',
    'welcome.getStarted': 'ⴱⴷⵓ',
    'welcome.moroccanUniversities': 'ⵢⵓⵔⴰ ⵙ ⵓⵥⵍⴰⵢ ⵉ ⵜⵓⵏⴱⴰⴹⵉⵏ ⵏ ⵎⵓⵔⴰⴽⵓⵛ',
    
    // Language Selection
    'lang.selectLanguage': 'ⴼⵔⵏ ⵜⴰⵎⴰⵣⵉⵖⵜⵏⵏⵓⵏ',
    'lang.french': 'ⵜⴰⴼⴼⴰⵔⵏⵙⵉⵙⵜ',
    'lang.arabic': 'ⵜⴰⵛⵍⵃⵉⵜ',
    'lang.english': 'ⵜⴰⵏⴳⵍⵉⵥⵜ',
    'lang.tamazight': 'ⵜⴰⵎⴰⵣⵉⵖⵜ',
    
    // Services
    'services.title': 'ⵜⴰⵏⴰⴼⵓⵜⵏⵏⴰⵖ',
    'services.personalInfo': 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵎⴷⴰⵏ',
    'services.personalInfoDesc': 'ⵙⵙⵓⴷⵓ ⵉⵙⴰⵍⵏ ⵏⵏⵓⵏ',
    'services.documents': 'ⴰⵙⵙⵓⴷⵓ ⵏ ⵜⵇⴰⵔⴹⵉⵏ',
    'services.documentsDesc': 'ⵙⴷⵖⴻⵏ ⴰⴽⴽ ⵜⵇⴰⵔⴹⵉⵏⵏⵓⵏ',
    'services.tutor': 'ⴰⵎⵔⴰⴱⵓ ⵏ ⵓⵣⵔⴼ',
    'services.tutorDesc': 'ⵜⵎⵖⵔⵉⵏ ⵏ ⵓⵎⵔⴰⴱⵓ',
    'services.assistant': 'ⴰⵏⴰⵔ ⴰⵣⵔⴰⵔ',
    'services.assistantDesc': 'ⴰⵏⴰⵔ ⴰⵣⵔⴰⵔ 24/7',
    
    // Chatbot
    'chatbot.title': 'ⴰⵏⴰⵔ ⴰⵣⵔⴰⵔ',
    'chatbot.subtitle': 'ⵔⵓⴱⵓⵜ ⵏ ⵓⵎⵙⴰⵡⴰⵍ ⵉ ⵣⵉ ⵡⴰⵜⵉⵇⴰ',
    'chatbot.placeholder': 'ⴰⵔⵓ ⵜⵓⵣⵉⵏⵜⵏⵏⵓⵏ...',
    'chatbot.listening': '🎤 ⴷⴰ ⵉⵙⴼⵍⴷ...',
    'chatbot.welcome': 'ⴰⵏⵙⵓⴼ! ⵏⴽⴽ ⴰⵏⴰⵔⵏⵏⵓⵏ ⵉ ⵣⵉ ⵡⴰⵜⵉⵇⴰ. ⵎⴰⵎⴽ ⵣⵎⵔⵖ ⴰⴷ ⴰⵡⵏ ⴰⵏⴰⵔⵖ?',
    
    // Common
    'common.save': 'ⵃⴹⵓ',
    'common.cancel': 'ⴹⵔ',
    'common.next': 'ⴰⴷⴼⴼⵉⵔ',
    'common.previous': 'ⴰⵎⵣⵡⴰⵔⵓ',
    'common.submit': 'ⴰⵣⵏ',
    'common.edit': 'ⵙⵏⴼⵍ',
    'common.delete': 'ⴽⴽⵙ',
    'common.required': 'ⵉⵜⵜⵓⵙⴰⵔ',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    const saved = localStorage.getItem('selectedLanguage');
    return (saved as Language) || 'french';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', language);
    document.documentElement.dir = language === 'arabic' || language === 'tamazight' ? 'rtl' : 'ltr';
    document.documentElement.lang = language === 'french' ? 'fr' : 
                                   language === 'arabic' ? 'ar' : 
                                   language === 'tamazight' ? 'zgh' : 'en';
  }, [language]);

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const isRTL = language === 'arabic' || language === 'tamazight';

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, isRTL }}>
      <div dir={isRTL ? 'rtl' : 'ltr'} className={isRTL ? 'font-arabic' : ''}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
