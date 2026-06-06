import React from 'react';

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: 'cyan' | 'purple' | 'blue' | 'none';
  onClick?: () => void;
}

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  glowColor = 'cyan',
  onClick,
}) => {
  const glowClasses = {
    cyan: 'hover:border-highlight-cyan/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_20px_0_rgba(6,182,212,0.15)]',
    purple: 'hover:border-highlight-purple/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_20px_0_rgba(139,92,246,0.15)]',
    blue: 'hover:border-secondary-accent/30 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.7),0_0_20px_0_rgba(59,130,246,0.15)]',
    none: 'hover:border-white/20 hover:shadow-2xl',
  };

  const interactiveClasses = onClick ? 'cursor-pointer active:scale-95' : '';

  return (
    <div
      onClick={onClick}
      className={`glass-panel glass-panel-hover rounded-2xl p-6 relative overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${glowClasses[glowColor]} ${interactiveClasses} ${className}`}
    >
      {/* Mesh Glow Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none opacity-0 hover:opacity-100 transition-opacity duration-500" />
      
      {/* Decorative gradient corner node */}
      <div className="absolute -top-12 -right-12 w-24 h-24 bg-gradient-to-br from-highlight-cyan/20 to-highlight-purple/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none" />

      <div className="relative z-10">{children}</div>
    </div>
  );
};
