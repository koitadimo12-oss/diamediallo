import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MessageSquare, X, Send } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  const handleSend = (text?: string) => {
    const messageToSend = text || customMsg || "Bonjour Agence Diame Diallo, je souhaiterais échanger avec un agent.";
    const encoded = encodeURIComponent(messageToSend);
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${encoded}`, '_blank');
    setIsOpen(false);
    setCustomMsg('');
  };

  const quickPrompts = [
    "Je cherche à acheter une maison à Dakar",
    "Je souhaite louer un appartement",
    "J'aimerais visiter le bien à Colobane",
    "Investissement diaspora / conseils",
  ];

  return (
    <div id="floating-whatsapp-container" className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      {/* Quick Action Bubble with AnimatePresence */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.92 }}
            transition={{ duration: 0.22, ease: 'easeOut' }}
            className="mb-3 w-80 max-w-[calc(100vw-2rem)] bg-white rounded-xl shadow-2xl border border-[#e7e2d9] p-4 text-[#1d1c16]"
          >
            <div className="flex items-center justify-between pb-2 border-b border-[#f2ede4] mb-3">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#25D366] text-white flex items-center justify-center font-bold">
                  <MessageSquare className="w-4 h-4 fill-current" />
                </div>
                <div>
                  <h4 className="font-['Manrope'] font-bold text-xs text-[#00152a]">
                    Agence Diame Diallo
                  </h4>
                  <span className="text-[10px] text-green-600 font-medium flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                    En ligne • 77 526 41 07
                  </span>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-400 hover:text-gray-600 p-1 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-[#43474d] mb-3">
              Comment pouvons-nous vous aider aujourd'hui à Dakar ou au Sénégal ?
            </p>

            <div className="space-y-1.5 mb-3">
              {quickPrompts.map((p, idx) => (
                <motion.button
                  key={idx}
                  whileHover={{ scale: 1.01, x: 2 }}
                  whileTap={{ scale: 0.99 }}
                  onClick={() => handleSend(p)}
                  className="w-full text-left text-xs bg-[#f8f3ea] hover:bg-[#f2ede4] text-[#00152a] px-2.5 py-1.5 rounded-[4px] font-medium transition-colors border border-[#e7e2d9]/60 cursor-pointer"
                >
                  {p}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Écrivez un message..."
                value={customMsg}
                onChange={(e) => setCustomMsg(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                className="flex-1 text-xs border border-gray-300 rounded-[4px] px-2.5 py-1.5 focus:outline-none focus:border-[#25D366]"
              >
              </input>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSend()}
                className="bg-[#25D366] hover:bg-[#20ba59] text-white px-3 py-1.5 rounded-[4px] text-xs font-bold flex items-center justify-center cursor-pointer"
              >
                <Send className="w-3.5 h-3.5" />
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Floating Button with Animated Radar Rings */}
      <div className="relative">
        {/* Pulsing radar ring */}
        <motion.div
          animate={{ scale: [1, 1.4, 1], opacity: [0.6, 0, 0.6] }}
          transition={{ repeat: Infinity, duration: 2.2, ease: 'easeInOut' }}
          className="absolute inset-0 rounded-full bg-[#25D366] pointer-events-none"
        />

        <motion.button
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.93 }}
          id="floating-whatsapp-btn"
          onClick={() => setIsOpen(!isOpen)}
          className="relative z-10 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl flex items-center justify-center cursor-pointer ring-4 ring-[#25D366]/30"
          aria-label="Contacter l'agence immobilière sur WhatsApp"
        >
          <MessageSquare className="w-7 h-7 fill-current" />
        </motion.button>
      </div>
    </div>
  );
};
