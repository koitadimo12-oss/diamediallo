import React, { useState } from 'react';
import { MessageSquare, X } from 'lucide-react';
import { AGENCY_CONFIG } from '../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../utils/whatsapp';

export const FloatingWhatsApp: React.FC = () => {
  const [dismissed, setDismissed] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const href = buildWhatsAppLink(buildGeneralContactMessage());

  return (
    <div
      className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2"
      aria-label="Bouton WhatsApp flottant"
    >
      {/* Tooltip bubble */}
      {showTooltip && !dismissed && (
        <div className="relative bg-white rounded-2xl shadow-2xl border border-[#F5F6F8] p-4 max-w-[220px] animate-fade-in-up">
          <button
            onClick={() => setDismissed(true)}
            aria-label="Fermer"
            className="absolute -top-2 -right-2 w-6 h-6 bg-[#334155] text-white rounded-full flex items-center justify-center hover:bg-[#10243A] transition-colors"
          >
            <X className="w-3 h-3" />
          </button>
          <p className="text-xs font-semibold text-[#10243A] leading-snug">
            Bonjour 👋 Un projet immobilier ?<br />
            <span className="font-normal text-[#334155]">Discutons sur WhatsApp !</span>
          </p>
          <div className="absolute bottom-0 right-6 translate-y-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-white" />
        </div>
      )}

      {/* Main FAB */}
      <a
        id="floating-whatsapp-btn"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Contacter l'agence sur WhatsApp — ${AGENCY_CONFIG.whatsappDisplay}`}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="group relative w-14 h-14 bg-[#25D366] hover:bg-[#1DB954] rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-[#25D366]/40"
      >
        {/* Pulse ring */}
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30 group-hover:opacity-0" />
        <MessageSquare className="w-7 h-7 fill-white text-white relative z-10" />
      </a>
    </div>
  );
};
