import React from 'react';
import { motion } from 'framer-motion';
import { Download, X, ShoppingBag, Check, ArrowLeft } from 'lucide-react';

export function ProductCatalog({ onNavigate }) {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const categories = ['All', 'Coir Fiber', 'Cocopeat', 'Grow Bags', 'Mats', 'Geotextiles', 'Rope'];

  const products = [
    {
      id: 1,
      name: 'Coir Fiber',
      category: 'Coir Fiber',
      price: '$0.45 - $0.60 /kg',
      image: '📦',
      desc: 'High-quality natural coconut fiber for industrial and agricultural use.',
      details: '100% natural, biodegradable, moisture resistant.'
    },
    {
      id: 2,
      name: 'Cocopeat Blocks',
      category: 'Cocopeat',
      price: '$1.50 - $2.20 /block',
      image: '🧱',
      desc: 'Compressed 5kg coir pith blocks for potting soil and hydroponics.',
      details: 'Low EC, high expansion ratio, washed/unwashed.'
    },
    {
      id: 3,
      name: 'Grow Bags',
      category: 'Grow Bags',
      price: '$2.50 - $4.00 /bag',
      image: '🌱',
      desc: 'Ready-to-use coco coir grow bags for greenhouse cultivation.',
      details: 'UV treated, custom sizes, pre-drilled holes.'
    },
    {
      id: 4,
      name: 'Coir Mats',
      category: 'Mats',
      price: '$5.00 - $8.50 /sqm',
      image: '🧶',
      desc: 'Durable and aesthetic coir mats for erosion control and flooring.',
      details: 'Woven/non-woven, 100% biodegradable.'
    },
    {
      id: 5,
      name: 'Geotextiles',
      category: 'Geotextiles',
      price: '$0.80 - $1.20 /sqm',
      image: '🌐',
      desc: 'Permeable fabrics for soil stabilization and landscaping.',
      details: 'High tensile strength, eco-friendly.'
    },
    {
      id: 6,
      name: 'Coir Rope',
      category: 'Rope',
      price: '$1.10 - $1.80 /kg',
      image: '➰',
      desc: 'Strong and flexible coconut fiber rope for gardening and crafts.',
      details: '2-ply/3-ply, varied thickness.'
    }
  ];

  const handleInquiry = () => {
    onNavigate('home');
    setTimeout(() => {
      const el = document.getElementById('contact');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    }, 300);
  };

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <section id="catalog" className="py-12 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <button
            onClick={() => onNavigate('home')}
            className="inline-flex items-center text-sm text-gray-500 hover:text-sml-green transition-colors mb-6 group"
          >
            <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>

          <h2 className="text-4xl md:text-5xl font-serif font-bold text-sml-dark mb-6">
            Product Catalog
          </h2>
          <p className="text-gray-600 max-w-2xl">
            Browse our comprehensive range of premium coconut coir products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex gap-3 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${selectedCategory === cat
                ? 'bg-sml-dark text-sml-cream'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              <div className="h-48 bg-gradient-to-br from-amber-200 to-orange-400 flex items-center justify-center">
                <span className="text-4xl">{product.image}</span>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <div className="mb-4">
                  <h3 className="text-lg font-bold text-sml-dark mb-2">
                    {product.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-3">
                    {product.desc}
                  </p>
                  <p className="text-xs text-gray-500 italic">
                    {product.details}
                  </p>
                </div>

                <div className="mt-auto space-y-3">
                  <div className="pt-4 border-t border-gray-100">
                    <p className="text-sm text-gray-700 font-medium">
                      Price: <span className="text-sml-dark font-bold">{product.price}</span>
                    </p>
                    <p className="text-xs text-sml-green font-semibold mt-1 flex items-center">
                      <Check className="w-3 h-3 mr-1" />
                      In Stock
                    </p>
                  </div>
                  <a
                    href="/#inquiry"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-sml-dark text-sml-cream py-3 rounded-lg hover:bg-gray-800 font-bold tracking-wide transition-colors flex items-center justify-center"
                  >
                    <ShoppingBag className="w-4 h-4 mr-2" />
                    Inquire Now
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
