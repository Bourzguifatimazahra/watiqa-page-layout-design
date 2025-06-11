
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { 
  User, 
  Users, 
  Phone, 
  Info, 
  FileText, 
  MessageCircle, 
  BookOpen, 
  Calendar,
  CreditCard,
  MapPin,
  Bell,
  Settings
} from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();

  const services = [
    {
      title: 'Informations Personnelles',
      description: 'Gérez vos données personnelles et académiques',
      icon: User,
      route: '/personal-info',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop'
    },
    {
      title: 'Tuteur Légal',
      description: 'Informations de votre tuteur ou responsable légal',
      icon: Users,
      route: '/legal-tutor',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop'
    },
    {
      title: 'Coordonnées',
      description: 'Adresses et informations de contact',
      icon: Phone,
      route: '/contact-details',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=300&fit=crop'
    },
    {
      title: 'Informations Spécifiques',
      description: 'Données médicales et administratives',
      icon: Info,
      route: '/specific-info',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=400&h=300&fit=crop'
    },
    {
      title: 'Autres Documents',
      description: 'Gérez tous vos documents administratifs',
      icon: FileText,
      route: '/other-docs',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=400&h=300&fit=crop'
    },
    {
      title: 'Assistant IA',
      description: 'Posez vos questions à notre chatbot intelligent',
      icon: MessageCircle,
      route: '/chatbot',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1472396961693-142e6e269027?w=400&h=300&fit=crop'
    },
    {
      title: 'Blog Universitaire',
      description: 'Actualités et conseils pour les étudiants',
      icon: BookOpen,
      route: '/blog',
      color: 'bg-primary',
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=300&fit=crop'
    }
  ];

  const quickActions = [
    { title: 'Planning', icon: Calendar, route: '/schedule' },
    { title: 'Paiements', icon: CreditCard, route: '/payments' },
    { title: 'Campus', icon: MapPin, route: '/campus' },
    { title: 'Bibliothèque', icon: BookOpen, route: '/library' },
    { title: 'Notifications', icon: Bell, route: '/notifications' },
    { title: 'Paramètres', icon: Settings, route: '/settings' }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold mb-2">EZWatiqa</h1>
          <p className="text-primary-foreground/90">Votre assistant universitaire personnel</p>
          <p className="text-sm text-primary-foreground/80 mt-1">Gérez facilement tous vos documents et informations académiques</p>
        </div>
      </div>

      {/* Main Services */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Services Principaux</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={index} 
                  className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer border-border"
                  onClick={() => navigate(service.route)}
                >
                  <div className="relative h-48">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                    <div className={`absolute top-4 left-4 p-3 rounded-full ${service.color}`}>
                      <IconComponent className="h-6 w-6 text-primary-foreground" />
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg text-card-foreground">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-foreground mb-6">Actions Rapides</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {quickActions.map((action, index) => {
              const IconComponent = action.icon;
              return (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => navigate(action.route)}
                  className="h-20 flex flex-col items-center space-y-2 hover:bg-primary/10"
                >
                  <IconComponent className="h-6 w-6 text-primary" />
                  <span className="text-xs text-center">{action.title}</span>
                </Button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Recent Activity */}
      <div className="px-6 pb-8">
        <div className="max-w-6xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle>Activité Récente</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <FileText className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Document validé</p>
                    <p className="text-sm text-muted-foreground">Votre carte étudiante a été approuvée</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Il y a 2h</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="p-2 bg-primary/10 rounded-full">
                    <Bell className="h-4 w-4 text-primary" />
                  </div>
                  <div>
                    <p className="font-medium">Nouveau message</p>
                    <p className="text-sm text-muted-foreground">Mise à jour de votre dossier d'inscription</p>
                  </div>
                  <span className="text-xs text-muted-foreground">Il y a 1 jour</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Home;
