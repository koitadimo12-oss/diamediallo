/**
 * @module utils/whatsapp
 * Generates WhatsApp deep links with pre-filled messages.
 */
import { AGENCY_CONFIG } from '../data';
import { Property } from '../types';

export function buildWhatsAppLink(message: string): string {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${AGENCY_CONFIG.whatsapp}?text=${encoded}`;
}

export function buildPropertyInterestMessage(property: Property): string {
  const priceLabel =
    property.transaction === 'location'
      ? `${property.priceDisplay}`
      : `${property.priceDisplay}`;

  return (
    `Bonjour Agence Immobilière Diame Diallo,\n\n` +
    `Je suis intéressé(e) par le bien suivant :\n` +
    `📋 *${property.title}*\n` +
    `📍 ${property.location.fullAddress}\n` +
    `💰 ${priceLabel}\n` +
    `🔖 Référence : ${property.reference}\n\n` +
    `Pourriez-vous me contacter pour plus d'informations ?\n\n` +
    `Merci.`
  );
}

export function buildGeneralContactMessage(): string {
  return (
    `Bonjour Agence Immobilière Diame Diallo,\n\n` +
    `Je souhaite obtenir des informations sur vos biens immobiliers disponibles à Dakar et en Sénégal.\n\n` +
    `Merci de me recontacter.`
  );
}
