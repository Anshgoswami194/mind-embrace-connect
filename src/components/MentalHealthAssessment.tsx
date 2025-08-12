import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Brain, Heart, ArrowRight, CheckCircle, RotateCcw } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface Question {
  id: string;
  text: string;
  options: { value: string; label: string; score: number }[];
}

const MentalHealthAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { toast } = useToast();

  const questions: Question[] = [
    {
      id: 'mood',
      text: 'Over the past two weeks, how often have you been bothered by feeling down, depressed, or hopeless?',
      options: [
        { value: 'not-at-all', label: 'Not at all', score: 0 },
        { value: 'several-days', label: 'Several days', score: 1 },
        { value: 'more-than-half', label: 'More than half the days', score: 2 },
        { value: 'nearly-every-day', label: 'Nearly every day', score: 3 },
      ],
    },
    {
      id: 'interest',
      text: 'Over the past two weeks, how often have you had little interest or pleasure in doing things?',
      options: [
        { value: 'not-at-all', label: 'Not at all', score: 0 },
        { value: 'several-days', label: 'Several days', score: 1 },
        { value: 'more-than-half', label: 'More than half the days', score: 2 },
        { value: 'nearly-every-day', label: 'Nearly every day', score: 3 },
      ],
    },
    {
      id: 'anxiety',
      text: 'Over the past two weeks, how often have you been bothered by feeling nervous, anxious, or on edge?',
      options: [
        { value: 'not-at-all', label: 'Not at all', score: 0 },
        { value: 'several-days', label: 'Several days', score: 1 },
        { value: 'more-than-half', label: 'More than half the days', score: 2 },
        { value: 'nearly-every-day', label: 'Nearly every day', score: 3 },
      ],
    },
    {
      id: 'worry',
      text: 'Over the past two weeks, how often have you been unable to stop or control worrying?',
      options: [
        { value: 'not-at-all', label: 'Not at all', score: 0 },
        { value: 'several-days', label: 'Several days', score: 1 },
        { value: 'more-than-half', label: 'More than half the days', score: 2 },
        { value: 'nearly-every-day', label: 'Nearly every day', score: 3 },
      ],
    },
    {
      id: 'sleep',
      text: 'How would you rate your sleep quality over the past two weeks?',
      options: [
        { value: 'excellent', label: 'Excellent', score: 0 },
        { value: 'good', label: 'Good', score: 1 },
        { value: 'fair', label: 'Fair', score: 2 },
        { value: 'poor', label: 'Poor', score: 3 },
      ],
    },
  ];

  const handleAnswerChange = (value: string) => {
    setAnswers(prev => ({
      ...prev,
      [questions[currentQuestion].id]: value,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      calculateResults();
    }
  };

  const calculateResults = () => {
    let totalScore = 0;
    questions.forEach(question => {
      const answer = answers[question.id];
      if (answer) {
        const option = question.options.find(opt => opt.value === answer);
        if (option) {
          totalScore += option.score;
        }
      }
    });
    setScore(totalScore);
    setShowResults(true);
  };

  const getResultInterpretation = (score: number) => {
    if (score <= 4) {
      return {
        level: 'Minimal',
        color: 'text-green-600',
        bgColor: 'bg-green-50',
        description: 'Your responses suggest minimal symptoms. This is a positive sign for your mental well-being.',
        recommendation: 'Continue with healthy lifestyle practices and consider our wellness resources for maintaining good mental health.',
      };
    } else if (score <= 9) {
      return {
        level: 'Mild',
        color: 'text-yellow-600',
        bgColor: 'bg-yellow-50',
        description: 'Your responses suggest mild symptoms that may be impacting your daily life.',
        recommendation: 'Consider speaking with one of our therapists for support and coping strategies.',
      };
    } else if (score <= 14) {
      return {
        level: 'Moderate',
        color: 'text-orange-600',
        bgColor: 'bg-orange-50',
        description: 'Your responses suggest moderate symptoms that are likely affecting your daily functioning.',
        recommendation: 'We strongly recommend scheduling a consultation with one of our mental health professionals.',
      };
    } else {
      return {
        level: 'Severe',
        color: 'text-red-600',
        bgColor: 'bg-red-50',
        description: 'Your responses suggest significant symptoms that may be severely impacting your life.',
        recommendation: 'We recommend immediate consultation with a mental health professional. Please consider contacting our crisis support if needed.',
      };
    }
  };

  const resetAssessment = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = answers[questions[currentQuestion]?.id];

  if (showResults) {
    const result = getResultInterpretation(score);
    
    return (
      <Card className="w-full max-w-2xl mx-auto shadow-card">
        <CardHeader className="text-center gradient-hero text-primary-foreground">
          <CardTitle className="text-2xl font-playfair flex items-center justify-center">
            <CheckCircle className="w-6 h-6 mr-2" />
            Assessment Complete
          </CardTitle>
          <CardDescription className="text-primary-foreground/90">
            Here are your results and personalized recommendations
          </CardDescription>
        </CardHeader>
        
        <CardContent className="p-6 space-y-6">
          <div className={`p-6 rounded-lg ${result.bgColor}`}>
            <div className="text-center mb-4">
              <h3 className={`text-2xl font-bold ${result.color}`}>
                {result.level} Symptoms
              </h3>
              <p className="text-lg text-muted-foreground">
                Score: {score} out of {questions.length * 3}
              </p>
            </div>
            
            <div className="space-y-4">
              <p className="text-muted-foreground">{result.description}</p>
              <div className="p-4 bg-background rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Our Recommendation:</h4>
                <p className="text-muted-foreground">{result.recommendation}</p>
              </div>
            </div>
          </div>

          <div className="text-center space-y-4">
            <p className="text-sm text-muted-foreground">
              <strong>Important:</strong> This assessment is for informational purposes only and is not a substitute for professional diagnosis.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button 
                className="flex-1 gradient-hero"
                onClick={() => {
                  toast({
                    title: "Booking Consultation",
                    description: "Redirecting you to our booking system...",
                  });
                }}
              >
                Book Consultation
              </Button>
              <Button 
                variant="outline" 
                onClick={resetAssessment}
                className="flex-1"
              >
                <RotateCcw className="w-4 h-4 mr-2" />
                Retake Assessment
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-card">
      <CardHeader className="gradient-hero text-primary-foreground">
        <CardTitle className="text-2xl font-playfair flex items-center">
          <Brain className="w-6 h-6 mr-2" />
          Mental Health Assessment
        </CardTitle>
        <CardDescription className="text-primary-foreground/90">
          A brief questionnaire to help understand your current mental well-being
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <div className="space-y-6">
          {/* Progress */}
          <div className="space-y-2">
            <div className="flex justify-between text-sm text-muted-foreground">
              <span>Question {currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground leading-relaxed">
              {questions[currentQuestion]?.text}
            </h3>
            
            <RadioGroup
              value={currentAnswer || ''}
              onValueChange={handleAnswerChange}
              className="space-y-3"
            >
              {questions[currentQuestion]?.options.map((option) => (
                <div key={option.value} className="flex items-center space-x-3">
                  <RadioGroupItem value={option.value} id={option.value} />
                  <Label 
                    htmlFor={option.value} 
                    className="flex-1 cursor-pointer font-poppins"
                  >
                    {option.label}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Navigation */}
          <div className="flex justify-between pt-4">
            <Button
              variant="outline"
              onClick={() => setCurrentQuestion(Math.max(0, currentQuestion - 1))}
              disabled={currentQuestion === 0}
            >
              Previous
            </Button>
            
            <Button
              onClick={handleNext}
              disabled={!currentAnswer}
              className="gradient-hero"
            >
              {currentQuestion === questions.length - 1 ? 'Get Results' : 'Next'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default MentalHealthAssessment;