import React from 'react';
import { motion } from 'motion/react';
import { CartItem } from '../types';

interface CartViewProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  onCheckout: () => void;
}

export const CartView: React.FC<CartViewProps> = ({ items, onRemove, onCheckout }) => {
  const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const tax = subtotal * 0.1;
  const total = subtotal + tax;

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pb-32">
        <div className="lg:col-span-7 flex flex-col gap-8">
          <section>
            <div className="flex justify-between items-end mb-6">
              <h2 className="font-display text-3xl font-bold text-on-surface tracking-tight">Detail Pesanan</h2>
              <span className="font-bold text-xs text-on-surface-variant uppercase tracking-widest">24 Oktober 2023</span>
            </div>
            
            <div className="flex flex-col gap-4">
              {items.length === 0 ? (
                <div className="bg-surface-container-low p-12 rounded-3xl text-center border-2 border-dashed border-outline-variant/30 flex flex-col items-center gap-4">
                  <span className="material-symbols-outlined text-6xl text-outline-variant">shopping_basket</span>
                  <p className="font-bold text-on-surface-variant">Keranjang belanja kosong</p>
                </div>
              ) : (
                items.map(item => (
                  <motion.div 
                    layout
                    key={item.id}
                    className="bg-surface-container-lowest p-4 rounded-2xl shadow-sm flex gap-5 items-center border border-outline-variant/30 backdrop-blur-sm"
                  >
                    <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0 shadow-sm">
                      <img src={item.image} className="w-full h-full object-cover" alt={item.name} />
                    </div>
                    <div className="flex-grow">
                      <h3 className="font-bold text-on-surface">{item.name}</h3>
                      <p className="text-xs font-medium text-on-surface-variant">Quantity: {item.quantity}</p>
                    </div>
                    <div className="text-right flex flex-col items-end gap-2">
                      <p className="font-display text-lg font-bold text-primary">Rp {(item.price * item.quantity).toLocaleString('id-ID')}</p>
                      <button 
                        onClick={() => onRemove(item.id)}
                        className="material-symbols-outlined text-on-surface-variant text-xl cursor-pointer hover:text-error transition-colors p-1"
                      >
                        delete
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </section>
        </div>

        <div className="lg:col-span-5 flex flex-col gap-8">
          <section className="bg-surface-container p-8 rounded-[2rem] border border-outline-variant/20 shadow-sm">
            <h2 className="font-display text-2xl font-bold text-on-surface mb-8 tracking-tight">Metode Pembayaran</h2>
            <div className="flex flex-col gap-3">
              {[
                { name: 'DANA', color: 'bg-blue-500', active: true },
                { name: 'GoPay', color: 'bg-blue-600', active: false },
                { name: 'QRIS', color: 'bg-red-600', active: false },
              ].map(method => (
                <label 
                  key={method.name}
                  className={cn(
                    "flex items-center justify-between p-4 bg-surface-container-lowest rounded-2xl cursor-pointer border-2 transition-all group active:scale-[0.98]",
                    method.active 
                      ? "border-primary ring-4 ring-primary/5" 
                      : "border-transparent border-opacity-0 hover:border-outline-variant"
                  )}
                >
                  <div className="flex items-center gap-4">
                    <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center text-white font-black text-[10px]", method.color)}>
                      {method.name}
                    </div>
                    <span className="font-bold text-on-surface">{method.name}</span>
                  </div>
                  <div className={cn(
                    "w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all",
                    method.active ? "border-primary" : "border-outline-variant"
                  )}>
                    {method.active && <div className="w-3 h-3 bg-primary rounded-full" />}
                  </div>
                </label>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-outline-variant/30 flex flex-col gap-4">
              <div className="flex justify-between items-center text-on-surface-variant font-medium">
                <span>Subtotal</span>
                <span className="font-bold">Rp {subtotal.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center text-on-surface-variant font-medium">
                <span>Tax (10%)</span>
                <span className="font-bold">Rp {tax.toLocaleString('id-ID')}</span>
              </div>
              <div className="flex justify-between items-center mt-4 mb-2">
                <span className="font-display text-xl font-bold text-on-surface">Total</span>
                <span className="font-display text-3xl font-black text-primary">Rp {total.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </section>
        </div>
      </div>

      <div className="fixed bottom-20 left-0 w-full p-6 bg-surface/40 backdrop-blur-xl border-t border-outline-variant/10 z-40">
        <div className="max-w-4xl mx-auto">
          <button 
            disabled={items.length === 0}
            onClick={onCheckout}
            className="w-full bg-primary text-on-primary font-display text-xl font-bold py-5 rounded-[1.25rem] shadow-2xl active:scale-95 transition-all hover:bg-primary-container disabled:opacity-50 disabled:grayscale disabled:scale-100"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

import { cn } from '../lib/utils';
