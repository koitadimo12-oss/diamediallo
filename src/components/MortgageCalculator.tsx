import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Calculator, Euro, Building, ArrowRight, MessageSquare, Info, ShieldAlert } from 'lucide-react';
import { AGENCY_INFO } from '../data/properties';

export const MortgageCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(35000000); // 35M FCFA default
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(20); // 20%
  const [loanTermYears, setLoanTermYears] = useState<number>(15); // 15 years
  const [interestRate, setInterestRate] = useState<number>(7.5); // 7.5% standard UEMOA

  const FCFA_EUR_RATE = 655.957;

  // Calculations
  const downPayment = (propertyPrice * downPaymentPercent) / 100;
  const principal = propertyPrice - downPayment;
  const monthlyRate = interestRate / 100 / 12;
  const totalMonths = loanTermYears * 12;

  const monthlyPayment =
    principal > 0 && monthlyRate > 0
      ? (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
        (Math.pow(1 + monthlyRate, totalMonths) - 1)
      : 0;

  const totalCost = monthlyPayment * totalMonths;
  const totalInterest = totalCost - principal;

  const formatFCFA = (val: number) => {
    return Math.round(val).toLocaleString('fr-FR') + ' FCFA';
  };

  const formatEUR = (val: number) => {
    return Math.round(val / FCFA_EUR_RATE).toLocaleString('fr-FR') + ' €';
  };

  const handleConsultLoan = () => {
    const text = encodeURIComponent(
      `Bonjour Agence Diame Diallo, j'ai simulé un financement pour un bien de ${formatFCFA(propertyPrice)} (${formatEUR(propertyPrice)}) avec un apport de ${downPaymentPercent}% sur ${loanTermYears} ans. J'aimerais échanger avec votre conseiller financier.`
    );
    window.open(`https://wa.me/${AGENCY_INFO.whatsapp.replace(/\+/g, '')}?text=${text}`, '_blank');
  };

  return (
    <section id="simulateur" className="py-14 md:py-20 bg-transparent relative z-10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Header with Animation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-xl mx-auto mb-10"
        >
          <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-amber-100/90 text-[#d97706] text-xs font-bold rounded-full mb-3 shadow-sm">
            <Calculator className="w-3.5 h-3.5" />
            <span>Outil d'accompagnement financier & diaspora</span>
          </div>
          <h2 className="font-['Manrope'] font-extrabold text-2xl sm:text-3xl text-[#00152a] tracking-tight">
            Simulateur de Financement
          </h2>
          <div className="w-14 h-[3px] bg-[#d97706] mx-auto mt-2 rounded-full mb-3" />
          <p className="text-sm text-[#43474d]">
            Estimez vos mensualités pour votre acquisition immobilière à Dakar et au Sénégal (FCFA et Euros).
          </p>
        </motion.div>

        {/* Interactive Calculator Box with In-View Animation */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-[#e7e2d9] shadow-xl grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          
          {/* Controls Column */}
          <div className="lg:col-span-7 space-y-5">
            {/* Property Price */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#74777e]">
                  Prix du bien
                </label>
                <span className="font-['Manrope'] font-extrabold text-[#00152a] text-sm sm:text-base">
                  {formatFCFA(propertyPrice)}{' '}
                  <span className="text-xs text-[#74777e] font-normal">({formatEUR(propertyPrice)})</span>
                </span>
              </div>
              <input
                type="range"
                min="10000000"
                max="300000000"
                step="5000000"
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-[#e7e2d9] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
              />
              <div className="flex justify-between text-[10px] text-[#74777e] mt-1 font-medium">
                <span>10M FCFA (15k€)</span>
                <span>150M FCFA</span>
                <span>300M FCFA (457k€)</span>
              </div>
            </div>

            {/* Down payment */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#74777e]">
                  Apport personnel ({downPaymentPercent}%)
                </label>
                <span className="font-['Manrope'] font-semibold text-[#00152a] text-sm">
                  {formatFCFA(downPayment)}
                </span>
              </div>
              <input
                type="range"
                min="0"
                max="60"
                step="5"
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-[#e7e2d9] rounded-lg appearance-none cursor-pointer accent-[#d97706]"
              />
            </div>

            {/* Duration */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#74777e]">
                  Durée du crédit : {loanTermYears} ans
                </label>
                <span className="text-xs text-[#74777e] font-medium">({totalMonths} mensualités)</span>
              </div>
              <input
                type="range"
                min="5"
                max="25"
                step="1"
                value={loanTermYears}
                onChange={(e) => setLoanTermYears(Number(e.target.value))}
                className="w-full h-2 bg-[#e7e2d9] rounded-lg appearance-none cursor-pointer accent-[#00152a]"
              />
              <div className="flex justify-between text-[10px] text-[#74777e] mt-1 font-medium">
                <span>5 ans</span>
                <span>15 ans</span>
                <span>25 ans</span>
              </div>
            </div>

            {/* Interest Rate */}
            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold uppercase tracking-wider text-[#74777e]">
                  Taux d'intérêt annuel : {interestRate}%
                </label>
                <span className="text-[11px] text-[#d97706] font-medium">Banques Sénégal / UEMOA</span>
              </div>
              <input
                type="range"
                min="4"
                max="12"
                step="0.25"
                value={interestRate}
                onChange={(e) => setInterestRate(Number(e.target.value))}
                className="w-full h-2 bg-[#e7e2d9] rounded-lg appearance-none cursor-pointer accent-[#00152a]"
              />
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-5 bg-[#00152a] text-white rounded-xl p-5 sm:p-6 flex flex-col justify-between border border-[#102a43] shadow-lg relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full -mr-12 -mt-12 pointer-events-none" />

            <div>
              <span className="text-xs text-amber-400 font-bold uppercase tracking-widest block mb-1">
                Mensualité estimée
              </span>
              
              <div className="font-['Manrope'] font-black text-2xl sm:text-3xl text-white mb-0.5 tabular-nums">
                {formatFCFA(monthlyPayment)}
                <span className="text-xs font-normal text-neutral-300"> / mois</span>
              </div>

              <div className="text-sm text-neutral-300 font-medium mb-6">
                soit environ <strong className="text-white font-bold">{formatEUR(monthlyPayment)} / mois</strong>
              </div>

              <div className="space-y-2.5 py-4 border-t border-white/10 text-xs text-neutral-300">
                <div className="flex justify-between">
                  <span>Montant emprunté :</span>
                  <span className="font-semibold text-white">{formatFCFA(principal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Apport initial :</span>
                  <span className="font-semibold text-white">{formatFCFA(downPayment)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Coût total des intérêts :</span>
                  <span className="font-semibold text-amber-300">{formatFCFA(totalInterest)}</span>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleConsultLoan}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white font-['Manrope'] font-bold text-xs sm:text-sm rounded-[4px] shadow-md transition-colors cursor-pointer"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Étudier ce dossier avec nous (WhatsApp)</span>
              </motion.button>
            </div>
          </div>

        </motion.div>

      </div>
    </section>
  );
};
