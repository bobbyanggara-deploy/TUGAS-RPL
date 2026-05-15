import React from 'react';
import { LOGO_URL } from '../constants';
import { View, Role } from '../types';
import { cn } from '../lib/utils';

interface TopBarProps {
  view: View;
  role: Role;
  onBack?: () => void;
  onNotificationClick?: () => void;
}

export const TopBar: React.FC<TopBarProps> = ({ view, role, onBack, onNotificationClick }) => {
  if (view === 'ROLE_SELECTION') {
    return (
      <header className="bg-surface shadow-sm h-16 flex items-center px-6 sticky top-0 z-40">
        <div className="flex items-center gap-3">
          <img 
            src={LOGO_URL} 
            className="w-10 h-10 object-contain" 
            alt="Logo" 
            referrerPolicy="no-referrer"
          />
          <h1 className="font-display text-xl text-primary font-bold tracking-tight">Roti Bakar Oke</h1>
        </div>
      </header>
    );
  }

  const showBack = ['INPUT_STOCK', 'CART', 'RECEIPT'].includes(view);

  return (
    <header className="bg-surface shadow-[0_4px_20px_rgba(74,63,63,0.04)] h-16 flex items-center justify-between px-6 sticky top-0 z-40">
      <div className="flex items-center gap-3">
        {showBack && (
          <button 
            onClick={onBack}
            className="material-symbols-outlined text-primary active:scale-90 transition-all mr-1"
          >
            arrow_back
          </button>
        )}
        <div className="flex items-center gap-2">
          {!showBack && (
            <div className="w-10 h-10 rounded-full bg-primary-fixed overflow-hidden flex items-center justify-center">
              <img 
                src={LOGO_URL} 
                className="w-full h-full object-contain"
                alt="Logo"
                referrerPolicy="no-referrer"
              />
            </div>
          )}
          <h1 className="font-display text-xl text-primary font-bold tracking-tight">Roti Bakar Oke</h1>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button 
          onClick={onNotificationClick}
          className="material-symbols-outlined text-primary p-2 hover:bg-surface-container-low rounded-full transition-colors"
        >
          notifications
        </button>
        {view === 'POS' && (
          <div className="hidden sm:flex bg-surface-container px-3 py-1.5 rounded-full">
            <span className="text-xs font-semibold text-on-surface-variant">Kasir #12</span>
          </div>
        )}
      </div>
    </header>
  );
};
