import React from 'react';
import { View, Role } from '../types';
import { cn } from '../lib/utils';

interface NavItemProps {
  icon: string;
  label: string;
  isActive: boolean;
  onClick: () => void;
  fill?: boolean;
}

const NavItem = ({ icon, label, isActive, onClick, fill }: NavItemProps) => (
  <button
    onClick={onClick}
    className={cn(
      "flex flex-col items-center justify-center flex-1 py-1 px-4 transition-all active:scale-90",
      isActive 
        ? "bg-primary text-on-primary rounded-xl shadow-md" 
        : "text-on-surface-variant hover:text-primary"
    )}
  >
    <span 
      className="material-symbols-outlined text-[24px]"
      style={fill || isActive ? { fontVariationSettings: "'FILL' 1" } : {}}
    >
      {icon}
    </span>
    <span className="text-[10px] font-medium mt-0.5">{label}</span>
  </button>
);

interface NavBarProps {
  currentView: View;
  role: Role;
  onViewChange: (view: View) => void;
}

export const NavBar: React.FC<NavBarProps> = ({ currentView, role, onViewChange }) => {
  if (currentView === 'ROLE_SELECTION' || currentView === 'RECEIPT') return null;

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 bg-surface border-t border-outline-variant shadow-[0_-4px_20px_rgba(74,63,63,0.04)] px-4 py-2 flex justify-around items-center h-16">
      <NavItem 
        icon="point_of_sale" 
        label="Kasir" 
        isActive={currentView === 'POS' || currentView === 'CART'} 
        onClick={() => onViewChange('POS')}
      />
      
      {role === 'OWNER' && (
        <NavItem 
          icon="inventory_2" 
          label="Stock" 
          isActive={currentView === 'STOCK' || currentView === 'INPUT_STOCK'} 
          onClick={() => onViewChange('STOCK')}
        />
      )}

      <NavItem 
        icon="history" 
        label="Aktivitas" 
        isActive={currentView === 'DASHBOARD'} 
        onClick={() => onViewChange('DASHBOARD')}
      />
      
      <NavItem 
        icon="person" 
        label="Akun" 
        isActive={currentView === 'ACCOUNT'} 
        onClick={() => onViewChange('ACCOUNT')}
      />
    </nav>
  );
};
