
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, BookOpen, GraduationCap, FileText, Users } from 'lucide-react';
import { useLanguage } from '@/hooks/useLanguage';

const Blog = () => {
  const navigate = useNavigate();
  const { t, isRTL } = useLanguage();

  const articles = [
    {
      id: 1,
      title: 'Guide complet pour l\'inscription universitaire au Maroc',
      summary: 'Découvrez toutes les étapes essentielles pour réussir votre inscription dans une université marocaine.',
      content: 'L\'inscription universitaire au Maroc nécessite plusieurs documents importants...',
      author: 'Dr. Amina Benali',
      date: '2024-01-15',
      category: 'Inscriptions',
      icon: FileText,
      image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=200&fit=crop'
    },
    {
      id: 2,
      title: 'Les bourses d\'études disponibles pour les étudiants marocains',
      summary: 'Explorez les différentes opportunités de financement pour vos études supérieures.',
      content: 'Le Maroc offre diverses bourses d\'études pour soutenir les étudiants...',
      author: 'Prof. Mohamed Alami',
      date: '2024-01-12',
      category: 'Bourses',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=400&h=200&fit=crop'
    },
    {
      id: 3,
      title: 'Comment préparer efficacement vos examens universitaires',
      summary: 'Conseils pratiques et méthodologies pour optimiser vos révisions et réussir vos examens.',
      content: 'La préparation aux examens universitaires demande une organisation rigoureuse...',
      author: 'Dr. Fatima Zahra',
      date: '2024-01-10',
      category: 'Études',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&h=200&fit=crop'
    },
    {
      id: 4,
      title: 'Vie étudiante: s\'intégrer dans votre université',
      summary: 'Découvrez comment tirer le meilleur parti de votre expérience universitaire au-delà des cours.',
      content: 'La vie universitaire ne se limite pas aux cours magistraux...',
      author: 'Pr. Youssef Bennani',
      date: '2024-01-08',
      category: 'Vie étudiante',
      icon: Users,
      image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=400&h=200&fit=crop'
    },
    {
      id: 5,
      title: 'Digitalisation de l\'enseignement supérieur au Maroc',
      summary: 'L\'évolution technologique dans les universités marocaines et son impact sur l\'apprentissage.',
      content: 'La transformation numérique des universités marocaines s\'accélère...',
      author: 'Dr. Rachid Belkadi',
      date: '2024-01-05',
      category: 'Technologie',
      icon: BookOpen,
      image: 'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=400&h=200&fit=crop'
    },
    {
      id: 6,
      title: 'Orientation post-bac: choisir sa filière universitaire',
      summary: 'Guide pour aider les bacheliers à faire le bon choix d\'orientation universitaire.',
      content: 'Le choix de la filière universitaire est une décision cruciale...',
      author: 'Mme. Khadija Alaoui',
      date: '2024-01-03',
      category: 'Orientation',
      icon: GraduationCap,
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=200&fit=crop'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
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
              <h1 className="text-xl font-bold">Blog Universitaire</h1>
              <p className="text-primary-foreground/90 text-sm">Actualités et conseils pour les étudiants</p>
            </div>
          </div>
        </div>
      </div>

      {/* Articles */}
      <div className="px-6 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => {
              const IconComponent = article.icon;
              return (
                <Card key={article.id} className="overflow-hidden hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="relative h-48">
                    <img 
                      src={article.image} 
                      alt={article.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
                      {article.category}
                    </div>
                  </div>
                  <CardHeader>
                    <CardTitle className="text-lg leading-tight">{article.title}</CardTitle>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.date).toLocaleDateString('fr-FR')}</span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground text-sm leading-relaxed">{article.summary}</p>
                    <Button variant="outline" className="mt-4 w-full">
                      Lire l'article
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
