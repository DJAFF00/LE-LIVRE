import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { ArrowRight, X, ExternalLink, Lock, Edit3 } from 'lucide-react';

interface ChariowRedirectModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ChariowRedirectModal: React.FC<ChariowRedirectModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [customUrl, setCustomUrl] = useState(BOOK_CONFIG.chariowUrl);
  const [isEditingUrl, setIsEditingUrl] = useState(false);

  if (!isOpen) return null;

  const handleProceed = () => {
    window.open(customUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-[#121215] border border-white/10 rounded-3xl p-8 text-white shadow-[0_25px_80px_rgba(0,0,0,0.95)]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-[#71717A] hover:text-white rounded-full border border-white/10 transition-colors"
          aria-label="Fermer"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#FF5500] uppercase mb-2">
          <span>Boutique Chariow Officielle</span>
          <span aria-hidden="true" className="text-white/30">/</span>
          <span>Redirection Sécurisée</span>
        </div>

        <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3">
          Finaliser votre commande
        </h3>

        <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 font-normal">
          Vous allez être redirigé vers la boutique officielle sécurisée <strong>Chariow</strong> pour choisir vos options de livraison et régler par carte bancaire protégée.
        </p>

        {/* Product Recap Card */}
        <div className="p-4 rounded-2xl bg-[#18181D] border border-white/10 mb-6 space-y-2">
          <div className="flex justify-between items-center text-xs">
            <span className="text-[#A1A1AA]">{BOOK_CONFIG.title} — {BOOK_CONFIG.commercial.format}</span>
            <span className="text-white font-bold text-lg">
              {BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-[#71717A]">
            <Lock className="w-3.5 h-3.5 text-[#FF5500]" />
            <span>Paiement chiffré SSL 256 bits opéré par Chariow</span>
          </div>
        </div>

        {/* URL editor */}
        <div className="mb-6 space-y-2">
          <div className="flex items-center justify-between text-xs text-[#71717A]">
            <span>URL cible Chariow :</span>
            <button
              type="button"
              onClick={() => setIsEditingUrl(!isEditingUrl)}
              className="text-[#FF5500] hover:text-white flex items-center gap-1 text-[11px] font-semibold"
            >
              <Edit3 className="w-3 h-3" />
              <span>{isEditingUrl ? "Valider" : "Personnaliser le lien"}</span>
            </button>
          </div>

          {isEditingUrl ? (
            <input
              type="url"
              value={customUrl}
              onChange={(e) => setCustomUrl(e.target.value)}
              placeholder="https://chariow.com/checkout/votre-livre"
              className="w-full px-3 py-2 bg-[#09090B] border border-[#FF5500] rounded-xl text-xs font-mono text-white focus:outline-none"
            />
          ) : (
            <div className="p-3 bg-[#09090B] rounded-xl border border-white/10 text-xs font-mono text-[#A1A1AA] truncate">
              {customUrl}
            </div>
          )}

          {!BOOK_CONFIG.isChariowUrlConfigured && (
            <p className="text-[11px] text-[#71717A]">
              * Configurable dans <code className="text-[#FF5500] font-mono">src/config/book.ts</code>.
            </p>
          )}
        </div>

        {/* Modal Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={handleProceed}
            className="flex-1 group pl-6 pr-2 py-2 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold text-xs uppercase tracking-wider rounded-full flex items-center justify-between transition-all shadow-lg"
          >
            <span>Continuer vers Chariow</span>
            <span className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center transition-transform group-hover:translate-x-0.5">
              <ExternalLink className="w-3.5 h-3.5" />
            </span>
          </button>
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-3 border border-white/10 hover:border-white/20 rounded-full text-[#A1A1AA] hover:text-white text-xs uppercase tracking-wider font-semibold transition-colors"
          >
            Retour
          </button>
        </div>

      </div>
    </div>
  );
};
