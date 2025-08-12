import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Heart, Users, Award, Clock, CheckCircle, Target } from 'lucide-react';

const AboutPage = () => {
  const teamMembers = [
    {
      name: 'Dr. Sarah Johnson',
      role: 'Clinical Director',
      specialization: 'Anxiety & Depression',
      experience: '15+ years',
      credentials: ['PhD Psychology', 'Licensed Therapist', 'CBT Certified'],
    },
    {
      name: 'Dr. Michael Chen',
      role: 'Senior Therapist',
      specialization: 'Trauma & PTSD',
      experience: '12+ years',
      credentials: ['PhD Clinical Psychology', 'EMDR Certified', 'Trauma Specialist'],
    },
    {
      name: 'Dr. Emily Rodriguez',
      role: 'Family Therapist',
      specialization: 'Family & Couples',
      experience: '10+ years',
      credentials: ['LMFT', 'Family Systems', 'Gottman Method'],
    },
    {
      name: 'Dr. David Williams',
      role: 'Child Psychologist',
      specialization: 'Child & Adolescent',
      experience: '8+ years',
      credentials: ['PhD Child Psychology', 'Play Therapy', 'School Psychology'],
    },
  ];

  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every interaction with empathy and understanding.',
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'We work together with you to achieve your mental health goals.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'We maintain the highest standards in mental health care.',
    },
    {
      icon: Clock,
      title: 'Accessibility',
      description: 'We make mental health care available when and where you need it.',
    },
  ];

  const achievements = [
    'Accredited by the American Psychological Association',
    'Top-rated mental health facility in the region',
    'Over 10,000 successful patient outcomes',
    'Partnership with leading research institutions',
    '24/7 crisis intervention services',
    'Multilingual support available',
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="py-20 gradient-hero">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-playfair font-bold text-primary-foreground mb-6">
            About Mantara
          </h1>
          <p className="text-xl text-primary-foreground/90 max-w-3xl mx-auto font-poppins">
            Founded on the belief that everyone deserves access to quality mental health care, 
            Mantara has been a beacon of hope and healing for our community since 2015.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-gradient-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-foreground mb-6">
                Our Mission
              </h2>
              <p className="text-xl text-muted-foreground font-poppins">
                To provide compassionate, evidence-based mental health care that empowers 
                individuals to achieve their fullest potential and live meaningful lives.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Story</h3>
                <p className="text-muted-foreground mb-6 font-poppins">
                  Mantara was founded by a team of mental health professionals who recognized 
                  the need for more accessible, patient-centered care. We started with a simple
                  vision: to break down barriers to mental health treatment and create a space 
                  where healing can happen.
                </p>
                <p className="text-muted-foreground">
                  Today, we're proud to serve thousands of patients through our comprehensive 
                  range of services, from individual therapy to crisis intervention, all 
                  delivered with the same commitment to excellence and compassion that 
                  founded our practice.
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-foreground mb-4">Our Approach</h3>
                <p className="text-muted-foreground mb-6">
                  We believe in treating the whole person, not just symptoms. Our integrated 
                  approach combines evidence-based therapies with personalized care plans 
                  that honor your unique background, goals, and preferences.
                </p>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Personalized treatment plans</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Evidence-based therapies</span>
                  </div>
                  <div className="flex items-center">
                    <Target className="w-5 h-5 text-primary mr-3" />
                    <span className="text-foreground">Holistic wellness focus</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Values
            </h2>
            <p className="text-xl text-muted-foreground">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <Card key={index} className="shadow-card border-0 text-center">
                <CardHeader>
                  <div className="w-16 h-16 mx-auto gradient-calm rounded-full flex items-center justify-center mb-4">
                    <value.icon className="w-8 h-8 text-secondary-foreground" />
                  </div>
                  <CardTitle className="text-lg">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{value.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 gradient-calm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meet Our Team
            </h2>
            <p className="text-xl text-muted-foreground">
              Licensed professionals dedicated to your mental health journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="shadow-card border-0">
                <CardHeader className="text-center">
                  <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center mb-4">
                    <Users className="w-10 h-10 text-primary" />
                  </div>
                  <CardTitle className="text-lg">{member.name}</CardTitle>
                  <CardDescription className="text-primary font-medium">
                    {member.role}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">Specialization:</p>
                    <p className="text-sm text-muted-foreground">{member.specialization}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground">Experience:</p>
                    <p className="text-sm text-muted-foreground">{member.experience}</p>
                  </div>
                  <div>
                    <p className="text-sm font-medium text-foreground mb-2">Credentials:</p>
                    <div className="flex flex-wrap gap-1">
                      {member.credentials.map((credential, credIndex) => (
                        <Badge key={credIndex} variant="secondary" className="text-xs">
                          {credential}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Achievements
              </h2>
              <p className="text-xl text-muted-foreground">
                Recognition and milestones that reflect our commitment to excellence
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">{achievement}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;