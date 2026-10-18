/**
 * @module utils/format
 * Price, area and other formatting helpers.
 */

/** Format a FCFA price — e.g. 35 000 000 FCFA */
export function formatPrice(price: number): string {
  return (
    new Intl.NumberFormat('fr-FR', {
      style: 'decimal',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price) + ' FCFA'
  );
}

/** Format area in m² */
export function formatArea(area: number): string {
  return `${area} m²`;
}

/** Truncate text to n characters */
export function truncate(text: string, max = 140): string {
  return text.length > max ? text.slice(0, max).trimEnd() + '…' : text;
}
