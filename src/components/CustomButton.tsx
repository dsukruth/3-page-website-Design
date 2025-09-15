import React from 'react';

interface CustomButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export function CustomButton({ 
  children, 
  variant = 'primary', 
  size = 'md',
  disabled = false,
  onClick,
  type = 'button'
}: CustomButtonProps) {
  const baseClasses = "font-montserrat font-semibold rounded-2xl transition-all duration-300 cursor-pointer inline-flex items-center justify-center relative overflow-hidden group transform hover:scale-105 hover:-translate-y-1";
  
  const variantClasses = {
    primary: "glass-button text-primary-foreground shadow-lg shadow-primary/25",
    secondary: "glass text-foreground border border-foreground/20 hover:border-primary/50"
  };
  
  const sizeClasses = {
    sm: "px-6 py-3 text-sm",
    md: "px-8 py-4",
    lg: "px-10 py-5 text-lg"
  };
  
  const disabledClasses = disabled ? "opacity-50 cursor-not-allowed transform-none hover:scale-100 hover:translate-y-0" : "";

  return (
    <button
      type={type}
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${disabledClasses}`}
    >
      <span className="relative z-10">{children}</span>
      {!disabled && (
        <>
          {/* Animated background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          {/* Shimmer effect */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
        </>
      )}
    </button>
  );
}