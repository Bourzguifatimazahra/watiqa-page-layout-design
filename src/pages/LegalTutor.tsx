
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Users, Phone, Mail } from 'lucide-react';

const LegalTutor = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    tutorFirstName: '',
    tutorLastName: '',
    relationship: '',
    tutorPhone: '',
    tutorEmail: '',
    tutorAddress: '',
    tutorOccupation: '',
    emergencyContact: '',
    emergencyPhone: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving tutor info:', formData);
    // Logic to save data
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
            <h1 className="text-xl font-bold">Tuteur Légal</h1>
            <p className="text-blue-100 text-sm">Informations du tuteur ou responsable légal</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Tutor Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Users className="h-5 w-5 text-blue-600" />
              <span>Informations du Tuteur</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tutorFirstName">Prénom du tuteur</Label>
                <Input
                  id="tutorFirstName"
                  value={formData.tutorFirstName}
                  onChange={(e) => handleInputChange('tutorFirstName', e.target.value)}
                  placeholder="Prénom"
                />
              </div>
              <div>
                <Label htmlFor="tutorLastName">Nom du tuteur</Label>
                <Input
                  id="tutorLastName"
                  value={formData.tutorLastName}
                  onChange={(e) => handleInputChange('tutorLastName', e.target.value)}
                  placeholder="Nom de famille"
                />
              </div>
              <div>
                <Label htmlFor="relationship">Relation</Label>
                <Input
                  id="relationship"
                  value={formData.relationship}
                  onChange={(e) => handleInputChange('relationship', e.target.value)}
                  placeholder="Père, Mère, Tuteur..."
                />
              </div>
              <div>
                <Label htmlFor="tutorOccupation">Profession</Label>
                <Input
                  id="tutorOccupation"
                  value={formData.tutorOccupation}
                  onChange={(e) => handleInputChange('tutorOccupation', e.target.value)}
                  placeholder="Profession du tuteur"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Contact Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>Coordonnées</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="tutorPhone">Téléphone</Label>
                <Input
                  id="tutorPhone"
                  type="tel"
                  value={formData.tutorPhone}
                  onChange={(e) => handleInputChange('tutorPhone', e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <Label htmlFor="tutorEmail">Email</Label>
                <Input
                  id="tutorEmail"
                  type="email"
                  value={formData.tutorEmail}
                  onChange={(e) => handleInputChange('tutorEmail', e.target.value)}
                  placeholder="email@exemple.com"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="tutorAddress">Adresse</Label>
                <Input
                  id="tutorAddress"
                  value={formData.tutorAddress}
                  onChange={(e) => handleInputChange('tutorAddress', e.target.value)}
                  placeholder="Adresse complète"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Emergency Contact Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Mail className="h-5 w-5 text-red-600" />
              <span>Contact d'Urgence</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="emergencyContact">Nom du contact d'urgence</Label>
                <Input
                  id="emergencyContact"
                  value={formData.emergencyContact}
                  onChange={(e) => handleInputChange('emergencyContact', e.target.value)}
                  placeholder="Nom complet"
                />
              </div>
              <div>
                <Label htmlFor="emergencyPhone">Téléphone d'urgence</Label>
                <Input
                  id="emergencyPhone"
                  type="tel"
                  value={formData.emergencyPhone}
                  onChange={(e) => handleInputChange('emergencyPhone', e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Save Button */}
        <Button 
          onClick={handleSave}
          className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium"
        >
          <Save className="h-5 w-5 mr-2" />
          Sauvegarder les informations
        </Button>
      </div>
    </div>
  );
};

export default LegalTutor;
