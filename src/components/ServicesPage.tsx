import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Brain, 
  Users, 
  Heart, 
  UserCheck, 
  Clock, 
  Video, 
  Phone, 
  MapPin,
  CheckCircle,
  Star,
  Calendar
} from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one sessions with licensed therapists specialized in various mental health conditions.',
      features: ['Anxiety & Depression', 'Trauma & PTSD', 'Stress Management', 'Life Transitions'],
      duration: '50 minutes',
      price: 'Starting at $120/session',
      popular: true,
    },
    {
      icon: Users,
      title: 'Group Therapy',
      description: 'Join supportive group sessions with others facing similar challenges.',
      features: ['Support Groups', 'Skill Building', 'Peer Connection', 'Guided Activities'],
      duration: '90 minutes',
      price: 'Starting at $60/session',
      popular: false,
    },
    {
      icon: Heart,
      title: 'Couples Therapy',
      description: 'Strengthen relationships and improve communication with your partner.',
      features: ['Communication Skills', 'Conflict Resolution', 'Intimacy Issues', 'Pre-marital Counseling'],
      duration: '60 minutes',
      price: 'Starting at $150/session',
      popular: false,
    },
    {
      icon: UserCheck,
      title: 'Family Therapy',
      description: 'Address family dynamics and improve relationships between family members.',
      features: ['Family Conflicts', 'Parenting Support', 'Teen Issues', 'Blended Families'],
      duration: '60 minutes',
      price: 'Starting at $140/session',
      popular: false,
    },
  ];

  const therapyModes = [
    {
      icon: Video,
      title: 'Online Therapy',
      description: 'Convenient video sessions from the comfort of your home.',
      benefits: ['Flexible scheduling', 'No travel required', 'Comfortable environment', 'Same quality care'],
    },
    {
      icon: MapPin,
      title: 'In-Person Sessions',
      description: 'Traditional face-to-face therapy in our welcoming offices.',
      benefits: ['Personal connection', 'Professional setting', 'Immediate support', 'Group activities'],
    },
    {
      icon: Phone,
      title: 'Phone Consultations',
      description: 'Quick check-ins and crisis support available 24/7.',
      benefits: ['Immediate access', 'Crisis intervention', 'Follow-up support', 'Emergency help'],
    },
  ];

  const specializations = [
    { name: 'Anxiety Disorders', count: '8 specialists' },
    { name: 'Depression', count: '10 specialists' },
    { name: 'Trauma & PTSD', count: '6 specialists' },
    { name: 'Addiction Recovery', count: '5 specialists' },
    { name: 'Eating Disorders', count: '4 specialists' },
    { name: 'ADHD', count: '6 specialists' },
    { name: 'Bipolar Disorder', count: '7 specialists' },
    { name: 'OCD', count: '5 specialists' },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free 15-minute consultation to discuss your needs and match you with the right therapist.',
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Comprehensive evaluation to understand your mental health goals and create a treatment plan.',
    },
    {
      step: '03',
      title: 'Treatment Plan',
      description: 'Personalized therapy approach designed specifically for your unique situation and goals.',
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Regular sessions with progress monitoring and plan adjustments as needed.',
    },
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
            Our Services
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto mb-8 font-poppins">
            Comprehensive mental health services tailored to your unique needs. 
            We offer both in-person and online therapy options.
          </p>
          <Button 
            size="lg" 
            className="bg-accent hover:bg-accent-light text-accent-foreground shadow-elevated"
          >
            <Calendar className="w-5 h-5 mr-2" />
            Schedule Free Consultation
          </Button>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-4">
              Therapy Services
            </h2>
            <p className="text-xl text-muted-foreground font-poppins">
              Evidence-based treatments delivered by licensed professionals
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Card key={index} className={`shadow-card border-0 relative ${service.popular ? 'ring-2 ring-primary' : ''}`}>
                {service.popular && (
                  <Badge className="absolute -top-3 left-6 bg-primary text-primary-foreground">
                    <Star className="w-3 h-3 mr-1" />
                    Most Popular
                  </Badge>
                )}
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-12 h-12 gradient-hero rounded-lg flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{service.title}</CardTitle>
                        <CardDescription className="text-primary font-medium">
                          {service.price}
                        </CardDescription>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-muted-foreground">{service.description}</p>
                  
                  <div>
                    <h4 className="font-medium text-foreground mb-3">Includes:</h4>
                    <div className="grid grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center space-x-2">
                          <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="w-4 h-4 mr-2" />
                      {service.duration}
                    </div>
                    <Button 
                      className={service.popular ? 'gradient-hero' : 'bg-primary hover:bg-primary-dark'}
                    >
                      Book Session
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Therapy Modes */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How We Deliver Care
            </h2>
            <p className="text-xl text-muted-foreground">
              Choose the format that works best for your lifestyle and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {therapyModes.map((mode, index) => (
              <Card key={index} className="shadow-card border-0 text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto gradient-calm rounded-full flex items-center justify-center mb-4">
                    <mode.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-xl">{mode.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>{mode.description}</CardDescription>
                  <div className="space-y-2">
                    {mode.benefits.map((benefit, benefitIndex) => (
                      <div key={benefitIndex} className="flex items-center space-x-2">
                        <CheckCircle className="w-4 h-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specializations */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Specializations
            </h2>
            <p className="text-xl text-muted-foreground">
              Expert care for a wide range of mental health conditions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {specializations.map((spec, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-6 text-center">
                  <h3 className="font-semibold text-foreground mb-2">{spec.name}</h3>
                  <p className="text-sm text-primary font-medium">{spec.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              How It Works
            </h2>
            <p className="text-xl text-muted-foreground">
              Simple steps to get started on your mental health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 mx-auto gradient-hero rounded-full flex items-center justify-center mb-4">
                  <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-primary-foreground/90 mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Book your free consultation today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-elevated"
            >
              <Calendar className="w-5 h-5 mr-2" />
              Book Free Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              <Phone className="w-5 h-5 mr-2" />
              Call Us Now
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;