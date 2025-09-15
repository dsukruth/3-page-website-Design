import React from 'react';
import { InfoCard } from './InfoCard';

export function ContactPage() {

  return (
    <div className="min-h-screen bg-background relative pt-20">
      {/* Header Section with floating glass */}
      <div className="px-20 py-16 text-center relative">
        <div className="floating-glass rounded-3xl p-12 max-w-4xl mx-auto liquid-glow">
          <h1 className="font-montserrat font-bold text-5xl text-foreground mb-6 relative">
            <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
              Contact Us
            </span>
          </h1>
          <p className="font-montserrat text-xl text-muted-foreground max-w-3xl mx-auto">
            Have questions about the course or need support? We're here to help.
          </p>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 right-20 w-14 h-14 glass rounded-full opacity-25 animate-pulse"></div>
        <div className="absolute bottom-10 left-20 w-10 h-10 glass rounded-full opacity-30 animate-pulse" style={{animationDelay: '1.5s'}}></div>
      </div>

      {/* Content Section */}
      <div className="px-20 pb-16">
        <div className="max-w-4xl mx-auto">
          {/* Course Contact Information - Centered */}
          <InfoCard title="Course Contacts">
            <div className="space-y-6">
              <div className="glass rounded-2xl p-6 liquid-glow">
                <h4 className="font-montserrat font-semibold text-foreground mb-3">Professor</h4>
                <div className="space-y-1">
                  <p>Paul T. Shapiro</p>
                  <p>Email: pshapiro@umd.edu</p>
                  <p>Office: 4301 Van Munching Hall</p>
                  <p>Office Hours: Mon/Wed 1:00-3:00 PM</p>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-6 liquid-glow">
                <h4 className="font-montserrat font-semibold text-foreground mb-3">Teaching Assistants</h4>
                <div className="space-y-1">
                  <p>Abhi Gupta - agupta09@umd.edu</p>
                  <p>Samiha Meah - smeah@umd.edu</p>
                  <p>Zam Mozumder - zam@umd.edu</p>
                  <p>TA Hours: Fri 10:00 AM-12:00 PM</p>
                </div>
              </div>
              
              <div className="glass rounded-2xl p-6 liquid-glow">
                <h4 className="font-montserrat font-semibold text-foreground mb-3">Student Contact</h4>
                <div className="space-y-1">
                  <p>Dhanush Sukruth</p>
                  <p>Email: dsukruth@umd.edu</p>
                </div>
              </div>
            </div>
          </InfoCard>
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