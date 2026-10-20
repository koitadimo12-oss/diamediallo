import React, { useState } from 'react';
import { MessageSquare, Phone, Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { Layout } from '../components/layout/Layout';
import { PageHeader } from '../components/ui/PageHeader';
import { FaqSection } from '../components/sections/FaqSection';
import { usePageMeta } from '../hooks/usePageMeta';
import { AGENCY_CONFIG } from '../data';
import { buildWhatsAppLink, buildGeneralContactMessage } from '../utils/whatsapp';

type FormState = 'idle' | 'sending' | 'success' | 'error';

const SUBJECTS = [
  'Achat immobilier',
  'Vente immobilière',
  'Location',
  'Gestion locative',
  'Investissement diaspora',
  'Autre demande',
];

export const ContactPage: React.FC = () => {
  usePageMeta({
    title: 'Contact — Nous contacter',
    description: `Contactez l'${AGENCY_CONFIG.name} pour votre projet immobilier au Sénégal. Achat, vente, location ou gestion — notre équipe vous répond rapidement.`,
    canonical: `${AGENCY_CONFIG.siteUrl}/contact`,
  });

  const [form, setForm] = useState({ fullName: '', phone: '', email: '', subject: '', message: '' });
  const [formState, setFormState] = useState<FormState>('idle');
  const waHref = buildWhatsAppLink(buildGeneralContactMessage());

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ⚠️ Fonctionnalité simulée — connecter un backend (API, EmailJS, Formspree...) avant déploiement
    setFormState('sending');
    setTimeout(() => setFormState('success'), 1500);
  };

  return (
    <Layout>
      <PageHeader
        kicker="Prendre contact"
        title="Parlons de votre projet"
        subtitle="Notre équipe vous répond dans les meilleurs délais — par WhatsApp, téléphone ou email."
        crumbs={[{ label: 'Accueil', path: '/' }, { label: 'Contact' }]}
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">

          {/* Contact info */}
          <div className="lg:col-span-2 space-y-5">
            <h2 className="text-xl font-bold text-[#10243A]">Coordonnées</h2>

            {[
              {
                icon: MessageSquare,
                label: 'WhatsApp',
                value: AGENCY_CONFIG.whatsappDisplay,
                sub: 'Réponse rapide — 7j/7',
                href: waHref,
                color: 'bg-[#25D366]',
                iconClass: 'fill-white text-white',
              },
              {
                icon: Phone,
                label: 'Téléphone',
                value: AGENCY_CONFIG.phone,
                sub: AGENCY_CONFIG.hours,
                href: `tel:${AGENCY_CONFIG.phone}`,
                color: 'bg-[#10243A]',
                iconClass: 'text-[#C8A96B]',
              },
              {
                icon: Mail,
                label: 'Email',
                value: AGENCY_CONFIG.email,
                sub: 'Réponse sous 24h ouvrées',
                href: `mailto:${AGENCY_CONFIG.email}`,
                color: 'bg-[#C8A96B]',
                iconClass: 'text-[#10243A]',
              },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="flex items-center gap-4 p-4 bg-white rounded-xl border border-[#F5F6F8] hover:border-[#C8A96B]/30 hover:shadow-md transition-all group"
                >
                  <div className={`w-11 h-11 rounded-xl ${item.color} flex items-center justify-center flex-shrink-0`}>
                    <Icon className={`w-5 h-5 ${item.iconClass}`} />
                  </div>
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-[#334155]">{item.label}</p>
                    <p className="text-sm font-bold text-[#10243A] break-all">{item.value}</p>
                    <p className="text-xs text-[#334155]">{item.sub}</p>
                  </div>
                </a>
              );
            })}

            {/* Address */}
            <div className="flex items-start gap-4 p-4 bg-[#F5F6F8] rounded-xl">
              <div className="w-11 h-11 rounded-xl border border-[#C8A96B]/30 bg-white flex items-center justify-center flex-shrink-0">
                <MapPin className="w-5 h-5 text-[#C8A96B]" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-[#334155]">Adresse</p>
                <p className="text-sm font-semibold text-[#10243A]">{AGENCY_CONFIG.address}</p>
                <p className="text-xs text-[#334155] mt-0.5">{AGENCY_CONFIG.hours}</p>
              </div>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl border border-[#F5F6F8] shadow-sm p-7">
              {formState === 'success' ? (
                <div className="py-12 text-center">
                  <CheckCircle2 className="w-14 h-14 text-[#25D366] mx-auto mb-4" />
                  <h3 className="text-xl font-black text-[#10243A] mb-2">Message envoyé !</h3>
                  <p className="text-[#334155] text-sm max-w-xs mx-auto mb-6">
                    Merci pour votre message. Notre équipe vous contactera dans les meilleurs délais.
                  </p>
                  <button
                    onClick={() => { setFormState('idle'); setForm({ fullName: '', phone: '', email: '', subject: '', message: '' }); }}
                    className="px-6 py-2.5 bg-[#10243A] text-white text-sm font-bold rounded-xl"
                  >
                    Envoyer un autre message
                  </button>
                </div>
              ) : (
                <>
                  <h2 className="text-xl font-bold text-[#10243A] mb-1">Formulaire de contact</h2>
                  <p className="text-xs text-[#334155] mb-6">
                    ⚠️ <em>Fonctionnalité simulée — connecter un backend avant déploiement.</em>
                  </p>

                  <form onSubmit={handleSubmit} noValidate className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="fullName" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                          Nom complet *
                        </label>
                        <input
                          id="fullName"
                          name="fullName"
                          type="text"
                          required
                          value={form.fullName}
                          onChange={handleChange}
                          placeholder="Votre nom et prénom"
                          className="w-full px-3.5 py-2.5 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                          Téléphone *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={form.phone}
                          onChange={handleChange}
                          placeholder="+221 77 XXX XX XX"
                          className="w-full px-3.5 py-2.5 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                        Email
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="votre@email.com"
                        className="w-full px-3.5 py-2.5 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
                      />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                        Objet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full px-3.5 py-2.5 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0"
                      >
                        <option value="">Sélectionner un objet</option>
                        {SUBJECTS.map((s) => <option key={s} value={s}>{s}</option>)}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-[#334155] mb-1.5">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        placeholder="Décrivez votre projet immobilier, vos critères, votre budget…"
                        className="w-full px-3.5 py-2.5 bg-[#F5F6F8] rounded-lg text-sm text-[#10243A] focus:outline-none focus:ring-2 focus:ring-[#C8A96B] border-0 resize-none"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-form-submit"
                      disabled={formState === 'sending'}
                      className="w-full flex items-center justify-center gap-2.5 py-3.5 bg-[#10243A] hover:bg-[#1a3550] disabled:opacity-60 text-white font-bold text-sm rounded-xl transition-colors"
                    >
                      {formState === 'sending' ? (
                        <>
                          <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Envoi en cours…
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Envoyer le message
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
      <FaqSection />
    </Layout>
  );
};
