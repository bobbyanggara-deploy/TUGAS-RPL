import React from 'react';
import { TRANSACTIONS } from '../constants';
import { cn } from '../lib/utils';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const data = [
  { day: 'Mon', revenue: 5200000 },
  { day: 'Tue', revenue: 3800000 },
  { day: 'Wed', revenue: 7400000 },
  { day: 'Thu', revenue: 6100000 },
  { day: 'Fri', revenue: 4900000 },
  { day: 'Sat', revenue: 8200000 },
  { day: 'Sun', revenue: 6500000 },
];

export const Dashboard: React.FC = () => {
  return (
    <div className="px-6 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 relative overflow-hidden group">
          <div className="relative z-10 transition-transform group-hover:translate-x-1">
            <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Total Income</p>
            <h2 className="font-display text-3xl font-bold text-primary">Rp 42.850.000</h2>
            <div className="flex items-center mt-2 text-emerald-600 gap-1 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">trending_up</span>
              <span>+12.5% from last month</span>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-primary/5 text-9xl rotate-12 transition-transform group-hover:rotate-0">payments</span>
        </div>

        <div className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 relative overflow-hidden group">
          <div className="relative z-10 transition-transform group-hover:translate-x-1">
            <p className="text-xs font-bold text-on-surface-variant mb-1 uppercase tracking-wider">Total Expenses</p>
            <h2 className="font-display text-3xl font-bold text-on-surface">Rp 12.420.000</h2>
            <div className="flex items-center mt-2 text-primary gap-1 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">trending_down</span>
              <span>-4.2% from last month</span>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-on-surface/5 text-9xl rotate-12 transition-transform group-hover:rotate-0">shopping_cart_checkout</span>
        </div>

        <div className="bg-primary text-on-primary p-6 rounded-2xl shadow-md relative overflow-hidden group">
          <div className="relative z-10 transition-transform group-hover:translate-x-1">
            <p className="text-xs font-bold text-primary-fixed mb-1 uppercase tracking-wider">Products Sold</p>
            <h2 className="font-display text-3xl font-bold">1,842 items</h2>
            <div className="flex items-center mt-2 text-primary-fixed-dim gap-1 text-xs font-bold">
              <span className="material-symbols-outlined text-sm">breakfast_dining</span>
              <span>Top: Roti Bakar Cokelat</span>
            </div>
          </div>
          <span className="material-symbols-outlined absolute -right-4 -bottom-4 text-on-primary/10 text-9xl rotate-12 transition-transform group-hover:rotate-0">inventory_2</span>
        </div>
      </div>

      <section className="bg-surface-container-lowest p-6 rounded-2xl shadow-sm border border-outline-variant/30 mb-8">
        <div className="flex justify-between items-end mb-8">
          <div>
            <h3 className="font-display text-xl font-bold text-on-surface">Weekly Sales Data</h3>
            <p className="text-xs font-medium text-on-surface-variant">Revenue performance across the last 7 days</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-1.5 rounded-full border border-outline-variant text-xs font-bold text-on-surface-variant hover:bg-surface-container transition-colors">Daily</button>
            <button className="px-4 py-1.5 rounded-full bg-primary text-on-primary text-xs font-bold shadow-md">Weekly</button>
          </div>
        </div>
        
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 0, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f0dfde" />
              <XAxis 
                dataKey="day" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#564241', fontSize: 12, fontWeight: 600 }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fill: '#564241', fontSize: 10 }}
                tickFormatter={(val) => `${val/1000000}M`}
              />
              <Tooltip 
                cursor={{ fill: 'rgba(110, 27, 29, 0.05)' }}
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 20px rgba(74,63,63,0.1)' }}
              />
              <Bar dataKey="revenue" radius={[6, 6, 0, 0]}>
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.day === 'Wed' ? '#6e1b1d' : '#f0dfde'} />
                ))}
              </Bar>
            </BarChart>
          </ResponsiveContainer>
        </div>
      </section>

      <section>
        <div className="flex justify-between items-center mb-4 px-1">
          <h3 className="font-display text-xl font-bold text-on-surface">Recent Transactions</h3>
          <button className="text-sm font-bold text-primary hover:underline">View All</button>
        </div>
        <div className="space-y-3">
          {TRANSACTIONS.map((tx, i) => (
            <div 
              key={i}
              className="bg-surface-container-lowest p-4 rounded-xl flex items-center justify-between shadow-sm border border-outline-variant/20 hover:border-primary/20 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-lg bg-surface-container flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">{tx.type === 'sale' ? 'point_of_sale' : 'local_shipping'}</span>
                </div>
                <div>
                  <p className="font-bold text-on-surface">{tx.id}</p>
                  <p className="text-xs font-medium text-on-surface-variant">{tx.date}</p>
                </div>
              </div>
              <div className="text-right">
                <p className={cn(
                  "font-bold",
                  tx.status === 'COMPLETED' ? "text-emerald-600" : "text-primary"
                )}>
                  {tx.status === 'COMPLETED' ? '+' : '-'}Rp {tx.amount.toLocaleString('id-ID')}
                </p>
                <span className={cn(
                  "inline-block px-2 py-0.5 rounded-[4px] text-[10px] font-bold uppercase",
                  tx.status === 'COMPLETED' ? "bg-emerald-100 text-emerald-800" : "bg-surface-container-highest text-on-surface-variant"
                )}>
                  {tx.status}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};
