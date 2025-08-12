import { useState } from 'react';
import Navigation from '@/components/Navigation';
import HomePage from '@/components/HomePage';
import AboutPage from '@/components/AboutPage';
import ServicesPage from '@/components/ServicesPage';
import EnhancedChatBot from '@/components/EnhancedChatBot';

const Index = () => {
  const [currentPage, setCurrentPage] = useState<'home' | 'about' | 'services'>('home');

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={setCurrentPage} />;
      case 'about':
        return <AboutPage />;
      case 'services':
        return <ServicesPage />;
      default:
        return <HomePage onNavigate={setCurrentPage} />;
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation currentPage={currentPage} onNavigate={setCurrentPage} />
      {renderPage()}
      <EnhancedChatBot />
    </div>
  );
};

export default Index;
