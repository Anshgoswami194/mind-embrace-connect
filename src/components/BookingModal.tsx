import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar, Clock, User, Phone, Mail, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const BookingModal = ({ isOpen, onClose }: BookingModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    preferredDate: '',
    preferredTime: '',
    therapyType: '',
    concerns: '',
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate booking submission
    toast({
      title: "Consultation Booked Successfully!",
      description: "We'll contact you within 24 hours to confirm your appointment.",
    });
    
    // Reset form and close modal
    setFormData({
      name: '',
      email: '',
      phone: '',
      preferredDate: '',
      preferredTime: '',
      therapyType: '',
      concerns: '',
    });
    onClose();
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-2xl max-h-[90vh] overflow-y-auto">
        <CardHeader className="gradient-hero text-primary-foreground">
          <CardTitle className="text-2xl font-playfair flex items-center">
            <Calendar className="w-6 h-6 mr-2" />
            Book Your Free Consultation
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Take the first step towards better mental health. Our team will match you with the right therapist.
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Personal Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="flex items-center">
                  <User className="w-4 h-4 mr-2" />
                  Full Name *
                </Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleInputChange('name', e.target.value)}
                  placeholder="Enter your full name"
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="email" className="flex items-center">
                  <Mail className="w-4 h-4 mr-2" />
                  Email Address *
                </Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center">
                <Phone className="w-4 h-4 mr-2" />
                Phone Number *
              </Label>
              <Input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => handleInputChange('phone', e.target.value)}
                placeholder="Enter your phone number"
              />
            </div>

            {/* Appointment Preferences */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date" className="flex items-center">
                  <Calendar className="w-4 h-4 mr-2" />
                  Preferred Date
                </Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.preferredDate}
                  onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                  min={new Date().toISOString().split('T')[0]}
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="time" className="flex items-center">
                  <Clock className="w-4 h-4 mr-2" />
                  Preferred Time
                </Label>
                <Select onValueChange={(value) => handleInputChange('preferredTime', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select time slot" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="9:00 AM">9:00 AM</SelectItem>
                    <SelectItem value="10:00 AM">10:00 AM</SelectItem>
                    <SelectItem value="11:00 AM">11:00 AM</SelectItem>
                    <SelectItem value="1:00 PM">1:00 PM</SelectItem>
                    <SelectItem value="2:00 PM">2:00 PM</SelectItem>
                    <SelectItem value="3:00 PM">3:00 PM</SelectItem>
                    <SelectItem value="4:00 PM">4:00 PM</SelectItem>
                    <SelectItem value="5:00 PM">5:00 PM</SelectItem>
                    <SelectItem value="6:00 PM">6:00 PM</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="therapy-type">Type of Support Needed</Label>
              <Select onValueChange={(value) => handleInputChange('therapyType', value)}>
                <SelectTrigger>
                  <SelectValue placeholder="Select therapy type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="individual">Individual Therapy</SelectItem>
                  <SelectItem value="couples">Couples Therapy</SelectItem>
                  <SelectItem value="family">Family Therapy</SelectItem>
                  <SelectItem value="group">Group Therapy</SelectItem>
                  <SelectItem value="crisis">Crisis Support</SelectItem>
                  <SelectItem value="unsure">Not Sure / General Consultation</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="concerns" className="flex items-center">
                <MessageSquare className="w-4 h-4 mr-2" />
                What brings you to Mantara? (Optional)
              </Label>
              <Textarea
                id="concerns"
                value={formData.concerns}
                onChange={(e) => handleInputChange('concerns', e.target.value)}
                placeholder="Feel free to share what you'd like support with..."
                rows={3}
              />
            </div>

            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              <Button
                type="submit"
                className="flex-1 gradient-hero shadow-elevated"
                size="lg"
              >
                Book Free Consultation
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={onClose}
                size="lg"
              >
                Cancel
              </Button>
            </div>
          </form>
          
          <div className="mt-6 p-4 bg-muted rounded-lg">
            <p className="text-sm text-muted-foreground text-center">
              <strong>What to expect:</strong> Our team will review your request and contact you within 24 hours 
              to confirm your appointment and answer any questions you may have.
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default BookingModal;