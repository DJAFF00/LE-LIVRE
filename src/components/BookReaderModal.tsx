import React, { useState } from 'react';
import { BOOK_CONFIG } from '../config/book';
import { X, ChevronLeft, ChevronRight, ArrowRight, BookOpen } from 'lucide-react';

interface BookReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenChariow?: () => void;
}

export const BookReaderModal: React.FC<BookReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenChariow,
}) => {
  const [currentPage, setCurrentPage] = useState(0);

  if (!isOpen) return null;

  const totalPages = BOOK_CONFIG.excerpt.pages.length;
  const currentContent = BOOK_CONFIG.excerpt.pages[currentPage];

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/90 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl bg-[#121215] text-white border border-white/10 rounded-3xl shadow-[0_30px_90px_rgba(0,0,0,0.95)] overflow-hidden flex flex-col max-h-[92vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-5 border-b border-white/10 bg-[#16161B]">
          <div className="flex items-center gap-3">
            <BookOpen className="w-4 h-4 text-[#FF5500]" />
            <span className="text-xs font-mono font-bold text-[#FF5500] uppercase tracking-wider">
              Extrait Exclusif · {BOOK_CONFIG.excerpt.chapterNumber}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-[#71717A] hover:text-white rounded-full border border-white/10 transition-colors"
            aria-label="Fermer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Book Body */}
        <div className="p-8 sm:p-12 overflow-y-auto flex-1 select-text">
          <div className="text-center mb-8">
            <span className="text-xs uppercase tracking-widest text-[#FF5500] font-mono block mb-1">
              {BOOK_CONFIG.excerpt.chapterNumber}
            </span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {BOOK_CONFIG.excerpt.chapterTitle}
            </h3>
            <div className="w-12 h-1 bg-[#FF5500] mx-auto mt-4 rounded-full" />
          </div>

          <div className="text-base sm:text-lg text-[#D4D4D8] leading-[1.8] space-y-5 font-light">
            {currentContent.content.split('\n\n').map((paragraph, idx) => (
              <p key={idx} className="indent-4 first:indent-0">
                {idx === 0 && currentPage === 0 ? (
                  <>
                    <span className="float-left text-5xl font-extrabold leading-none pr-3 pt-1 text-[#FF5500]">
                      {paragraph.charAt(0)}
                    </span>
                    {paragraph.slice(1)}
                  </>
                ) : (
                  paragraph
                )}
              </p>
            ))}
          </div>
        </div>

        {/* Footer Navigation */}
        <div className="px-8 py-5 border-t border-white/10 bg-[#16161B] flex items-center justify-between text-xs">
          <div className="flex items-center gap-2">
            <button
              onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
              disabled={currentPage === 0}
              className="p-2 text-[#A1A1AA] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full border border-white/10"
              aria-label="Page précédente"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[#A1A1AA] font-mono font-medium">
              Page {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={currentPage === totalPages - 1}
              className="p-2 text-[#A1A1AA] hover:text-white disabled:opacity-30 disabled:cursor-not-allowed transition-colors rounded-full border border-white/10"
              aria-label="Page suivante"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          <button
            onClick={() => {
              onClose();
              if (onOpenChariow) onOpenChariow();
            }}
            className="group pl-5 pr-1.5 py-1.5 bg-[#FF5500] hover:bg-[#E04B00] text-white font-bold rounded-full inline-flex items-center gap-3 transition-all"
          >
            <span>Commander le livre ({BOOK_CONFIG.commercial.price} {BOOK_CONFIG.commercial.currency})</span>
            <span className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center">
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </button>
        </div>

      </div>
    </div>
  );
};
