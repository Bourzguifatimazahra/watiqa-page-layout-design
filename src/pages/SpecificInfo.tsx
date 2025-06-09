
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, Info, Heart, AlertTriangle } from 'lucide-react';

const SpecificInfo = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    medicalConditions: '',
    allergies: '',
    medications: '',
    emergencyMedicalInfo: '',
    dietaryRestrictions: '',
    accessibility: '',
    bankAccount: '',
    insuranceInfo: '',
    scholarship: '',
    workPermit: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving specific info:', formData);
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
            <h1 className="text-xl font-bold">Informations Spécifiques</h1>
            <p className="text-blue-100 text-sm">Informations médicales et administratives</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Medical Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Heart className="h-5 w-5 text-red-600" />
              <span>Informations Médicales</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="medicalConditions">Conditions médicales</Label>
              <Input
                id="medicalConditions"
                value={formData.medicalConditions}
                onChange={(e) => handleInputChange('medicalConditions', e.target.value)}
                placeholder="Diabète, asthme, etc."
              />
            </div>
            <div>
              <Label htmlFor="allergies">Allergies</Label>
              <Input
                id="allergies"
                value={formData.allergies}
                onChange={(e) => handleInputChange('allergies', e.target.value)}
                placeholder="Arachides, médicaments, etc."
              />
            </div>
            <div>
              <Label htmlFor="medications">Médicaments</Label>
              <Input
                id="medications"
                value={formData.medications}
                onChange={(e) => handleInputChange('medications', e.target.value)}
                placeholder="Médicaments pris régulièrement"
              />
            </div>
            <div>
              <Label htmlFor="emergencyMedicalInfo">Informations médicales d'urgence</Label>
              <Input
                id="emergencyMedicalInfo"
                value={formData.emergencyMedicalInfo}
                onChange={(e) => handleInputChange('emergencyMedicalInfo', e.target.value)}
                placeholder="Informations importantes pour les urgences"
              />
            </div>
          </CardContent>
        </Card>

        {/* Accessibility & Diet Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <AlertTriangle className="h-5 w-5 text-orange-600" />
              <span>Besoins Spéciaux</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="dietaryRestrictions">Restrictions alimentaires</Label>
              <Input
                id="dietaryRestrictions"
                value={formData.dietaryRestrictions}
                onChange={(e) => handleInputChange('dietaryRestrictions', e.target.value)}
                placeholder="Végétarien, halal, casher, etc."
              />
            </div>
            <div>
              <Label htmlFor="accessibility">Besoins d'accessibilité</Label>
              <Input
                id="accessibility"
                value={formData.accessibility}
                onChange={(e) => handleInputChange('accessibility', e.target.value)}
                placeholder="Fauteuil roulant, aide auditive, etc."
              />
            </div>
          </CardContent>
        </Card>

        {/* Administrative Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Info className="h-5 w-5 text-blue-600" />
              <span>Informations Administratives</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="bankAccount">Compte bancaire</Label>
              <Input
                id="bankAccount"
                value={formData.bankAccount}
                onChange={(e) => handleInputChange('bankAccount', e.target.value)}
                placeholder="IBAN ou numéro de compte"
              />
            </div>
            <div>
              <Label htmlFor="insuranceInfo">Assurance</Label>
              <Input
                id="insuranceInfo"
                value={formData.insuranceInfo}
                onChange={(e) => handleInputChange('insuranceInfo', e.target.value)}
                placeholder="Numéro d'assurance maladie/responsabilité"
              />
            </div>
            <div>
              <Label htmlFor="scholarship">Bourse d'études</Label>
              <Input
                id="scholarship"
                value={formData.scholarship}
                onChange={(e) => handleInputChange('scholarship', e.target.value)}
                placeholder="Type et montant de la bourse"
              />
            </div>
            <div>
              <Label htmlFor="workPermit">Permis de travail</Label>
              <Input
                id="workPermit"
                value={formData.workPermit}
                onChange={(e) => handleInputChange('workPermit', e.target.value)}
                placeholder="Numéro et validité du permis"
              />
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

export default SpecificInfo;
