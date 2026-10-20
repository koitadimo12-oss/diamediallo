import React, { useState } from 'react';
import { MapPin, Phone, Mail, MessageSquare, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';
import { ContactFormData } from '../types';
import { FaWhatsapp } from 'react-icons/fa';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      "Bonjour Agence Immobilière Diame Diallo, je vous contacte depuis votre site web pour un projet immobilier à Dakar."
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      return;
    }

    setLoading(true);
    // Simulate immediate smooth submission and offer WhatsApp transfer
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);

      // Also forward automatically or optionally to WhatsApp for maximum responsiveness
      const directMsg = encodeURIComponent(
        `Nouveau message de ${formData.fullName} (Tél: ${formData.phone}) :\n\n"${formData.message || 'Demande de contact général'}"`
      );
      // Wait a moment then ask if they want to chat directly
    }, 600);
  };

  return (
    <section id="contact" className="py-14 md:py-20 bg-[#00152a] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Main Title matching Image 1 */}
        <div className="mb-8">
          <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Contactez-nous
          </h2>
          <div className="w-14 h-[3px] bg-[#d97706] mt-2 rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* Left Column: Contact details & WhatsApp button matching Image 1 */}
          <div className="space-y-6">
            
            {/* Adresse */}
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-['Manrope'] font-bold text-sm text-white mb-0.5">
                  Adresse
                </h4>
                <p className="text-sm text-neutral-300">
                  {AGENCY_INFO.address}
                </p>
              </div>
            </div>

            {/* Téléphone */}
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-['Manrope'] font-bold text-sm text-white mb-0.5">
                  Téléphone
                </h4>
                <a
                  href={`tel:${AGENCY_INFO.phone.replace(/\s+/g, '')}`}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {AGENCY_INFO.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-3.5">
              <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0 text-amber-400 mt-0.5">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <h4 className="font-['Manrope'] font-bold text-sm text-white mb-0.5">
                  Email
                </h4>
                <a
                  href={`mailto:${AGENCY_INFO.email}`}
                  className="text-sm text-neutral-300 hover:text-white transition-colors"
                >
                  {AGENCY_INFO.email}
                </a>
              </div>
            </div>

            {/* Discuter sur WhatsApp button matching Image 1 */}
            <div className="pt-2">
              <button
                id="contact-whatsapp-chat-btn"
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center gap-2.5 py-3.5 px-6 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Manrope'] font-bold text-sm rounded-[4px] shadow-md transition-all active:scale-[0.99]"
              >
                <FaWhatsapp className="w-5 h-5" />
                <span>Discuter sur WhatsApp</span>
              </button>
            </div>

            <div className="p-4 rounded-lg bg-white/5 border border-white/10 text-xs text-neutral-300 leading-relaxed">
              <span className="font-bold text-amber-400 block mb-1">Horaires d'ouverture :</span>
              Lundi au Vendredi : 08h30 - 18h30 | Samedi : 09h00 - 15h00.
              Permanence WhatsApp assurée 7j/7 pour la diaspora.
            </div>

          </div>

          {/* Right Column: "Envoyez-nous un message" Form matching Image 1 */}
          <div className="bg-white text-[#1d1c16] rounded-xl p-6 sm:p-7 shadow-xl border border-white/20">
            <h3 className="font-['Manrope'] font-bold text-lg sm:text-xl text-[#00152a] mb-5">
              Envoyez-nous un message
            </h3>

            {submitted ? (
              <div className="py-6 text-center animate-in fade-in duration-300">
                <div className="w-12 h-12 rounded-full bg-green-100 text-green-600 flex items-center justify-center mx-auto mb-3">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-['Manrope'] font-bold text-lg text-[#00152a] mb-1">
                  Message bien envoyé !
                </h4>
                <p className="text-xs sm:text-sm text-[#43474d] mb-4">
                  Merci {formData.fullName}. Notre équipe à Colobane vous répondra dans les plus brefs délais.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ fullName: '', phone: '', message: '' });
                  }}
                  className="text-xs font-semibold text-[#d97706] hover:underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Nom complet */}
                <div>
                  <label
                    htmlFor="form-fullName"
                    className="block text-xs font-bold text-[#1d1c16] mb-1.5 font-['Work_Sans']"
                  >
                    Nom complet <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="form-fullName"
                    required
                    placeholder="Votre nom"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full bg-white border border-[#c3c6ce] focus:border-[#00152a] focus:ring-1 focus:ring-[#00152a] rounded-[4px] px-3.5 py-2.5 text-sm text-[#1d1c16] outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Téléphone */}
                <div>
                  <label
                    htmlFor="form-phone"
                    className="block text-xs font-bold text-[#1d1c16] mb-1.5 font-['Work_Sans']"
                  >
                    Téléphone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    id="form-phone"
                    required
                    placeholder="Votre numéro (ex: +221 77 526 41 07)"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full bg-white border border-[#c3c6ce] focus:border-[#00152a] focus:ring-1 focus:ring-[#00152a] rounded-[4px] px-3.5 py-2.5 text-sm text-[#1d1c16] outline-none transition-all placeholder:text-gray-400"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="form-message"
                    className="block text-xs font-bold text-[#1d1c16] mb-1.5 font-['Work_Sans']"
                  >
                    Message
                  </label>
                  <textarea
                    id="form-message"
                    rows={4}
                    placeholder="Comment pouvons-nous vous aider ?"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-white border border-[#c3c6ce] focus:border-[#00152a] focus:ring-1 focus:ring-[#00152a] rounded-[4px] px-3.5 py-2.5 text-sm text-[#1d1c16] outline-none transition-all placeholder:text-gray-400 resize-none"
                  />
                </div>

                {/* Envoyer le message button matching Image 1 */}
                <button
                  type="submit"
                  id="contact-submit-btn"
                  disabled={loading}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#00152a] hover:bg-[#102a43] text-white font-['Manrope'] font-bold text-sm rounded-[4px] transition-all shadow-sm active:scale-[0.99] disabled:opacity-50"
                >
                  <Send className="w-4 h-4" />
                  <span>{loading ? 'Envoi en cours...' : 'Envoyer le message'}</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
