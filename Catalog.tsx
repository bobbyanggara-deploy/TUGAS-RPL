import React from 'react';
import { motion } from 'motion/react';
import { PRODUCTS } from '../constants';
import { Product } from '../types';
import { cn } from '../lib/utils';

interface CatalogProps {
  onAdd: (p: Product) => void;
  cartCount: number;
  onCartOpen: () => void;
}

export const Catalog: React.FC<CatalogProps> = ({ onAdd, cartCount, onCartOpen }) => {
  const [search, setSearch] = React.useState('');
  const [activeCategory, setActiveCategory] = React.useState('Semua');

  const categories = ['Semua', 'Sourdough', 'Pastry', 'Minuman'];
  
  const filteredProducts = PRODUCTS.filter(p => {
    const matchesSearch = p.name.toLowerCase().includes(search.toLowerCase());
    const matchesCat = activeCategory === 'Semua' || p.category.includes(activeCategory);
    return matchesSearch && matchesCat;
  });

  return (
    <div className="px-6 pt-6 animate-in fade-in slide-in-from-bottom-2 duration-500">
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <div className="relative flex-grow">
          <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant">search</span>
          <input 
            type="text"
            placeholder="Cari roti atau kue..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full h-12 pl-12 pr-4 rounded-xl border-none bg-surface-container-lowest shadow-[0_4px_20px_rgba(74,63,63,0.04)] focus:ring-2 focus:ring-primary/20 placeholder:text-on-surface-variant/50 font-medium"
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
          {categories.map(cat => (
            <button 
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={cn(
                "px-6 py-2 rounded-full font-bold whitespace-nowrap transition-all",
                activeCategory === cat 
                  ? "bg-primary text-on-primary shadow-md" 
                  : "bg-surface-container-lowest text-on-surface-variant hover:bg-surface-container"
              )}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {filteredProducts.map(product => (
          <motion.div 
            key={product.id}
            whileHover={{ y: -4 }}
            className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-[0_4px_20px_rgba(74,63,63,0.04)] border border-outline-variant/30 flex flex-col group h-full"
          >
            <div className="aspect-square w-full overflow-hidden">
              <img 
                src={product.image} 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt={product.name}
              />
            </div>
            <div className="p-4 flex flex-col flex-grow">
              <h3 className="font-display text-sm font-bold text-on-surface mb-1 truncate">{product.name}</h3>
              <p className="text-primary font-display font-bold text-sm mb-4">
                Rp {product.price.toLocaleString('id-ID')}
              </p>
              <button 
                onClick={() => onAdd(product)}
                className="mt-auto w-full py-2 bg-surface-container text-on-surface-variant rounded-lg text-xs font-bold flex items-center justify-center gap-2 hover:bg-primary hover:text-on-primary transition-all active:scale-95"
              >
                <span className="material-symbols-outlined text-[18px]">add</span>
                Tambah
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {cartCount > 0 && (
        <button 
          onClick={onCartOpen}
          className="fixed bottom-24 right-6 w-14 h-14 bg-primary text-on-primary rounded-full shadow-xl flex items-center justify-center z-50 active:scale-90 transition-transform"
        >
          <span className="material-symbols-outlined text-2xl" style={{ fontVariationSettings: "'FILL' 1" }}>shopping_cart</span>
          <span className="absolute -top-1 -right-1 w-6 h-6 bg-tertiary-container text-on-tertiary-container text-[10px] rounded-full flex items-center justify-center font-bold border-2 border-surface">
            {cartCount}
          </span>
        </button>
      )}
    </div>
  );
};
