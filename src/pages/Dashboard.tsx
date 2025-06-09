
import React from 'react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { FileText, User, Phone, Info, FolderOpen, LogOut, Home, MessageCircle } from 'lucide-react';

const Dashboard = () => {
  const navigate = useNavigate();

  const menuItems = [
    { 
      title: 'Accueil', 
      icon: Home, 
      route: '/home',
      description: 'Page d\'accueil avec tous les services'
    },
    { 
      title: 'Informations Personnelles', 
      icon: User, 
      route: '/personal-info',
      description: 'Gérer vos informations personnelles'
    },
    { 
      title: 'Tuteur Légal', 
      icon: User, 
      route: '/legal-tutor',
      description: 'Informations du tuteur légal'
    },
    { 
      title: 'Coordonnées', 
      icon: Phone, 
      route: '/contact-details',
      description: 'Adresse et contact'
    },
    { 
      title: 'Informations Spécifiques', 
      icon: Info, 
      route: '/specific-info',
      description: 'Informations supplémentaires'
    },
    { 
      title: 'Autres Documents', 
      icon: FolderOpen, 
      route: '/other-docs',
      description: 'Documents additionnels'
    },
    { 
      title: 'Assistant IA', 
      icon: MessageCircle, 
      route: '/chatbot',
      description: 'Chatbot intelligent avec support vocal'
    }
  ];

  const handleLogout = () => {
    localStorage.removeItem('selectedLanguage');
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-8">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">EZWatiqa</h1>
            <p className="text-blue-100 mt-1">Tableau de bord</p>
          </div>
          <Button 
            variant="ghost" 
            size="icon"
            onClick={handleLogout}
            className="text-white hover:bg-blue-700"
          >
            <LogOut className="h-6 w-6" />
          </Button>
        </div>
      </div>

      {/* Menu Items */}
      <div className="px-6 py-8">
        <div className="space-y-4">
          {menuItems.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <Button
                key={index}
                onClick={() => navigate(item.route)}
                variant="outline"
                className="w-full p-6 h-auto flex items-center justify-start space-x-4 bg-white border-gray-200 hover:bg-blue-50 hover:border-blue-300"
              >
                <div className="p-3 bg-blue-100 rounded-full">
                  <IconComponent className="h-6 w-6 text-blue-600" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-gray-900">{item.title}</div>
                  <div className="text-sm text-gray-500">{item.description}</div>
                </div>
              </Button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
