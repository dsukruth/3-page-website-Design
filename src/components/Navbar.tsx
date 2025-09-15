import React from 'react';

interface NavbarProps {
  currentPage: 'home' | 'about' | 'contact';
  onNavigate: (page: 'home' | 'about' | 'contact') => void;
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const navItems = [
    { key: 'home' as const, label: 'Home' },
    { key: 'about' as const, label: 'About' },
    { key: 'contact' as const, label: 'Contact' },
  ];

  return (
    <nav className="w-full h-20 glass-navbar px-20 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Logo with glass effect */}
      <div className="font-montserrat font-bold text-3xl text-foreground relative">
        <span className="relative z-10">Dhanush Sukruth</span>
        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-lg transform scale-110 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      
      {/* Navigation Links with glass containers */}
      <div className="flex items-center gap-2">
        {navItems.map((item) => (
          <button
            key={item.key}
            onClick={() => onNavigate(item.key)}
            className={`font-montserrat font-medium px-6 py-2 rounded-xl transition-all duration-300 relative overflow-hidden group ${
              currentPage === item.key
                ? 'text-primary glass-button'
                : 'text-foreground hover:text-primary glass hover:glass-button'
            }`}
          >
            <span className="relative z-10">{item.label}</span>
            {currentPage !== item.key && (
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            )}
          </button>
        ))}
      </div>
    </nav>
  );
}