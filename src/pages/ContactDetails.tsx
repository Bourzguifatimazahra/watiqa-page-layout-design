
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Save, MapPin, Phone, Mail, Home } from 'lucide-react';

const ContactDetails = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    currentAddress: '',
    city: '',
    postalCode: '',
    country: '',
    permanentAddress: '',
    phone: '',
    mobilePhone: '',
    email: '',
    alternativeEmail: '',
    socialMedia: ''
  });

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSave = () => {
    console.log('Saving contact details:', formData);
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
            <h1 className="text-xl font-bold">Coordonnées</h1>
            <p className="text-blue-100 text-sm">Vos informations de contact</p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="px-6 py-6 space-y-6">
        {/* Current Address Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Home className="h-5 w-5 text-blue-600" />
              <span>Adresse Actuelle</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="currentAddress">Adresse</Label>
              <Input
                id="currentAddress"
                value={formData.currentAddress}
                onChange={(e) => handleInputChange('currentAddress', e.target.value)}
                placeholder="Numéro, rue, appartement..."
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <Label htmlFor="city">Ville</Label>
                <Input
                  id="city"
                  value={formData.city}
                  onChange={(e) => handleInputChange('city', e.target.value)}
                  placeholder="Ville"
                />
              </div>
              <div>
                <Label htmlFor="postalCode">Code postal</Label>
                <Input
                  id="postalCode"
                  value={formData.postalCode}
                  onChange={(e) => handleInputChange('postalCode', e.target.value)}
                  placeholder="12345"
                />
              </div>
              <div>
                <Label htmlFor="country">Pays</Label>
                <Input
                  id="country"
                  value={formData.country}
                  onChange={(e) => handleInputChange('country', e.target.value)}
                  placeholder="Pays"
                />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Permanent Address Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <MapPin className="h-5 w-5 text-blue-600" />
              <span>Adresse Permanente</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <Label htmlFor="permanentAddress">Adresse permanente</Label>
              <Input
                id="permanentAddress"
                value={formData.permanentAddress}
                onChange={(e) => handleInputChange('permanentAddress', e.target.value)}
                placeholder="Si différente de l'adresse actuelle"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information Card */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Phone className="h-5 w-5 text-blue-600" />
              <span>Informations de Contact</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <Label htmlFor="phone">Téléphone fixe</Label>
                <Input
                  id="phone"
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  placeholder="+33 1 23 45 67 89"
                />
              </div>
              <div>
                <Label htmlFor="mobilePhone">Téléphone portable</Label>
                <Input
                  id="mobilePhone"
                  type="tel"
                  value={formData.mobilePhone}
                  onChange={(e) => handleInputChange('mobilePhone', e.target.value)}
                  placeholder="+33 6 12 34 56 78"
                />
              </div>
              <div>
                <Label htmlFor="email">Email principal</Label>
                <Input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="votre.email@exemple.com"
                />
              </div>
              <div>
                <Label htmlFor="alternativeEmail">Email alternatif</Label>
                <Input
                  id="alternativeEmail"
                  type="email"
                  value={formData.alternativeEmail}
                  onChange={(e) => handleInputChange('alternativeEmail', e.target.value)}
                  placeholder="autre.email@exemple.com"
                />
              </div>
              <div className="md:col-span-2">
                <Label htmlFor="socialMedia">Réseaux sociaux</Label>
                <Input
                  id="socialMedia"
                  value={formData.socialMedia}
                  onChange={(e) => handleInputChange('socialMedia', e.target.value)}
                  placeholder="LinkedIn, Instagram, etc."
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
          Sauvegarder les coordonnées
        </Button>
      </div>
    </div>
  );
};

export default ContactDetails;
