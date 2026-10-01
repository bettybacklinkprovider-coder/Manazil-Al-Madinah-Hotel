import React from 'react';
import { PagePath, Currency } from '../types';
import { HOTEL_INFO, HOTEL_IMAGES, ROOMS_DATA, FACILITIES_DATA } from '../data/hotelData';
import {
  Calendar,
  Phone,
  MapPin,
  ArrowRight,
  Wifi,
  Clock,
  Sparkles,
  Wind,
  Car,
  Briefcase,
  Users,
  Bed,
  Compass,
  CheckCircle2,
  Navigation,
  Shield
} from 'lucide-react';

interface HomePageProps {
  onNavigate: (path: PagePath) => void;
  onOpenBooking: (roomId?: string) => void;
  activeCurrency: Currency;
}

export const HomePage: React.FC<HomePageProps> = ({
  onNavigate,
  onOpenBooking,
  activeCurrency
}) => {
  const rate = HOTEL_INFO.currencyRates[activeCurrency];
  const currencySymbol = activeCurrency === 'SAR' ? 'SAR' : activeCurrency === 'USD' ? '$' : '€';

  // Helper for icons mapping
  const getFacilityIcon = (iconName: string) => {
    switch (iconName) {
      case 'Wifi': return <Wifi className="w-6 h-6 text-amber-400" />;
      case 'Clock': return <Clock className="w-6 h-6 text-amber-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-amber-400" />;
      case 'Wind': return <Wind className="w-6 h-6 text-amber-400" />;
      case 'Car': return <Car className="w-6 h-6 text-amber-400" />;
      case 'Briefcase': return <Briefcase className="w-6 h-6 text-amber-400" />;
      default: return <Sparkles className="w-6 h-6 text-amber-400" />;
    }
  };

  return (
    <div className="space-y-0 text-slate-100">

      {/* ========================================================= */}
      {/* SECTION 1: HERO SECTION                                   */}
      {/* ========================================================= */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden py-16 sm:py-24">
        {/* Background Hotel Exterior Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={HOTEL_IMAGES.hero}
            alt="Manazil Al Madinah Hotel Exterior"
            className="w-full h-full object-cover object-center scale-105 transform animate-pulse duration-[10000ms]"
            referrerPolicy="no-referrer"
          />
          {/* Rich Dark Purple Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-purple-950/80 to-slate-950/70" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-900/80 border border-amber-400/40 text-amber-300 text-xs font-semibold tracking-wider uppercase shadow-lg">
            <Compass className="w-4 h-4 text-amber-400" />
            <span>King Faisal Rd, Bada'ah · 300m to Al-Masjid an-Nabawi</span>
          </div>

          <div className="space-y-4">
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white max-w-4xl mx-auto leading-tight">
              Manazil Al Madinah Hotel
            </h1>
            <p className="text-lg sm:text-2xl font-light text-amber-200/90 font-serif italic">
              Your Peaceful Sanctuary in the Holy City of Madinah
            </p>
            <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Experience warm Saudi Arabian hospitality, plush air-conditioned rooms, and effortless walking proximity to the Holy Prophet's Mosque.
            </p>
          </div>

          {/* Hero Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={() => onOpenBooking()}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-bold text-sm uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/25 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              <span>Book Your Stay</span>
            </button>

            <button
              onClick={() => onNavigate('/contact')}
              className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-900/60 hover:bg-purple-800/80 border border-purple-500/40 text-white font-semibold text-sm transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-5 h-5 text-amber-400" />
              <span>Contact Us</span>
            </button>
          </div>

          {/* Quick Search Availability Panel */}
          <div className="pt-8 max-w-4xl mx-auto">
            <div className="p-4 sm:p-6 rounded-2xl bg-purple-950/90 border border-purple-800/60 shadow-2xl backdrop-blur-lg grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-left text-xs">
              
              <div>
                <label className="block text-amber-300 font-semibold mb-1">Check-In</label>
                <input
                  type="date"
                  defaultValue={new Date().toISOString().split('T')[0]}
                  className="w-full bg-slate-900 border border-purple-700/60 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-amber-300 font-semibold mb-1">Check-Out</label>
                <input
                  type="date"
                  defaultValue={new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0]}
                  className="w-full bg-slate-900 border border-purple-700/60 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400"
                />
              </div>

              <div>
                <label className="block text-amber-300 font-semibold mb-1">Room Preference</label>
                <select className="w-full bg-slate-900 border border-purple-700/60 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-400">
                  <option value="quad">Executive Quad Room</option>
                  <option value="triple">Deluxe Triple Room</option>
                  <option value="double">Superior Double Room</option>
                  <option value="suite">Royal Family Suite</option>
                </select>
              </div>

              <div className="flex items-end">
                <button
                  onClick={() => onOpenBooking()}
                  className="w-full py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Search Stay</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 2: ABOUT THE HOTEL                                */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-950 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            
            {/* Image Column */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-800 to-amber-500 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000" />
              <div className="relative rounded-2xl overflow-hidden border border-purple-800/60 shadow-2xl">
                <img
                  src={HOTEL_IMAGES.lobby}
                  alt="Manazil Al Madinah Grand Reception Lobby"
                  className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-slate-950/90 border border-purple-700/50 backdrop-blur-md flex items-center justify-between">
                  <div>
                    <span className="text-amber-300 font-serif font-bold text-base block">Welcoming Lobby & Concierge</span>
                    <span className="text-xs text-slate-300">24 Hours Multilingual Service</span>
                  </div>
                  <span className="px-3 py-1 bg-purple-900 text-amber-300 rounded text-xs font-semibold">Madinah</span>
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 text-xs font-bold text-amber-400 uppercase tracking-widest">
                <Shield className="w-4 h-4" />
                <span>About Manazil Al Madinah</span>
              </div>

              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Refined Pilgrim Hospitality & Exceptional Comfort
              </h2>

              <p className="text-slate-300 text-sm leading-relaxed">
                Manazil Al Madinah Hotel offers an exceptional hospitality experience in the heart of Madinah. Strategically located on King Faisal Road in Bada'ah, our hotel is designed to be a serene refuge for Umrah and Hajj pilgrims, business travelers, and families alike.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs pt-2">
                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>300m to Prophet's Mosque</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Short flat walk to Northern Courtyard.</p>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Spacious Quad & Family Rooms</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Multiple bed options tailored for groups.</p>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>24/7 Multilingual Desk</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Arabic, English, Urdu & Malay speaking staff.</p>
                </div>

                <div className="p-3 rounded-xl bg-purple-950/60 border border-purple-800/40 space-y-1">
                  <div className="font-bold text-amber-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                    <span>Modern Air Conditioning</span>
                  </div>
                  <p className="text-slate-400 text-[11px]">Individual climate control in every room.</p>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={() => onNavigate('/about')}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-600/50 text-amber-300 font-semibold text-xs transition-colors"
                >
                  <span>Read Full Hotel Story</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 3: ROOMS & ACCOMMODATION                         */}
      {/* ========================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/40 to-slate-950 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="space-y-3">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Accommodations
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
                Rooms & Suite Selections
              </h2>
              <p className="text-sm text-slate-300 max-w-xl">
                Choose from our well-appointed rooms equipped with plush bedding, climate control, and free high-speed Wi-Fi.
              </p>
            </div>

            <button
              onClick={() => onNavigate('/rooms')}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 font-semibold text-xs transition-colors whitespace-nowrap self-start md:self-auto"
            >
              <span>View All Rooms & Pricing</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Rooms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ROOMS_DATA.map((room) => {
              const price = Math.round(room.priceSAR * rate);
              return (
                <div
                  key={room.id}
                  className="group rounded-2xl bg-slate-900/80 border border-purple-800/50 overflow-hidden hover:border-amber-400/60 transition-all duration-300 flex flex-col justify-between shadow-lg"
                >
                  <div>
                    {/* Room Image */}
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={room.image}
                        alt={room.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-slate-950/80 text-amber-300 text-[11px] font-bold border border-amber-400/30">
                        {currencySymbol} {price} / night
                      </div>
                    </div>

                    {/* Room Details */}
                    <div className="p-5 space-y-3">
                      <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                        {room.name}
                      </h3>
                      <p className="text-xs text-slate-400 line-clamp-2">
                        {room.tagline}
                      </p>

                      <div className="flex items-center gap-3 text-[11px] text-purple-300 border-t border-purple-900/50 pt-2">
                        <span className="flex items-center gap-1">
                          <Users className="w-3.5 h-3.5 text-amber-400" />
                          {room.capacity}
                        </span>
                        <span>·</span>
                        <span className="flex items-center gap-1">
                          <Bed className="w-3.5 h-3.5 text-amber-400" />
                          {room.bedType}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Card Footer Actions */}
                  <div className="p-5 pt-0">
                    <button
                      onClick={() => onOpenBooking(room.id)}
                      className="w-full py-2.5 rounded-xl bg-purple-900/60 hover:bg-amber-500 hover:text-slate-950 text-slate-200 font-bold text-xs transition-all border border-purple-700/50 text-center"
                    >
                      Book Room
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 4: HOTEL SERVICES & FACILITIES                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-950 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="text-center space-y-3 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Guest Amenities
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white">
              Hotel Services & Facilities
            </h2>
            <p className="text-sm text-slate-300">
              Every detail is curated to ensure your stay in Madinah is seamless, peaceful, and comfortable.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div
                key={fac.id}
                className="p-6 rounded-2xl bg-gradient-to-b from-purple-950/50 to-slate-900/80 border border-purple-800/40 hover:border-amber-400/50 transition-all duration-300 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="p-3 rounded-xl bg-purple-900/60 border border-purple-700/50 group-hover:bg-amber-500/20 group-hover:border-amber-400/40 transition-colors">
                    {getFacilityIcon(fac.iconName)}
                  </div>
                  {fac.badge && (
                    <span className="text-[10px] font-bold px-2.5 py-1 rounded bg-purple-900/80 text-amber-300 border border-purple-700/50">
                      {fac.badge}
                    </span>
                  )}
                </div>

                <h3 className="font-serif text-lg font-bold text-white group-hover:text-amber-300 transition-colors">
                  {fac.title}
                </h3>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {fac.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 5: MADINAH / LOCATION SECTION                    */}
      {/* ========================================================= */}
      <section className="py-20 bg-gradient-to-b from-slate-950 via-purple-950/30 to-slate-950 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Location Description */}
            <div className="space-y-6">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
                Prime City Center
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl font-bold text-white leading-tight">
                Prime Position on King Faisal Road
              </h2>
              <p className="text-slate-300 text-sm leading-relaxed">
                Manazil Al Madinah Hotel is ideally situated in Bada'ah district, directly on King Faisal Road. Guests enjoy quick access to religious landmarks, date bazaars, local dining, and pharmacy outlets.
              </p>

              <div className="space-y-3 pt-2">
                <div className="p-3.5 rounded-xl bg-purple-950/80 border border-purple-800/50 flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-xs block">Al-Masjid an-Nabawi (Prophet's Mosque)</span>
                    <span className="text-slate-300 text-xs">{HOTEL_INFO.distanceToMosque}</span>
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-purple-950/80 border border-purple-800/50 flex items-start gap-3">
                  <Navigation className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <span className="text-white font-bold text-xs block">Prince Mohammad bin Abdulaziz Airport (MED)</span>
                    <span className="text-slate-300 text-xs">{HOTEL_INFO.distanceToAirport}</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={HOTEL_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-md"
                >
                  <Navigation className="w-4 h-4" />
                  <span>Get Directions on Google Maps</span>
                </a>
              </div>
            </div>

            {/* Map Preview Image Card */}
            <div className="relative rounded-2xl overflow-hidden border border-purple-800/60 shadow-2xl">
              <img
                src={HOTEL_IMAGES.location}
                alt="Madinah King Faisal Road Location Map View"
                className="w-full h-[380px] object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
              
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-slate-950/90 border border-amber-400/40 backdrop-blur-md space-y-1">
                <span className="text-amber-300 font-serif font-bold text-sm block">King Faisal Rd, Bada'ah, Madinah 42311</span>
                <p className="text-slate-300 text-xs">Direct entrance with accessible drop-off zone for taxis and private buses.</p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ========================================================= */}
      {/* SECTION 6: CONTACT / BOOKING CTA                          */}
      {/* ========================================================= */}
      <section className="py-20 bg-slate-950 border-t border-purple-900/40">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 border border-amber-400/40 shadow-2xl text-center space-y-6 relative overflow-hidden">
            
            <div className="absolute -right-12 -top-12 w-48 h-48 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Plan Your Blessed Journey
            </span>

            <h2 className="font-serif text-3xl sm:text-4xl font-extrabold text-white max-w-2xl mx-auto">
              Ready to Experience Manazil Al Madinah Hotel?
            </h2>

            <p className="text-sm sm:text-base text-slate-300 max-w-xl mx-auto">
              Call our reception team directly at <span className="font-bold text-amber-300">+966 14 820 7570</span> or submit your stay reservation online today.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
              <button
                onClick={() => onOpenBooking()}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-xl hover:shadow-amber-500/20"
              >
                Book Your Stay
              </button>

              <button
                onClick={() => onNavigate('/contact')}
                className="w-full sm:w-auto px-8 py-4 rounded-xl bg-purple-900/60 hover:bg-purple-800 border border-purple-500/40 text-white font-semibold text-xs transition-colors"
              >
                Contact Us
              </button>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
};
