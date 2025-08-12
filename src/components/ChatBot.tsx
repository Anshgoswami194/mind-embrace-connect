import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ScrollArea } from '@/components/ui/scroll-area';
import { MessageCircle, X, Send, Bot, User, Heart, Brain, Smile, Phone } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

interface ChatOption {
  id: string;
  label: string;
  icon: any;
  response: string;
  followups?: string[];
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: 'Hello! I\'m here to help you with mental health support. How are you feeling today?',
      timestamp: new Date(),
    },
  ]);
  const [showOptions, setShowOptions] = useState(true);

  const chatOptions: ChatOption[] = [
    {
      id: 'anxiety',
      label: 'I\'m feeling anxious',
      icon: Brain,
      response: 'I understand you\'re feeling anxious. This is very common and you\'re not alone. Here are some immediate techniques that can help: deep breathing (4-7-8 technique), grounding exercises (5-4-3-2-1 method), and gentle movement. Would you like me to guide you through any of these?',
      followups: ['Breathing exercises', 'Grounding techniques', 'Find a therapist', 'Crisis support'],
    },
    {
      id: 'depression',
      label: 'I\'m feeling depressed',
      icon: Heart,
      response: 'Thank you for sharing that with me. Depression can feel overwhelming, but there is hope and help available. Small steps can make a big difference - like maintaining a daily routine, staying connected with loved ones, and seeking professional support. You\'ve taken an important step by reaching out.',
      followups: ['Self-care tips', 'Find support groups', 'Professional help', 'Crisis resources'],
    },
    {
      id: 'stress',
      label: 'I\'m stressed about work/life',
      icon: Smile,
      response: 'Work and life stress is incredibly common, especially these days. Let\'s focus on what you can control. Breaking tasks into smaller pieces, setting boundaries, and taking regular breaks can help. Remember, it\'s okay to ask for help.',
      followups: ['Stress management', 'Work-life balance', 'Time management', 'Relaxation techniques'],
    },
    {
      id: 'crisis',
      label: 'I need immediate help',
      icon: Phone,
      response: 'I\'m glad you reached out. If you\'re having thoughts of suicide or self-harm, please contact emergency services (911) or the 988 Suicide & Crisis Lifeline (call or text 988) immediately. You can also text HOME to 741741 for the Crisis Text Line. You are important and help is available.',
      followups: ['Call 988 Lifeline', 'Text Crisis Line', 'Emergency Services', 'Find local resources'],
    },
  ];

  const addMessage = (content: string, type: 'user' | 'bot') => {
    const newMessage: Message = {
      id: Date.now().toString(),
      type,
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, newMessage]);
  };

  const handleOptionClick = (option: ChatOption) => {
    addMessage(option.label, 'user');
    setTimeout(() => {
      addMessage(option.response, 'bot');
      setShowOptions(false);
    }, 500);
  };

  const handleFollowupClick = (followup: string) => {
    addMessage(followup, 'user');
    setTimeout(() => {
      addMessage('I\'d be happy to help you with that. For personalized support and resources, I recommend speaking with one of our licensed mental health professionals. Would you like me to help you schedule a consultation?', 'bot');
    }, 500);
  };

  const resetChat = () => {
    setMessages([
      {
        id: '1',
        type: 'bot',
        content: 'Hello! I\'m here to help you with mental health support. How are you feeling today?',
        timestamp: new Date(),
      },
    ]);
    setShowOptions(true);
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full shadow-elevated gradient-hero hover:scale-105 transition-bounce z-40"
        size="sm"
      >
        <MessageCircle className="w-6 h-6 text-primary-foreground" />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] shadow-elevated z-50 border-0">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 gradient-hero">
            <CardTitle className="text-lg font-semibold text-primary-foreground flex items-center">
              <Bot className="w-5 h-5 mr-2" />
              MindCare Assistant
            </CardTitle>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(false)}
              className="text-primary-foreground hover:bg-primary-foreground/20"
            >
              <X className="w-4 h-4" />
            </Button>
          </CardHeader>
          
          <CardContent className="p-0 flex flex-col h-[calc(500px-80px)]">
            <ScrollArea className="flex-1 p-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.type === 'user'
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-muted text-muted-foreground'
                      }`}
                    >
                      <div className="flex items-start space-x-2">
                        {message.type === 'bot' && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        {message.type === 'user' && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                        <p className="text-sm">{message.content}</p>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Chat Options */}
                {showOptions && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground text-center">Choose what best describes how you're feeling:</p>
                    {chatOptions.map((option) => (
                      <Button
                        key={option.id}
                        variant="outline"
                        className="w-full justify-start text-left h-auto p-3"
                        onClick={() => handleOptionClick(option)}
                      >
                        <option.icon className="w-4 h-4 mr-3 flex-shrink-0" />
                        <span className="text-sm">{option.label}</span>
                      </Button>
                    ))}
                  </div>
                )}

                {/* Quick Actions */}
                {!showOptions && (
                  <div className="space-y-2">
                    <p className="text-sm text-muted-foreground text-center">Quick actions:</p>
                    <div className="grid grid-cols-2 gap-2">
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Schedule consultation')}
                      >
                        Book Session
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Find resources')}
                      >
                        Resources
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleFollowupClick('Emergency help')}
                      >
                        Emergency
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        onClick={resetChat}
                      >
                        Start Over
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </ScrollArea>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default ChatBot;