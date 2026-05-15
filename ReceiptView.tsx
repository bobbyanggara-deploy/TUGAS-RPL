import React from 'react';
import { motion } from 'motion/react';
import { LOGO_URL } from '../constants';

interface ReceiptViewProps {
  onBack: () => void;
}

export const ReceiptView: React.FC<ReceiptViewProps> = ({ onBack }) => {
  return (
    <div className="max-w-xl mx-auto px-6 py-12 animate-in zoom-in-95 duration-500">
      <div className="bg-white rounded-3xl shadow-2xl relative z-10 overflow-hidden flex flex-col border border-outline-variant/30 ring-1 ring-black/5">
        <div className="pt-12 pb-8 px-8 flex flex-col items-center text-center">
          <motion.div 
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: 'spring', damping: 15 }}
            className="w-20 h-20 rounded-full bg-surface-container flex items-center justify-center mb-6 shadow-sm ring-4 ring-primary/5 overflow-hidden p-2"
          >
            <img 
              src={LOGO_URL} 
              className="w-full h-full object-contain" 
              alt="Logo" 
              referrerPolicy="no-referrer"
            />
          </motion.div>
          <h1 className="font-display text-3xl font-bold text-primary tracking-tight">Roti Bakar Oke</h1>
          <p className="text-[10px] font-black text-on-surface-variant mt-2 uppercase tracking-[0.2em] opacity-60">Transaction Success</p>
        </div>

        <div className="px-8">
          <div className="border-t border-dashed border-outline-variant w-full h-px opacity-50"></div>
        </div>

        <div className="py-10 px-8 text-center bg-surface/10">
          <p className="text-xs font-bold text-secondary uppercase tracking-widest mb-2 opacity-70">Total Payment</p>
          <div className="font-display text-5xl font-black text-primary flex items-baseline justify-center">
            <span className="text-2xl mr-1 font-bold">Rp</span>
            <span>152.900</span>
          </div>
        </div>

        <div className="px-8 pb-10 space-y-4">
          <div className="flex justify-between items-center py-1">
            <span className="text-sm font-bold text-on-surface-variant">Total Items</span>
            <span className="text-sm font-bold text-on-surface">5 Products</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-sm font-bold text-on-surface-variant">Payment Method</span>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-secondary text-lg" style={{ fontVariationSettings: "'FILL' 1" }}>contactless</span>
              <span className="text-sm font-bold text-on-surface">Digital Wallet</span>
            </div>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-sm font-bold text-on-surface-variant">Date & Time</span>
            <span className="text-sm font-bold text-on-surface">May 24, 2024 • 14:32</span>
          </div>
          <div className="flex justify-between items-center py-1">
            <span className="text-sm font-bold text-on-surface-variant">Transaction ID</span>
            <span className="text-sm font-bold text-on-surface font-mono">#BLGR-99281</span>
          </div>
        </div>

        <div className="px-8 pb-8">
          <div className="relative w-full h-24 rounded-2xl overflow-hidden group shadow-inner">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuA76vZ3EwoRvNx4tvHNKMRgmTQOyUFw_2qgFRPS4xCvP2cidNqrYi1JKGHnTIXNY8fZxD05w8l8hnwBch_9QRizmUJGEl3MDZ6KGvog3E0hyQ7AfkoO5Ty2_7_Po3ImjnM_YCcdXEkaLC_883KbylXVahRZjsiPq6CPIUqFNlmbSSBShUJEuqn9jYs2FPEXvW1lcR2ImbJWew-82X2nFFmlm5TbG_8oI95HVuykekWjSfBatmGLWOP9TFOtPERzOthnr5oNKLc-Neo" 
              className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-[2s]"
              alt="Brand grain texture"
            />
            <div className="absolute inset-0 bg-primary/20 backdrop-blur-[1px]"></div>
          </div>
        </div>

        <div className="px-8 pb-8 flex flex-col gap-3">
          <button 
            onClick={onBack}
            className="w-full py-5 bg-primary text-on-primary rounded-2xl font-bold text-sm flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all hover:bg-primary-container"
          >
            <span className="material-symbols-outlined text-lg">point_of_sale</span>
            Back to Cashier
          </button>
          <button className="w-full py-3 text-primary font-bold text-xs flex items-center justify-center gap-2 hover:bg-surface-container-low rounded-xl transition-colors">
            <span className="material-symbols-outlined text-lg">print</span>
            Print Paper Receipt
          </button>
        </div>

        {/* Jagged edge effect simulation */}
        <div className="h-6 w-full opacity-5 bg-[radial-gradient(circle, #221919 40%, transparent 40%)] bg-[length:16px_16px] bg-repeat-x"></div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9, y: 10 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        className="fixed top-8 left-1/2 -translate-x-1/2 bg-on-background text-on-primary px-8 py-4 rounded-full flex items-center gap-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] z-[100]"
      >
        <span className="material-symbols-outlined text-emerald-400" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
        <span className="text-sm font-bold tracking-tight">Receipt sent to customer email</span>
      </motion.div>

      <footer className="mt-12 text-center">
        <p className="text-xs font-medium text-on-surface-variant max-w-xs mx-auto leading-relaxed">
          Thank you for shopping at Roti Bakar Oke. Your support helps our local bakery grow.
        </p>
      </footer>
    </div>
  );
};
