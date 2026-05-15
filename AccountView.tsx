import React from 'react';
import { motion } from 'motion/react';
import { cn } from '../lib/utils';

interface AccountViewProps {
  onLogout: () => void;
  onSupportClick: () => void;
}

export const AccountView: React.FC<AccountViewProps> = ({ onLogout, onSupportClick }) => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-12 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-32">
      <section className="flex flex-col items-center mb-12">
        <div className="relative group">
          <div className="w-32 h-32 rounded-full border-8 border-white shadow-2xl overflow-hidden mb-4 ring-1 ring-black/5">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCuC-t0tGmqNwDrbBsjfSiytrDsUIojBQoQxVq2gTGJUQHuyXAY3YOCRadWM4eafvuI2w8TdJXmGu7Yjv-o5eElGKlCMRZs7-VklUweO4APLN_OdHoUGtFnDFLaL4Lp70PvPU-_it6RqR6VssdsM9k4p2k0eskFORuanZ4tk74C_dvs14DGjPYQmaDw5mM9VzKUnjcCupvxHROc6C__V77koCZ_P2v1bMQTlv4vyhMcL2UDZZUdw-CmjG2B2K_rfI3kMtfLzEYMpco"
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              alt="Manager Profile"
            />
          </div>
          <button className="absolute bottom-2 right-2 bg-primary text-on-primary p-2.5 rounded-full shadow-lg active:scale-90 transition-transform">
            <span className="material-symbols-outlined text-[18px]">edit</span>
          </button>
        </div>
        <h2 className="font-display text-3xl font-bold text-on-surface">Jean-Luc Patissier</h2>
        <p className="text-sm font-bold text-on-surface-variant opacity-70 tracking-wide mt-1">Store Manager • Downtown Branch</p>
      </section>

      <div className="space-y-6">
        <div className="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30 overflow-hidden">
          <div className="p-6">
            <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6 px-1">Account Settings</h3>
            <div className="space-y-1">
              {[
                { icon: 'person', title: 'Personal Information', sub: 'Manage your data and details' },
                { icon: 'security', title: 'Security', sub: 'Password and two-factor auth' },
              ].map(opt => (
                <button 
                  key={opt.title}
                  className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-all group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary shadow-inner transition-all">
                      <span className="material-symbols-outlined">{opt.icon}</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-on-surface group-hover:text-primary transition-colors">{opt.title}</span>
                      <span className="block text-xs font-medium text-on-surface-variant opacity-60">{opt.sub}</span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30 overflow-hidden">
          <div className="p-6">
            <h3 className="text-[10px] font-black text-primary uppercase tracking-[0.2em] mb-6 px-1">Support & Feedback</h3>
            <div className="space-y-1">
              {[
                { icon: 'support_agent', title: 'Customer Service', sub: '24/7 help desk and live chat', badge: 'ONLINE', onClick: onSupportClick },
                { icon: 'rate_review', title: 'Send Feedback', sub: 'Help us improve the app' },
              ].map(opt => (
                <button 
                  key={opt.title}
                  onClick={opt.onClick}
                  className="w-full flex items-center justify-between p-4 hover:bg-surface-container-low rounded-2xl transition-all group active:scale-[0.99]"
                >
                  <div className="flex items-center gap-5">
                    <div className="w-11 h-11 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant group-hover:bg-primary group-hover:text-on-primary shadow-inner transition-all">
                      <span className="material-symbols-outlined">{opt.icon}</span>
                    </div>
                    <div className="text-left">
                      <span className="block font-bold text-on-surface group-hover:text-primary transition-colors">{opt.title}</span>
                      <span className="block text-xs font-medium text-on-surface-variant opacity-60">{opt.sub}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    {opt.badge && (
                      <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-[9px] font-black rounded-lg border border-emerald-100">
                        {opt.badge}
                      </span>
                    )}
                    <span className="material-symbols-outlined text-outline-variant group-hover:translate-x-1 transition-transform">chevron_right</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>

        <motion.div 
          whileHover={{ scale: 1.01 }}
          whileTap={{ scale: 0.99 }}
          className="bg-surface-container-lowest rounded-3xl shadow-sm border border-outline-variant/30 overflow-hidden"
        >
          <button 
            onClick={onLogout}
            className="w-full flex items-center justify-between p-6 text-error hover:bg-error-container/10 transition-colors"
          >
            <div className="flex items-center gap-5">
              <div className="w-11 h-11 rounded-2xl bg-error-container/20 flex items-center justify-center text-error">
                <span className="material-symbols-outlined">logout</span>
              </div>
              <div className="text-left">
                <span className="block font-black tracking-tight text-lg">Logout</span>
                <span className="block text-xs font-bold opacity-60">Sign out of your account</span>
              </div>
            </div>
            <span className="material-symbols-outlined font-bold">arrow_forward</span>
          </button>
        </motion.div>

        <div className="text-center mt-8 py-4 opacity-40">
          <p className="text-[10px] font-black uppercase tracking-[0.3em]">Roti Bakar Oke POS v2.4.1</p>
          <p className="text-[9px] font-medium uppercase mt-2">Made with Heritage Warmth</p>
        </div>
      </div>
    </div>
  );
};
