import React from 'react';
import { motion } from 'motion/react';
import { LOGO_URL } from '../constants';
import { Role } from '../types';

interface RoleSelectionProps {
  onSelect: (role) => void;
}

export const RoleSelection: React.FC<RoleSelectionProps> = ({ onSelect }) => {
  return (
    <div className="min-h-[calc(100vh-64px)] flex flex-col items-center justify-center px-6 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-12 max-w-2xl flex flex-col items-center"
      >
        <img 
          src={LOGO_URL} 
          className="w-24 h-24 object-contain mb-6 drop-shadow-md" 
          alt="Roti Bakar Oke Logo"
          referrerPolicy="no-referrer"
        />
        <h2 className="font-display text-5xl text-on-surface font-bold mb-4">Roti Bakar Oke</h2>
        <p className="text-lg text-on-surface-variant">
          Please select your portal to continue managing your toast operations or serving your valued customers.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
        {/* Owner Card */}
        <motion.button
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('OWNER')}
          className="group bg-surface-container-lowest rounded-2xl overflow-hidden boulangerie-shadow border border-outline-variant flex flex-col text-left transition-all"
        >
          <div className="h-64 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzb6aFenhTe87aKkrr0NMTAPjyZ_8IbRjhSSAWvER91Wze2QcTgFZViNNckXWkpgNcxkLyCd-uUrdbxixbEdbS61d32LP4GdJ0AQNuJzry4S3f4XmWJDqbZEvqDoPs83pvj9b7SAp5wvhM-QMh4Pkh985GqXsiqmL7esfJywhyKqhr-91d7XQFeqGbllNv-hvIsaRFUR4BcGs-V01H-_6mpFTE56-JAl-XPC8DTlspR4TLBgUIaWFzoUOhOUKycYidiJ1n0rDQ4H8"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Owner"
            />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-5xl">manage_accounts</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-3">Owner</h3>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              Access high-level analytics, manage staff schedules, update product inventory, and monitor store performance across all locations.
            </p>
            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
              <span>Management Portal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
            </div>
          </div>
        </motion.button>

        {/* Cashier Card */}
        <motion.button
          whileHover={{ y: -8 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => onSelect('CASHIER')}
          className="group bg-surface-container-lowest rounded-2xl overflow-hidden boulangerie-shadow border border-outline-variant flex flex-col text-left transition-all"
        >
          <div className="h-64 overflow-hidden">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBVLC2oR2m__ppy70uyF96KloD5V98uF4MVPCcKGqoVGRZ9NfXDHG0-KWbbwyYhoH7Ktp9d8OoRmOentHIqQ9PBnxWF9KBcfu9gEXXSMPCBPwcet8JtDMPq-1EXdkTNiRPR7Dov1TObrpEEGkyZ4S0CApTCzSqGWuVjNuHuTurfbiHrynGgrQcqELHbhgCWORoy_zY-XaUaO1XpFfvmhHZo-8UoIum4hpjttZSXCIBupDdvIOLfiKeRxvQ2dw5ZJuWQSlSPw4ictHI"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              alt="Cashier"
            />
          </div>
          <div className="p-8 flex flex-col flex-1">
            <div className="flex justify-between items-start mb-4">
              <span className="material-symbols-outlined text-primary text-5xl">point_of_sale</span>
              <span className="material-symbols-outlined text-outline-variant group-hover:text-primary transition-colors">arrow_forward</span>
            </div>
            <h3 className="font-display text-2xl font-bold text-on-surface mb-3">Cashier</h3>
            <p className="text-on-surface-variant mb-6 text-sm leading-relaxed">
              Process customer transactions, manage the daily order queue, print receipts, and ensure a seamless checkout experience for every guest.
            </p>
            <div className="mt-auto flex items-center gap-2 text-primary font-bold text-sm">
              <span>POS Terminal</span>
              <span className="w-1.5 h-1.5 rounded-full bg-primary/20 group-hover:bg-primary transition-colors"></span>
            </div>
          </div>
        </motion.button>
      </div>

      <footer className="mt-16 text-center">
        <p className="text-xs text-on-surface-variant">© 2024 Roti Bakar Oke Heritage Systems. All rights reserved.</p>
        <div className="flex gap-4 justify-center mt-3">
          <button className="text-xs text-on-surface-variant hover:text-primary underline">Privacy Policy</button>
          <span className="text-outline-variant">•</span>
          <button className="text-xs text-on-surface-variant hover:text-primary underline">Terms of Service</button>
        </div>
      </footer>
    </div>
  );
};
