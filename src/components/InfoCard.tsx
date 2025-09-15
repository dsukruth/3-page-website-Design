import React from 'react';

interface InfoCardProps {
  title: string;
  children: React.ReactNode;
}

export function InfoCard({ title, children }: InfoCardProps) {
  return (
    <div className="glass-card rounded-3xl p-8 liquid-glow transform hover:scale-105 hover:-translate-y-2 transition-all duration-500 group">
      <h3 className="font-montserrat font-bold text-xl text-foreground mb-6 relative">
        <span className="relative z-10">{title}</span>
        <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-primary/50 group-hover:w-full transition-all duration-500"></div>
      </h3>
      <div className="text-muted-foreground space-y-4 relative z-10">
        {children}
      </div>
      
      {/* Animated corner accents */}
      <div className="absolute top-4 right-4 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      <div className="absolute bottom-4 left-4 w-1.5 h-1.5 bg-primary/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{transitionDelay: '100ms'}}></div>
    </div>
  );
}