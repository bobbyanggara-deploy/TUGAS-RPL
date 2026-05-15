import React, { useState, useRef } from 'react';
import { cn } from '../lib/utils';

interface InputStockProps {
  onCancel: () => void;
}

export const InputStock: React.FC<InputStockProps> = ({ onCancel }) => {
  const [productName, setProductName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('Roti Artisanal');
  const [stock, setStock] = useState(10);
  const [previewImage, setPreviewImage] = useState<string | null>(null);
  
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert('Ukuran file terlalu besar. Maksimal 2MB.');
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerFileInput = () => {
    fileInputRef.current?.click();
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    // Logic simpan produk bisa diimplementasikan di sini
    alert('Produk berhasil disimpan (Simulasi)');
    onCancel();
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-6 pb-12 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-8">
        <h2 className="font-display text-3xl font-bold text-primary mb-2">Input Stock Baru</h2>
        <p className="font-medium text-on-surface-variant">Tambahkan produk roti atau pastry baru ke dalam inventaris toko.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <div className="md:col-span-12 lg:col-span-5">
          <div 
            onClick={triggerFileInput}
            className="bg-surface-container-lowest p-3 rounded-2xl border border-outline-variant shadow-sm aspect-square flex flex-col items-center justify-center relative overflow-hidden group cursor-pointer"
          >
            {previewImage ? (
              <img 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                src={previewImage}
                alt="Product preview" 
              />
            ) : (
              <img 
                className="absolute inset-0 w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-700" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAz_OoPBactDpJmeiJSn9sPcvXR8UfLnI42tkNfyI8kH0eDWCWRueleWZV3gxypB3L2-G2VBINWBLXyYdWEqXucw8kayhenA4-vl-BznrYGACTqr0dgh0liZJZhQzS_DlRbe6w6knvyQg5q59e7R3L-ansmnFzBhqFKPbiJI4r9f06Cz8rKhKK2_JJwGIvSqxiTw8g89FfEHCatcjmDWnO5UrhrOLZykUVTO_YjMKr2Or57AfnKebpV1g16tpZ-NWwbtbF1zsYw1MA"
                alt="Upload placeholder" 
              />
            )}
            
            <div className={cn(
              "z-10 flex flex-col items-center text-center p-8 backdrop-blur-sm rounded-3xl border border-white/50 shadow-xl transition-all",
              previewImage ? "bg-white/70 opacity-0 group-hover:opacity-100" : "bg-white/40"
            )}>
              <div className="w-16 h-16 rounded-full bg-primary-fixed flex items-center justify-center mb-4 text-primary">
                <span className="material-symbols-outlined text-4xl">{previewImage ? 'edit' : 'upload_file'}</span>
              </div>
              <p className="font-bold text-primary mb-1">{previewImage ? 'Ganti Foto' : 'Unggah Foto Produk'}</p>
              <p className="text-xs font-medium text-on-surface-variant opacity-80 mb-6">Format JPG, PNG (Maks. 2MB)</p>
              <div className="px-8 py-2.5 border-2 border-primary text-primary font-bold text-sm rounded-full hover:bg-primary-fixed transition-colors active:scale-95">
                Pilih File
              </div>
            </div>

            <input 
              type="file"
              ref={fileInputRef}
              onChange={handleImageChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>

        <div className="md:col-span-12 lg:col-span-7">
          <form onSubmit={handleSave} className="space-y-6 bg-surface-container-lowest p-8 rounded-2xl shadow-xl border border-outline-variant/30 backdrop-blur-sm">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Nama Produk</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary transition-colors">breakfast_dining</span>
                <input 
                  type="text"
                  required
                  value={productName}
                  onChange={(e) => setProductName(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-medium text-on-surface transition-all outline-none"
                  placeholder="Contoh: Roti Bakar Cokelat Keju"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Harga Satuan</label>
              <div className="relative group">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 font-display font-bold text-on-surface-variant group-focus-within:text-primary transition-colors">Rp</span>
                <input 
                  type="number"
                  required
                  value={price}
                  onChange={(e) => setPrice(e.target.value)}
                  className="w-full h-14 pl-12 pr-4 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-medium text-on-surface transition-all outline-none"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Kategori Produk</label>
              <div className="flex flex-wrap gap-2">
                {['Roti Artisanal', 'Pastry', 'Cakes', 'Minuman'].map((cat) => (
                  <button 
                    key={cat}
                    type="button"
                    onClick={() => setCategory(cat)}
                    className={cn(
                      "px-5 py-2 rounded-full font-bold text-xs transition-all active:scale-95 shadow-sm",
                      category === cat ? "bg-primary text-on-primary ring-2 ring-primary/20" : "bg-surface border border-outline-variant text-on-surface-variant hover:border-primary"
                    )}
                  >
                    {cat}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-bold text-on-surface-variant px-1 uppercase tracking-wider">Stok Awal</label>
              <div className="flex items-center gap-4">
                <button 
                  type="button" 
                  onClick={() => setStock(Math.max(0, stock - 1))}
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low active:scale-90 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <input 
                  type="number"
                  value={stock}
                  onChange={(e) => setStock(parseInt(e.target.value) || 0)}
                  className="w-24 text-center h-12 bg-surface rounded-xl border border-outline-variant focus:border-primary focus:ring-1 focus:ring-primary font-display text-2xl font-bold outline-none"
                />
                <button 
                  type="button" 
                  onClick={() => setStock(stock + 1)}
                  className="w-12 h-12 rounded-full border border-outline-variant flex items-center justify-center text-on-surface-variant hover:bg-surface-container-low active:scale-90 transition-all cursor-pointer"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>

            <div className="pt-4 flex gap-3">
              <button 
                type="button" 
                onClick={onCancel}
                className="flex-1 py-4 bg-surface border border-outline-variant text-on-surface-variant font-bold rounded-xl hover:bg-surface-container-low transition-colors active:scale-95 cursor-pointer"
              >
                Batal
              </button>
              <button 
                type="submit" 
                className="flex-[2] py-4 bg-primary text-on-primary font-bold rounded-xl shadow-lg hover:bg-primary-container transition-all active:scale-95 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span className="material-symbols-outlined">save</span>
                Simpan Produk
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
