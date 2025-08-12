import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Brain, Heart, Users, Shield, CheckCircle, Star } from 'lucide-react';
import heroImage from '@/assets/hero-mental-health.jpg';

interface HomePageProps {
  onNavigate: (page: 'about' | 'services') => void;
}

const HomePage = ({ onNavigate }: HomePageProps) => {
  const features = [
    {
      icon: Brain,
      title: 'Evidence-Based Care',
      description: 'Treatments backed by scientific research and proven therapeutic methods.',
    },
    {
      icon: Heart,
      title: 'Compassionate Support',
      description: 'Our team provides empathetic care in a safe, non-judgmental environment.',
    },
    {
      icon: Users,
      title: 'Licensed Professionals',
      description: 'Work with certified therapists and mental health specialists.',
    },
    {
      icon: Shield,
      title: 'Confidential & Secure',
      description: 'Your privacy is protected with the highest security standards.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Patients Helped' },
    { number: '25+', label: 'Licensed Therapists' },
    { number: '98%', label: 'Patient Satisfaction' },
    { number: '24/7', label: 'Crisis Support' },
  ];

  const testimonials = [
    {
      name: 'Sarah M.',
      rating: 5,
      comment: 'MindCare helped me through my darkest times. The support and understanding I received changed my life.',
    },
    {
      name: 'Michael R.',
      rating: 5,
      comment: 'Professional, caring, and effective. I finally found the help I needed to manage my anxiety.',
    },
    {
      name: 'Jennifer L.',
      rating: 5,
      comment: 'The online therapy sessions fit perfectly into my schedule. Highly recommend!',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Mental health care hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-primary/60" />
        </div>
        
        <div className="relative z-10 text-center text-primary-foreground px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in-up">
            Your Mental Health
            <span className="block text-accent-light">Matters</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 animate-fade-in-up">
            Professional, compassionate mental health care when you need it most.
            Connect with licensed therapists and start your journey to wellness.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent-light text-accent-foreground shadow-elevated transition-bounce"
              onClick={() => onNavigate('services')}
            >
              Get Started Today
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
            >
              Learn More
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose MindCare?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              We're committed to providing exceptional mental health care that's accessible, 
              effective, and tailored to your unique needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="shadow-card hover:shadow-elevated transition-smooth border-0">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 mx-auto gradient-hero rounded-full flex items-center justify-center mb-4">
                    <feature.icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center text-primary-foreground">
            {stats.map((stat, index) => (
              <div key={index} className="animate-pulse-soft">
                <div className="text-4xl md:text-5xl font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              What Our Patients Say
            </h2>
            <p className="text-xl text-muted-foreground">
              Real stories from people who found help and hope with MindCare.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                    ))}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.comment}"
                  </p>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-secondary mr-2" />
                    <span className="font-medium text-foreground">
                      {testimonial.name}
                    </span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Take the first step towards better mental health. Our caring team is here to support you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="gradient-hero shadow-elevated transition-bounce"
              onClick={() => onNavigate('services')}
            >
              Book Consultation
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => onNavigate('about')}
            >
              Learn About Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;