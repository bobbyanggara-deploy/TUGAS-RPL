import React from 'react';
import { RAW_MATERIALS } from '../constants';

interface StockManagementProps {
  onAdd: () => void;
}

export const StockManagement: React.FC<StockManagementProps> = ({ onAdd }) => {
  return (
    <div className="px-6 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold text-on-surface mb-4">Manajemen Stok</h2>
        <div className="relative group">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
          <input 
            type="text"
            className="w-full h-12 pl-12 pr-4 rounded-2xl border-none bg-surface-container-low focus:ring-2 focus:ring-primary/20 text-on-surface placeholder-on-surface-variant transition-all font-medium"
            placeholder="Cari bahan baku atau produk..."
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
        <div className="bg-primary p-5 rounded-2xl text-on-primary shadow-md flex flex-col justify-between h-32">
          <span className="font-bold text-sm opacity-80 uppercase tracking-widest">Total Items</span>
          <span className="font-display text-4xl font-bold">124</span>
        </div>
        <div className="bg-surface-container-high p-5 rounded-2xl text-on-surface shadow-sm flex flex-col justify-between h-32 border border-outline-variant/20">
          <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest">Stok Menipis</span>
          <div className="flex items-center gap-2">
            <span className="font-display text-4xl font-bold text-error">12</span>
            <span className="material-symbols-outlined text-error text-3xl">warning</span>
          </div>
        </div>
        <div className="bg-surface-container-high p-5 rounded-2xl text-on-surface shadow-sm flex flex-col justify-between h-32 border border-outline-variant/20">
          <span className="font-bold text-sm text-on-surface-variant uppercase tracking-widest">Update Terakhir</span>
          <span className="font-bold text-sm text-on-surface">Hari ini, 08:30</span>
        </div>
      </div>

      <div className="space-y-4">
        {RAW_MATERIALS.map(item => (
          <div 
            key={item.id}
            className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm border border-outline-variant flex items-center justify-between hover:bg-surface-container transition-all group"
          >
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 rounded-xl overflow-hidden bg-surface-container-high flex-shrink-0">
                <img src={item.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={item.name} />
              </div>
              <div>
                <h3 className="font-display font-bold text-lg text-on-surface mb-0.5">{item.name}</h3>
                <p className="text-[10px] font-bold text-on-surface-variant uppercase tracking-wider">{item.category}</p>
              </div>
            </div>
            <div className="text-right">
              <p className={cn(
                "font-display text-2xl font-bold",
                item.status === 'Segera Reorder' ? 'text-error' : 'text-primary'
              )}>
                {item.quantity}
              </p>
              <span className={cn(
                "text-[10px] font-bold px-2 py-1 rounded-full",
                item.status === 'Segera Reorder' ? 'bg-error-container text-on-error-container' : 'bg-surface-container-high text-on-surface-variant'
              )}>
                {item.status}
              </span>
            </div>
          </div>
        ))}
      </div>

      <button 
        onClick={onAdd}
        className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-2xl shadow-xl flex items-center justify-center hover:bg-primary-container transition-all active:scale-95 z-50"
      >
        <span className="material-symbols-outlined text-4xl">add</span>
      </button>
    </div>
  );
};

import { cn } from '../lib/utils';
