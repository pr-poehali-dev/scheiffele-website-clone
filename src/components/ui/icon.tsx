
import React from 'react';
import { Icon as LucideIcon, type LucideProps } from 'lucide-react';
import * as LucideIcons from 'lucide-react';

interface IconProps extends LucideProps {
  name: string;
  fallback?: string;
}

const Icon = ({ name, fallback = "HelpCircle", ...props }: IconProps) => {
  const IconComponent = (LucideIcons as any)[name] || 
                        (LucideIcons as any)[fallback];
  
  return <IconComponent {...props} />;
};

export default Icon;
