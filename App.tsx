import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { View, Role, CartItem, Product } from './types';
import { TopBar } from './components/TopBar';
import { NavBar } from './components/NavBar';
import { RoleSelection } from './components/RoleSelection';
import { Catalog } from './screens/Catalog';
import { Dashboard } from './screens/Dashboard';
import { StockManagement } from './screens/StockManagement';
import { InputStock } from './screens/InputStock';
import { CartView } from './screens/CartView';
import { ReceiptView } from './screens/ReceiptView';
import { AccountView } from './screens/AccountView';
import { AiChat } from './components/AiChat';

export default function App() {
  const [role, setRole] = React.useState<Role>(null);
  const [view, setView] = React.useState<View>('ROLE_SELECTION');
  const [cart, setCart] = React.useState<CartItem[]>([]);
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const handleRoleSelect = (selectedRole: Role) => {
    setRole(selectedRole);
    setView(selectedRole === 'OWNER' ? 'DASHBOARD' : 'POS');
  };

  const addToCart = (product: Product) => {
    setCart(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item);
      }
      return [...prev, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (id: string) => {
    setCart(prev => prev.filter(item => item.id !== id));
  };

  const clearCart = () => setCart([]);

  const handleBack = () => {
    if (view === 'INPUT_STOCK') setView('STOCK');
    else if (view === 'CART') setView('POS');
    else if (view === 'RECEIPT') setView('POS');
    else if (view === 'DASHBOARD' || view === 'POS' || view === 'STOCK' || view === 'ACCOUNT') {
      setView('ROLE_SELECTION');
      setRole(null);
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <TopBar view={view} role={role} onBack={handleBack} />
      
      <main className="flex-1 pb-20 relative">
        <AnimatePresence mode="wait">
          <motion.div
            key={view}
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -10 }}
            transition={{ duration: 0.2 }}
            className="h-full"
          >
            {view === 'ROLE_SELECTION' && <RoleSelection onSelect={handleRoleSelect} />}
            {view === 'DASHBOARD' && <Dashboard />}
            {view === 'STOCK' && <StockManagement onAdd={() => setView('INPUT_STOCK')} />}
            {view === 'INPUT_STOCK' && <InputStock onCancel={() => setView('STOCK')} />}
            {view === 'POS' && <Catalog onAdd={addToCart} cartCount={cart.length} onCartOpen={() => setView('CART')} />}
            {view === 'CART' && (
              <CartView 
                items={cart} 
                onRemove={removeFromCart} 
                onCheckout={() => setView('RECEIPT')} 
              />
            )}
            {view === 'RECEIPT' && <ReceiptView onBack={() => { setView('POS'); clearCart(); }} />}
            {view === 'ACCOUNT' && (
              <AccountView 
                onLogout={() => { setRole(null); setView('ROLE_SELECTION'); }} 
                onSupportClick={() => setIsChatOpen(true)}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <NavBar currentView={view} role={role} onViewChange={setView} />
      
      {/* AI Customer Service */}
      {role && <AiChat isOpen={isChatOpen} onClose={() => setIsChatOpen(false)} />}
    </div>
  );
}
