import React, { useState } from 'react';
import { PagePath, Currency } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { Phone, Globe, Menu, X, Hotel, Calendar } from 'lucide-react';

interface NavbarProps {
  currentPage: PagePath;
  onNavigate: (path: PagePath) => void;
  onOpenBooking: () => void;
  activeCurrency: Currency;
  onCurrencyChange: (currency: Currency) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentPage,
  onNavigate,
  onOpenBooking,
  activeCurrency,
  onCurrencyChange
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks: { label: string; path: PagePath }[] = [
    { label: 'Home', path: '/' },
    { label: 'About Us', path: '/about' },
    { label: 'Rooms & Services', path: '/rooms' },
    { label: 'Contact Us', path: '/contact' }
  ];

  const handleNavClick = (path: PagePath) => {
    onNavigate(path);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-slate-950/90 backdrop-blur-md border-b border-purple-900/40 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        {/* Zone 1: Brand Wordmark */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => handleNavClick('/')}
            className="flex items-center gap-3 text-left group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-800 via-purple-900 to-slate-900 border border-amber-400/40 flex items-center justify-center text-amber-400 group-hover:border-amber-400 transition-colors shadow-md">
              <Hotel className="w-5 h-5" />
            </div>
            <div>
              <span className="font-serif text-lg sm:text-xl font-bold tracking-wide text-white group-hover:text-amber-300 transition-colors block">
                Manazil Al Madinah
              </span>
              <span className="text-[10px] text-purple-300 tracking-widest uppercase font-semibold block -mt-1">
                Hotel · Madinah
              </span>
            </div>
          </button>
        </div>

        {/* Zone 2: 4 Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 bg-purple-950/40 border border-purple-900/50 rounded-full px-4 py-1.5">
          {navLinks.map((link) => {
            const isActive = currentPage === link.path;
            return (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40 shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-purple-900/40'
                }`}
              >
                {link.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Primary Actions (Currency + Phone + Book Now) */}
        <div className="hidden lg:flex items-center gap-3">
          
          {/* Currency Switcher */}
          <div className="relative flex items-center bg-purple-950/60 border border-purple-800/40 rounded-lg p-0.5 text-xs">
            <Globe className="w-3.5 h-3.5 text-purple-400 ml-2 mr-1" />
            {(['SAR', 'USD', 'EUR'] as Currency[]).map((curr) => (
              <button
                key={curr}
                onClick={() => onCurrencyChange(curr)}
                className={`px-2 py-1 text-[11px] font-bold rounded transition-colors ${
                  activeCurrency === curr
                    ? 'bg-purple-800 text-amber-300'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                {curr}
              </button>
            ))}
          </div>

          {/* Direct Phone Link */}
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-slate-200 bg-purple-900/40 border border-purple-800/40 hover:bg-purple-900/70 hover:text-amber-300 transition-colors whitespace-nowrap"
            title="Call Front Desk"
          >
            <Phone className="w-3.5 h-3.5 text-amber-400" />
            <span>{HOTEL_INFO.phone}</span>
          </a>

          {/* Book Your Stay CTA */}
          <button
            onClick={onOpenBooking}
            className="flex items-center gap-2 px-4 py-2.5 rounded-lg bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md hover:shadow-amber-500/20 whitespace-nowrap"
          >
            <Calendar className="w-4 h-4" />
            <span>Book Your Stay</span>
          </button>
        </div>

        {/* Mobile Menu Toggle Button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={onOpenBooking}
            className="px-3 py-1.5 rounded-md bg-amber-500 text-slate-950 font-bold text-xs uppercase"
          >
            Book
          </button>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-purple-900/50 border border-purple-700/50 text-slate-200 hover:text-white"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-950 border-b border-purple-900/60 px-4 py-5 space-y-4 animate-fadeIn">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => {
              const isActive = currentPage === link.path;
              return (
                <button
                  key={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className={`px-4 py-3 text-left text-sm font-semibold rounded-xl transition-colors ${
                    isActive
                      ? 'bg-purple-900/80 text-amber-300 border border-amber-500/30'
                      : 'text-slate-300 hover:bg-purple-950 hover:text-white'
                  }`}
                >
                  {link.label}
                </button>
              );
            })}
          </div>

          <div className="pt-4 border-t border-purple-900/40 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs text-slate-300 bg-purple-950 p-2.5 rounded-lg border border-purple-800/40">
              <span className="font-medium">Currency:</span>
              <div className="flex gap-1">
                {(['SAR', 'USD', 'EUR'] as Currency[]).map((curr) => (
                  <button
                    key={curr}
                    onClick={() => onCurrencyChange(curr)}
                    className={`px-2.5 py-1 text-xs font-bold rounded ${
                      activeCurrency === curr ? 'bg-amber-500 text-slate-950' : 'bg-purple-900/50 text-slate-300'
                    }`}
                  >
                    {curr}
                  </button>
                ))}
              </div>
            </div>

            <a
              href={`tel:${HOTEL_INFO.phone}`}
              className="flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-purple-900/50 border border-purple-700/50 text-amber-300 font-semibold text-xs"
            >
              <Phone className="w-4 h-4" />
              <span>Call +966 14 820 7570</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider text-center"
            >
              Book Your Stay Now
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
