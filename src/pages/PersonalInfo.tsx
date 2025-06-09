
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, User, Calendar, MapPin } from 'lucide-react';

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    placeOfBirth: '',
    nationality: '',
    studentId: '',
    university: '',
    faculty: '',
    year: '',
    program: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving personal info:', formData);
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
            <h1 className="text-xl font-bold">Informations Personnelles</h1>
            <p className="text-blue-100 text-sm">Gérez vos informations personnelles</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Personal Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <User className="h-5 w-5 text-blue-600" />
              <span>Identité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="firstName">Prénom</Label>
                <Input
                  id="firstName"
                  value={formData.firstName}
                  onChange={(e) => handleInputChange('firstName', e.target.value)}
                  placeholder="Entrez votre prénom"
                />
              </div>
              <div>
                <Label htmlFor="lastName">Nom de famille</Label>
                <Input
                  id="lastName"
                  value={formData.lastName}
                  onChange={(e) => handleInputChange('lastName', e.target.value)}
                  placeholder="Entrez votre nom"
                />
              </div>
              <div>
                <Label htmlFor="dateOfBirth">Date de naissance</Label>
                <Input
                  id="dateOfBirth"
                  type="date"
                  value={formData.dateOfBirth}
                  onChange={(e) => handleInputChange('dateOfBirth', e.target.value)}
                />
              </div>
              <div>
                <Label htmlFor="placeOfBirth">Lieu de naissance</Label>
                <Input
                  id="placeOfBirth"
                  value={formData.placeOfBirth}
                  onChange={(e) => handleInputChange('placeOfBirth', e.target.value)}
                  placeholder="Ville, Pays"
                />
              </div>
              <div>
                <Label htmlFor="nationality">Nationalité</Label>
                <Input
                  id="nationality"
                  value={formData.nationality}
                  onChange={(e) => handleInputChange('nationality', e.target.value)}
                  placeholder="Votre nationalité"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Academic Details Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-blue-600" />
              <span>Informations Académiques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="studentId">Numéro étudiant</Label>
                <Input
                  id="studentId"
                  value={formData.studentId}
                  onChange={(e) => handleInputChange('studentId', e.target.value)}
                  placeholder="123456789"
                />
              </div>
              <div>
                <Label htmlFor="university">Université</Label>
                <Input
                  id="university"
                  value={formData.university}
                  onChange={(e) => handleInputChange('university', e.target.value)}
                  placeholder="Nom de votre université"
                />
              </div>
              <div>
                <Label htmlFor="faculty">Faculté</Label>
                <Input
                  id="faculty"
                  value={formData.faculty}
                  onChange={(e) => handleInputChange('faculty', e.target.value)}
                  placeholder="Faculté d'inscription"
                />
              </div>
              <div>
                <Label htmlFor="year">Année d'étude</Label>
                <Input
                  id="year"
                  value={formData.year}
                  onChange={(e) => handleInputChange('year', e.target.value)}
                  placeholder="1ère année, 2ème année..."
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="program">Programme d'étude</Label>
                <Input
                  id="program"
                  value={formData.program}
                  onChange={(e) => handleInputChange('program', e.target.value)}
                  placeholder="Licence en Informatique, Master..."
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

export default PersonalInfo;
