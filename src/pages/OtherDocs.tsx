
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Upload, FileText, Download, Trash2, Plus } from 'lucide-react';

const OtherDocs = () => {
  const navigate = useNavigate();
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Carte étudiante', type: 'PDF', date: '2024-01-15', status: 'Validé' },
    { id: 2, name: 'Certificat médical', type: 'PDF', date: '2024-02-20', status: 'En attente' },
  ]);

  const documentCategories = [
    'Carte d\'identité',
    'Passeport',
    'Visa étudiant',
    'Certificat de naissance',
    'Diplôme précédent',
    'Relevé de notes',
    'Certificat médical',
    'Photo d\'identité',
    'Justificatif de domicile',
    'Attestation de bourse',
    'Assurance responsabilité civile',
    'Autres'
  ];

  const handleFileUpload = (category: string) => {
    console.log('Uploading file for category:', category);
    // Logic to handle file upload
  };

  const handleDeleteDocument = (id: number) => {
    setDocuments(documents.filter(doc => doc.id !== id));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-blue-600 text-white px-6 py-4">
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
            <h1 className="text-xl font-bold">Autres Documents</h1>
            <p className="text-blue-100 text-sm">Gérez vos documents administratifs</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Upload New Document Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Plus className="h-5 w-5 text-green-600" />
              <span>Ajouter un Document</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {documentCategories.map((category, index) => (
                <Button
                  key={index}
                  variant="outline"
                  onClick={() => handleFileUpload(category)}
                  className="p-4 h-auto flex flex-col items-center space-y-2 hover:bg-blue-50 border-dashed"
                >
                  <Upload className="h-6 w-6 text-blue-600" />
                  <span className="text-sm text-center">{category}</span>
                </Button>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Uploaded Documents Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-blue-600" />
              <span>Documents Téléchargés</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {documents.map((doc) => (
                <div key={doc.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-4">
                    <div className="p-2 bg-blue-100 rounded-full">
                      <FileText className="h-5 w-5 text-blue-600" />
                    </div>
                    <div>
                      <p className="font-medium">{doc.name}</p>
                      <p className="text-sm text-gray-500">{doc.type} • {doc.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-1 rounded-full text-xs ${
                      doc.status === 'Validé' 
                        ? 'bg-green-100 text-green-800' 
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {doc.status}
                    </span>
                    <Button variant="ghost" size="icon">
                      <Download className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => handleDeleteDocument(doc.id)}
                      className="text-red-600 hover:text-red-800"
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Document Requirements Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <FileText className="h-5 w-5 text-orange-600" />
              <span>Documents Requis</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span>Carte d'identité ou passeport</span>
                <span className="text-green-600 font-medium">✓ Fourni</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Photo d'identité récente</span>
                <span className="text-red-600 font-medium">✗ Manquant</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Certificat médical</span>
                <span className="text-yellow-600 font-medium">⏳ En attente</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Justificatif de domicile</span>
                <span className="text-red-600 font-medium">✗ Manquant</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default OtherDocs;
