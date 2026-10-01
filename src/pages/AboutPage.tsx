import React from 'react';
import { PagePath } from '../types';
import { HOTEL_INFO, HOTEL_IMAGES, TESTIMONIALS_DATA } from '../data/hotelData';
import { MapPin, ShieldCheck, HeartHandshake, Award, Star, Users, CheckCircle, ArrowRight } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenBooking: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate, onOpenBooking }) => {
  return (
    <div className="space-y-16 pb-20 text-slate-100">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 border-b border-purple-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            About Our Hotel
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Welcome to Manazil Al Madinah Hotel
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Discover our commitment to Saudi Arabian hospitality, spiritual tranquility, and exceptional guest comfort on King Faisal Road, Madinah.
          </p>
        </div>
      </section>

      {/* Main Story & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="font-serif text-3xl font-bold text-white">
              A Dedicated Sanctuary for Umrah, Hajj & Travelers
            </h2>

            <p className="text-slate-300 text-sm leading-relaxed">
              Founded with a mission to serve pilgrims visiting the City of the Prophet (PBUH), Manazil Al Madinah Hotel combines modern convenience with traditional warmth. Our hotel offers quick walking access to Al-Masjid an-Nabawi, allowing guests to attend all congregational prayers with tranquility and ease.
            </p>

            <p className="text-slate-300 text-sm leading-relaxed">
              Every floor and guest room is meticulously maintained by our dedicated daily housekeeping team. Whether you are traveling as an individual, a family, or an Umrah tour group, our diverse room layouts ensure peaceful rest throughout your stay.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 bg-purple-950/80 px-3.5 py-2 rounded-lg border border-purple-800/60">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Licensed Saudi Hotel Operator</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-amber-300 bg-purple-950/80 px-3.5 py-2 rounded-lg border border-purple-800/60">
                <HeartHandshake className="w-4 h-4 text-amber-400" />
                <span>24/7 Pilgrimage Support</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <img
              src={HOTEL_IMAGES.lobby}
              alt="Hotel Lobby Reception"
              className="rounded-2xl border border-purple-800/50 object-cover h-64 w-full shadow-lg"
              referrerPolicy="no-referrer"
            />
            <img
              src={HOTEL_IMAGES.suite}
              alt="Hotel Room Suite"
              className="rounded-2xl border border-purple-800/50 object-cover h-64 w-full shadow-lg mt-6"
              referrerPolicy="no-referrer"
            />
          </div>

        </div>
      </section>

      {/* Why Guests Choose Us Grid */}
      <section className="py-16 bg-purple-950/30 border-y border-purple-900/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Why Stay With Us
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Why Guests Choose Manazil Al Madinah
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/80 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center font-bold text-lg">
                300m
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Proximity to Prophet's Mosque</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Walk to the Northern Courtyard of Al-Masjid an-Nabawi in just 4 minutes via King Faisal Road. Ideal for elderly guests and families.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center font-bold text-lg">
                24/7
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Round-The-Clock Support</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our front desk remains open 24 hours a day to assist with late night check-ins, luggage handling, transportation, and local directions.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/80 border border-purple-800/40 space-y-3">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center font-bold text-lg">
                100%
              </div>
              <h3 className="font-serif text-lg font-bold text-white">Cleanliness & Hygiene</h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                Strict daily housekeeping standards ensure fresh linens, sanitized bathrooms, and pristine bedroom environments for all guests.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Guest Reviews & Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Guest Experience
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            What Our Guests Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TESTIMONIALS_DATA.map((t) => (
            <div key={t.id} className="p-6 rounded-2xl bg-slate-900/90 border border-purple-800/50 space-y-4">
              <div className="flex items-center gap-1 text-amber-400">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              <p className="text-xs text-slate-300 italic leading-relaxed">
                "{t.comment}"
              </p>

              <div className="pt-2 border-t border-purple-900/50 flex items-center justify-between text-xs">
                <div>
                  <div className="font-bold text-white">{t.guestName}</div>
                  <div className="text-[11px] text-slate-400">{t.origin}</div>
                </div>
                <span className="px-2 py-1 rounded bg-purple-950 text-amber-300 text-[10px]">
                  {t.roomType}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Box */}
      <section className="max-w-4xl mx-auto px-4">
        <div className="p-8 rounded-2xl bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 border border-amber-400/30 text-center space-y-4">
          <h3 className="font-serif text-2xl font-bold text-white">Experience Genuine Saudi Hospitality</h3>
          <p className="text-xs text-slate-300">Book your room directly with us for guaranteed best available rates.</p>
          <button
            onClick={onOpenBooking}
            className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider"
          >
            Book Your Stay Now
          </button>
        </div>
      </section>

    </div>
  );
};
