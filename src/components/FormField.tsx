import React from 'react';

interface FormFieldProps {
  label: string;
  type?: 'text' | 'email' | 'textarea';
  name: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  required?: boolean;
}

export function FormField({ 
  label, 
  type = 'text', 
  name, 
  value, 
  onChange, 
  placeholder,
  required = false 
}: FormFieldProps) {
  const inputClasses = "w-full px-6 py-4 glass-input rounded-2xl text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all duration-300 focus:transform focus:scale-105";

  return (
    <div className="space-y-3 group">
      <label htmlFor={name} className="block font-montserrat font-medium text-foreground relative">
        <span className="relative z-10">
          {label} {required && <span className="text-primary">*</span>}
        </span>
        <div className="absolute inset-0 bg-primary/5 blur-xl rounded-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-300"></div>
      </label>
      {type === 'textarea' ? (
        <div className="relative">
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            rows={4}
            className={`${inputClasses} resize-none`}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      ) : (
        <div className="relative">
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            required={required}
            className={inputClasses}
          />
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary/10 via-transparent to-primary/10 opacity-0 group-focus-within:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      )}
    </div>
  );
}