import React from 'react';
import { InfoCard } from './InfoCard';

export function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative pt-20">
      {/* Header Section with floating glass */}
      <div className="px-20 py-16 text-center relative">
        <div className="floating-glass rounded-3xl p-12 max-w-5xl mx-auto liquid-glow">
          <h1 className="font-montserrat font-bold text-5xl text-foreground mb-6 relative">
            <span className="bg-gradient-to-r from-foreground via-primary/80 to-foreground bg-clip-text text-transparent">
              BUDT748 INDUSTRY PRACTICUM
            </span>
          </h1>
          <p className="font-montserrat text-xl text-muted-foreground max-w-4xl mx-auto">
            An intensive course focused on real-world business applications and industry best practices
          </p>
        </div>
        
        {/* Floating decorative elements */}
        <div className="absolute top-10 left-10 w-16 h-16 glass rounded-full opacity-20 animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-12 h-12 glass rounded-full opacity-30 animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      {/* Content Section */}
      <div className="px-20 pb-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Column - Course Description in floating glass container */}
          <div className="floating-glass rounded-3xl p-8 space-y-6 liquid-glow transform hover:scale-105 transition-all duration-500">
            <h2 className="font-montserrat font-bold text-2xl text-foreground relative">
              <span className="relative z-10">Course Overview</span>
              <div className="absolute -bottom-2 left-0 w-20 h-0.5 bg-gradient-to-r from-primary to-primary/30"></div>
            </h2>
            <div className="space-y-6 text-muted-foreground font-montserrat relative z-10">
              <div className="glass rounded-2xl p-6 liquid-glow">
                <p>
                  BUDT748 Industry Practicum provides students with hands-on experience in solving 
                  real business challenges through collaborative projects with industry partners. 
                  This course bridges the gap between academic learning and professional practice.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 liquid-glow">
                <p>
                  Students work in cross-functional teams to analyze complex business problems, 
                  develop strategic solutions, and present recommendations to stakeholders. 
                  The practicum emphasizes critical thinking, data analysis, and effective communication.
                </p>
              </div>
              <div className="glass rounded-2xl p-6 liquid-glow">
                <p>
                  Through this experience, students gain valuable insights into industry operations, 
                  develop professional networks, and enhance their readiness for the modern workplace.
                </p>
              </div>
            </div>
            
            {/* Floating accent */}
            <div className="absolute -top-4 -right-4 w-8 h-8 glass rounded-full opacity-40 animate-bounce"></div>
          </div>

          {/* Right Column - Course Details */}
          <div className="space-y-8">
            <InfoCard title="Course Information">
              <div className="space-y-3">
                <div className="glass rounded-xl p-3">
                  <p><strong>Professor:</strong> Paul T Shapiro</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p><strong>Professor Email:</strong> pshapiro@umd.edu</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p><strong>Teaching Assistants:</strong> ZAM - zam@umd.edu, SAMIHA - smeah@umd.edu, ABHI - agupta09@umd.edu</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p><strong>Semester:</strong> Fall 2025</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p><strong>Credits:</strong> 3</p>
                </div>
                <div className="glass rounded-xl p-3">
                  <p><strong>Meeting Time:</strong> Monday and Wednesday, 8:00 -9:15 AM</p>
                </div>
              </div>
            </InfoCard>

            <InfoCard title="Key Learning Outcomes">
              <ul className="space-y-3">
                <li className="glass rounded-xl p-3 transform hover:scale-105 transition-transform duration-200">• Apply business analytics to real-world scenarios</li>
                <li className="glass rounded-xl p-3 transform hover:scale-105 transition-transform duration-200">• Develop strategic recommendations based on data insights</li>
                <li className="glass rounded-xl p-3 transform hover:scale-105 transition-transform duration-200">• Present findings to industry professionals</li>
                <li className="glass rounded-xl p-3 transform hover:scale-105 transition-transform duration-200">• Collaborate effectively in diverse team environments</li>
                <li className="glass rounded-xl p-3 transform hover:scale-105 transition-transform duration-200">• Build professional network connections</li>
              </ul>
            </InfoCard>
          </div>
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