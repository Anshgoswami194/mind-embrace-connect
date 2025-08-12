import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  Heart, 
  Brain, 
  Smile, 
  Phone,
  Lightbulb,
  Moon,
  Coffee,
  Shield,
  Users,
  BookOpen,
  Calendar,
  Target,
  Zap
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  category?: string;
}

interface ChatOption {
  id: string;
  label: string;
  icon: any;
  category: string;
  color: string;
  response: string;
  followups?: string[];
}

const EnhancedChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hello! I'm Mantara's AI Mental Health Assistant. I'm here to provide support, resources, and guidance for your mental wellbeing. How can I help you today?",
      timestamp: new Date(),
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [showOptions, setShowOptions] = useState(true);
  const [currentCategory, setCurrentCategory] = useState<string | null>(null);

  const chatOptions: ChatOption[] = [
    // Immediate Support
    {
      id: 'crisis',
      label: 'I need immediate help',
      icon: Phone,
      category: 'crisis',
      color: 'bg-red-500',
      response: "I'm here for you right now. If you're having thoughts of suicide or self-harm, please contact emergency services (911) immediately. You can also reach the 988 Suicide & Crisis Lifeline (call or text 988) or text HOME to 741741 for the Crisis Text Line. You are valued and help is available 24/7.",
      followups: ['Call 988 Lifeline', 'Text Crisis Line', 'Emergency Services', 'Find local resources'],
    },
    {
      id: 'anxiety',
      label: 'I\'m feeling anxious',
      icon: Brain,
      category: 'immediate',
      color: 'bg-blue-500',
      response: "Anxiety is very common and you're not alone. Let's try some immediate techniques: Take slow, deep breaths (4 counts in, 7 counts hold, 8 counts out). Try the 5-4-3-2-1 grounding technique: name 5 things you see, 4 you can touch, 3 you hear, 2 you smell, 1 you taste. Would you like me to guide you through a breathing exercise?",
      followups: ['Breathing exercises', 'Grounding techniques', 'Relaxation tips', 'Find a therapist'],
    },
    {
      id: 'depression',
      label: 'I\'m feeling depressed',
      icon: Heart,
      category: 'immediate',
      color: 'bg-purple-500',
      response: "Thank you for sharing. Depression can feel overwhelming, but there is hope. Small steps matter: try to maintain a daily routine, stay connected with people you trust, get some sunlight, and consider gentle movement. Remember, seeking help is a sign of strength, not weakness.",
      followups: ['Self-care tips', 'Support groups', 'Professional help', 'Daily routine ideas'],
    },
    {
      id: 'stress',
      label: 'I\'m stressed about work/life',
      icon: Zap,
      category: 'immediate',
      color: 'bg-orange-500',
      response: "Work-life stress is incredibly common. Let's focus on what you can control: break large tasks into smaller ones, set healthy boundaries, take regular breaks, and practice saying 'no' when overwhelmed. Time management and self-care aren't selfish - they're essential.",
      followups: ['Time management', 'Work-life balance', 'Boundary setting', 'Stress management'],
    },
    
    // Self-Care & Wellness
    {
      id: 'sleep',
      label: 'Sleep problems',
      icon: Moon,
      category: 'wellness',
      color: 'bg-indigo-500',
      response: "Good sleep is crucial for mental health. Try creating a bedtime routine: no screens 1 hour before bed, keep your room cool and dark, avoid caffeine after 2 PM, and try relaxation techniques like progressive muscle relaxation or meditation.",
      followups: ['Sleep hygiene tips', 'Relaxation techniques', 'Bedtime routines', 'Professional help'],
    },
    {
      id: 'selfcare',
      label: 'Self-care ideas',
      icon: Coffee,
      category: 'wellness',
      color: 'bg-green-500',
      response: "Self-care isn't selfish - it's necessary! Try: taking a warm bath, going for a walk in nature, journaling your thoughts, calling a friend, practicing mindfulness, reading a book, or doing something creative. What activities usually make you feel better?",
      followups: ['Mindfulness exercises', 'Creative activities', 'Physical wellness', 'Social connection'],
    },
    {
      id: 'mindfulness',
      label: 'Mindfulness & meditation',
      icon: Lightbulb,
      category: 'wellness',
      color: 'bg-yellow-500',
      response: "Mindfulness can significantly reduce stress and anxiety. Start with just 5 minutes daily: focus on your breath, notice thoughts without judgment, try body scans, or use guided meditation apps. Even mindful walking or eating can be beneficial.",
      followups: ['Guided meditations', 'Breathing exercises', 'Body scan techniques', 'Mindful activities'],
    },
    
    // Relationships & Social
    {
      id: 'relationships',
      label: 'Relationship issues',
      icon: Users,
      category: 'relationships',
      color: 'bg-pink-500',
      response: "Relationships can be challenging but also rewarding. Focus on healthy communication: use 'I' statements, listen actively, set boundaries, and remember that it's okay to ask for space when needed. Consider couples therapy for deeper issues.",
      followups: ['Communication tips', 'Boundary setting', 'Couples therapy', 'Conflict resolution'],
    },
    {
      id: 'loneliness',
      label: 'Feeling lonely',
      icon: Heart,
      category: 'relationships',
      color: 'bg-rose-500',
      response: "Loneliness is a common human experience. Try reaching out to one person today - a text, call, or meeting for coffee. Consider joining clubs, volunteering, or online communities with shared interests. Remember, quality connections matter more than quantity.",
      followups: ['Social activities', 'Support groups', 'Community resources', 'Making new friends'],
    },
    
    // Professional Help
    {
      id: 'therapy',
      label: 'I want to start therapy',
      icon: BookOpen,
      category: 'professional',
      color: 'bg-teal-500',
      response: "That's a wonderful step toward better mental health! Mantara offers various therapy options: individual therapy, group sessions, online consultations, and specialized treatments. Our licensed therapists specialize in anxiety, depression, trauma, relationships, and more.",
      followups: ['Book consultation', 'Therapy types', 'Find right therapist', 'Insurance coverage'],
    },
    {
      id: 'medication',
      label: 'Questions about medication',
      icon: Shield,
      category: 'professional',
      color: 'bg-cyan-500',
      response: "Medication can be an effective part of mental health treatment. Our psychiatrists can evaluate if medication might help you, discuss options, and monitor your progress. Always consult with a healthcare provider before starting, stopping, or changing medications.",
      followups: ['Psychiatrist consultation', 'Medication options', 'Side effects', 'Insurance coverage'],
    },
    
    // Goal Setting & Growth
    {
      id: 'goals',
      label: 'Setting mental health goals',
      icon: Target,
      category: 'growth',
      color: 'bg-emerald-500',
      response: "Setting mental health goals is empowering! Start with SMART goals: Specific, Measurable, Achievable, Relevant, Time-bound. Examples: 'I'll practice 10 minutes of mindfulness daily this week' or 'I'll reach out to one friend each day.' What area would you like to focus on?",
      followups: ['Goal setting tips', 'Habit building', 'Progress tracking', 'Motivation strategies'],
    },
  ];

  const categories = [
    { id: 'crisis', label: 'Crisis Support', color: 'bg-red-100 text-red-800' },
    { id: 'immediate', label: 'Immediate Help', color: 'bg-blue-100 text-blue-800' },
    { id: 'wellness', label: 'Wellness & Self-Care', color: 'bg-green-100 text-green-800' },
    { id: 'relationships', label: 'Relationships', color: 'bg-pink-100 text-pink-800' },
    { id: 'professional', label: 'Professional Help', color: 'bg-purple-100 text-purple-800' },
    { id: 'growth', label: 'Growth & Goals', color: 'bg-yellow-100 text-yellow-800' },
  ];

  const addMessage = (content: string, type: 'user' | 'bot', category?: string) => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
      category,
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: ChatOption) => {
    addMessage(option.label, 'user', option.category);
    setTimeout(() => {
      addMessage(option.response, 'bot', option.category);
      setShowOptions(false);
    }, 500);
  };

  const handleFollowupClick = (followup: string) => {
    addMessage(followup, 'user');
    setTimeout(() => {
      let response = '';
      switch (followup.toLowerCase()) {
        case 'book consultation':
          response = "I'd be happy to help you book a consultation! You can schedule a free 15-minute initial consultation with one of our licensed therapists through our booking system, or call us directly at (555) MANTARA. What type of support are you most interested in?";
          break;
        case 'find a therapist':
          response = "Finding the right therapist is important. At Mantara, we have specialists in anxiety, depression, trauma, relationships, and more. I can help match you based on your specific needs, preferences, and schedule. Would you like to tell me what you're looking for?";
          break;
        case 'breathing exercises':
          response = "Let's try the 4-7-8 breathing technique: Breathe in through your nose for 4 counts, hold for 7 counts, then exhale through your mouth for 8 counts. Repeat 3-4 times. This activates your parasympathetic nervous system and promotes relaxation.";
          break;
        case 'grounding techniques':
          response = "Here's a helpful grounding exercise: Look around and name 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This helps bring you back to the present moment.";
          break;
        default:
          response = "That's a great question! For personalized guidance and detailed resources, I recommend speaking with one of our licensed mental health professionals. They can provide tailored support for your specific situation. Would you like me to help you schedule a consultation?";
      }
      addMessage(response, 'bot');
    }, 500);
  };

  const handleInputSubmit = () => {
    if (!inputMessage.trim()) return;
    
    addMessage(inputMessage, 'user');
    const userMessage = inputMessage.toLowerCase();
    setInputMessage('');
    
    setTimeout(() => {
      let response = '';
      
      if (userMessage.includes('anxious') || userMessage.includes('anxiety')) {
        response = "I understand you're feeling anxious. That's a very common experience, and you're not alone. Try some deep breathing - inhale for 4 counts, hold for 4, exhale for 6. Would you like me to guide you through some specific anxiety-coping techniques?";
      } else if (userMessage.includes('depressed') || userMessage.includes('sad') || userMessage.includes('down')) {
        response = "I hear that you're going through a difficult time. These feelings are valid, and it's important to acknowledge them. Small steps can help - like getting some sunlight, talking to someone you trust, or doing one small self-care activity. How can I best support you right now?";
      } else if (userMessage.includes('stress') || userMessage.includes('overwhelmed')) {
        response = "Feeling stressed or overwhelmed is incredibly common, especially in today's world. Let's focus on what you can control right now. Can you identify one small task you could complete today? Sometimes breaking things down helps reduce that overwhelming feeling.";
      } else if (userMessage.includes('sleep') || userMessage.includes('insomnia')) {
        response = "Sleep issues can really impact your mental health. Good sleep hygiene includes: keeping a consistent bedtime, avoiding screens before bed, and creating a relaxing bedtime routine. Are you having trouble falling asleep or staying asleep?";
      } else if (userMessage.includes('therapy') || userMessage.includes('therapist')) {
        response = "Seeking therapy is a positive step toward better mental health! At Mantara, we offer various types of therapy including individual sessions, group therapy, and specialized treatments. Would you like help finding the right therapist for your needs?";
      } else if (userMessage.includes('help') || userMessage.includes('support')) {
        response = "I'm here to help! Mantara offers comprehensive mental health support including crisis intervention, therapy, self-care resources, and professional guidance. What specific area would you like support with today?";
      } else {
        response = "Thank you for sharing that with me. I'm here to listen and provide support. While I can offer general mental health information and resources, for personalized care, I'd recommend connecting with one of our licensed therapists. Is there a specific aspect of your mental health you'd like to focus on?";
      }
      
      addMessage(response, 'bot');
    }, 800);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: "Hello! I'm Mantara's AI Mental Health Assistant. I'm here to provide support, resources, and guidance for your mental wellbeing. How can I help you today?",
        timestamp: new Date(),
      },
    ]);
    setShowOptions(true);
    setCurrentCategory(null);
  };

  const filterOptionsByCategory = (category: string) => {
    return chatOptions.filter(option => option.category === category);
  };

  return (
    <>
      {/* Enhanced Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-elevated gradient-hero hover:scale-110 transition-bounce z-40 animate-pulse-soft"
        size="sm"
      >
        <MessageCircle className="w-7 h-7 text-primary-foreground" />
      </Button>

      {/* Enhanced Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-[420px] h-[600px] shadow-elevated z-50 border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-3 gradient-hero">
            <CardTitle className="text-lg font-playfair font-semibold text-primary-foreground flex items-center">
              <Bot className="w-6 h-6 mr-2" />
              Mantara AI Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-5 h-5" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(600px-100px)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[85%] rounded-xl p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <div className="text-sm leading-relaxed">{message.content}</div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Category Selection */}
                {showOptions && !currentCategory && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center font-medium">
                      Choose a category for support:
                    </p>
                    <div className="grid grid-cols-2 gap-2">
                      {categories.map((category) => (
                        <Button
                          key={category.id}
                          variant="outline"
                          className="h-auto p-3 text-left"
                          onClick={() => setCurrentCategory(category.id)}
                        >
                          <div className="text-xs font-medium">{category.label}</div>
                        </Button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Category Options */}
                {showOptions && currentCategory && (
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Badge className={categories.find(c => c.id === currentCategory)?.color}>
                        {categories.find(c => c.id === currentCategory)?.label}
                      </Badge>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => setCurrentCategory(null)}
                        className="text-xs"
                      >
                        Back
                      </Button>
                    </div>
                    {filterOptionsByCategory(currentCategory).map((option) => (
                      <Button
                        key={option.id}
                        variant="outline"
                        className="w-full justify-start text-left h-auto p-3 hover:bg-accent/10"
                        onClick={() => handleOptionClick(option)}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center mr-3 ${option.color}`}>
                          <option.icon className="w-4 h-4 text-white" />
                        </div>
                        <span className="text-sm">{option.label}</span>
                      </Button>
                    ))}
                  </div>
                )}

                {/* Quick Actions */}
                {!showOptions && (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground text-center font-medium">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Book consultation')}
                      >
                        <Calendar className="w-3 h-3 mr-1" />
                        Book Session
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Find a therapist')}
                      >
                        <Users className="w-3 h-3 mr-1" />
                        Find Therapist
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Emergency help')}
                      >
                        <Phone className="w-3 h-3 mr-1" />
                        Emergency
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetChat}
                      >
                        <Target className="w-3 h-3 mr-1" />
                        Start Over
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>

            {/* Message Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  placeholder="Type your message..."
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleInputSubmit()}
                  className="flex-1"
                />
                <Button 
                  onClick={handleInputSubmit}
                  disabled={!inputMessage.trim()}
                  className="gradient-hero"
                >
                  <Send className="w-4 h-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-2 text-center">
                This AI assistant provides general support. For personalized care, consult our therapists.
              </p>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default EnhancedChatBot;