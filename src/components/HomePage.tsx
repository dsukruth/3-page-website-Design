import React from 'react';
import { CustomButton } from './CustomButton';

interface HomePageProps {
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

export function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="min-h-screen bg-background relative">
      {/* Hero Section with floating glass panel */}
      <div className="flex flex-col items-center justify-center min-h-screen px-20 text-center pt-20">
        <div className="max-w-6xl mx-auto space-y-12 relative">
          {/* Floating glass container for hero content */}
          <div className="floating-glass rounded-3xl p-12 liquid-glow transform hover:scale-105 transition-all duration-500">
            {/* Main Heading with animated gradient text */}
            <h1 className="font-montserrat font-bold text-7xl text-foreground leading-tight relative">
              <span className="relative z-10 bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent animate-pulse">
                LET'S CREATE A<br />
                WEBSITE DESIGN
              </span>
              <div className="absolute inset-0 bg-primary/10 blur-2xl rounded-lg opacity-50"></div>
            </h1>
            
            {/* Subheading in glass container */}
            <div className="glass rounded-2xl p-8 mt-8 liquid-glow">
              <p className="font-montserrat text-xl text-muted-foreground max-w-3xl mx-auto">
                Building innovative digital experiences through clean design and modern web technologies. 
                Passionate about creating user-centered solutions that make a difference.
              </p>
            </div>
            
            {/* CTA Button */}
            <div className="pt-8">
              <CustomButton 
                variant="primary" 
                size="lg"
                onClick={() => onNavigate('contact')}
              >
                Get Started
              </CustomButton>
            </div>
          </div>
          
          {/* Floating decorative elements */}
          <div className="absolute -top-10 -left-10 w-20 h-20 glass rounded-full opacity-30 animate-bounce" style={{animationDelay: '1s'}}></div>
          <div className="absolute -bottom-10 -right-10 w-16 h-16 glass rounded-full opacity-20 animate-bounce" style={{animationDelay: '3s'}}></div>
          <div className="absolute top-1/2 -right-20 w-12 h-12 glass rounded-full opacity-25 animate-bounce" style={{animationDelay: '2s'}}></div>
        </div>
      </div>
      
      {/* Footer with glass effect */}
      <footer className="text-center py-8 px-20 glass-navbar border-t border-border/30">
        <p className="font-montserrat text-muted-foreground">
          © Dhanush Sukruth | University of Maryland | Fall 2025
        </p>
      </footer>
    </div>
  );
}