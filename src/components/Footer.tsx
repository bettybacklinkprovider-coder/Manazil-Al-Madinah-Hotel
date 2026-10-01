import React from 'react';
import { PagePath } from '../types';
import { HOTEL_INFO } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, Hotel, Navigation, ShieldCheck, Heart } from 'lucide-react';

interface FooterProps {
  onNavigate: (path: PagePath) => void;
  onOpenBooking: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenBooking }) => {
  const handleNav = (path: PagePath) => {
    onNavigate(path);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-b from-slate-950 via-purple-950 to-slate-950 border-t border-purple-900/40 text-slate-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Column 1: Hotel Brand Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900 border border-amber-400/40 flex items-center justify-center text-amber-400">
                <Hotel className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-white">Manazil Al Madinah</h3>
                <p className="text-[10px] text-amber-300 tracking-widest uppercase font-semibold">Hotel · Madinah</p>
              </div>
            </div>

            <p className="text-xs text-slate-400 leading-relaxed">
              Experience serene luxury, Saudi warmth, and unmatched proximity to Al-Masjid an-Nabawi. Located conveniently on King Faisal Road in Bada'ah, Madinah.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-amber-300">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>Verified Saudi Tourism Hotel License</span>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button
                  onClick={() => handleNav('/')}
                  className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">›</span> Home Page
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/about')}
                  className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">›</span> About Our Hotel
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/rooms')}
                  className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">›</span> Rooms & Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('/contact')}
                  className="text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-2"
                >
                  <span className="text-purple-400">›</span> Contact & Directions
                </button>
              </li>
              <li>
                <button
                  onClick={onOpenBooking}
                  className="text-amber-300 font-semibold hover:underline flex items-center gap-2"
                >
                  <span className="text-amber-400">›</span> Online Booking Engine
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Contact & Location Specs */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Contact Details
            </h4>
            <div className="space-y-3 text-xs text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>{HOTEL_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`tel:${HOTEL_INFO.phone}`} className="hover:text-amber-300 font-semibold">
                  {HOTEL_INFO.phone}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <a href={`mailto:${HOTEL_INFO.email}`} className="hover:text-amber-300">
                  {HOTEL_INFO.email}
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Clock className="w-4 h-4 text-amber-400 shrink-0" />
                <span>24/7 Front Desk & Concierge Service</span>
              </div>
            </div>
          </div>

          {/* Column 4: Quick Action & Directions */}
          <div className="space-y-4">
            <h4 className="font-serif text-sm font-bold text-white uppercase tracking-wider text-amber-300">
              Proximity & Map
            </h4>
            <p className="text-xs text-slate-400">
              Just a short 300m walk to the Northern Courtyard of the Holy Prophet's Mosque (Al-Masjid an-Nabawi).
            </p>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-purple-900/60 border border-purple-700/60 hover:bg-purple-800 text-slate-100 font-semibold text-xs transition-colors"
            >
              <Navigation className="w-4 h-4 text-amber-400" />
              <span>Get Google Maps Directions</span>
            </a>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400">
          <div>
            © {new Date().getFullYear()} <span className="text-slate-200 font-medium">Manazil Al Madinah Hotel</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-200 cursor-pointer">Privacy Policy</span>
            <span>·</span>
            <span className="hover:text-slate-200 cursor-pointer">Terms of Stay</span>
            <span>·</span>
            <span className="hover:text-slate-200 cursor-pointer">Madinah Pilgrim Guide</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
