const WA_NUMBER = process.env.REACT_APP_WA_NUMBER; // e.g. "221772783150"

export function buildBookingMessage(route, time) {
  // Sanitize inputs — strip all HTML and limit length
  const safeRoute = String(route).replace(/[<>"']/g, "").slice(0, 80);
  const safeTime  = String(time).replace(/[^0-9:hH]/g, "").slice(0, 10);

  const msg = `Bonjour, je veux réserver le trajet ${safeRoute} à ${safeTime}. Merci de confirmer ma place.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildAIBDMessage() {
  const msg = `Bonjour, je veux réserver un trajet Dakar → AIBD. Mon heure de départ est : `;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}

export function buildVoiceMessage() {
  const msg = `Bonjour DakarGo 👋 Je veux réserver un trajet.`;
  return `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(msg)}`;
}