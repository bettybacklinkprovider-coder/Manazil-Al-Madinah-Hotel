import React, { useState } from 'react';
import { PagePath, Currency, Room } from '../types';
import { HOTEL_INFO, ROOMS_DATA, FACILITIES_DATA } from '../data/hotelData';
import { Users, Bed, Check, Wifi, Sparkles, Clock, Wind, Car, Briefcase, Eye, Calendar, X } from 'lucide-react';

interface RoomsPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenBooking: (roomId?: string) => void;
  activeCurrency: Currency;
}

export const RoomsPage: React.FC<RoomsPageProps> = ({
  onNavigate,
  onOpenBooking,
  activeCurrency
}) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'quad' | 'triple' | 'double' | 'suite'>('all');
  const [previewRoom, setPreviewRoom] = useState<Room | null>(null);

  const rate = HOTEL_INFO.currencyRates[activeCurrency];
  const currencySymbol = activeCurrency === 'SAR' ? 'SAR' : activeCurrency === 'USD' ? '$' : '€';

  const filteredRooms = activeFilter === 'all' 
    ? ROOMS_DATA 
    : ROOMS_DATA.filter(r => r.category === activeFilter);

  return (
    <div className="space-y-16 pb-20 text-slate-100">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 border-b border-purple-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Rooms & Services
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Guest Accommodations & Amenities
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our spacious rooms and suites designed for families, Umrah groups, and business travelers in Madinah.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center gap-2 overflow-x-auto py-2">
          {[
            { id: 'all', label: 'All Accommodations' },
            { id: 'quad', label: 'Quad Rooms (4 Beds)' },
            { id: 'triple', label: 'Triple Rooms (3 Beds)' },
            { id: 'double', label: 'Double / Twin Rooms' },
            { id: 'suite', label: 'Royal Suites' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveFilter(tab.id as any)}
              className={`px-4 py-2 text-xs font-semibold rounded-full transition-all whitespace-nowrap ${
                activeFilter === tab.id
                  ? 'bg-amber-500 text-slate-950 shadow-lg font-bold'
                  : 'bg-purple-950/60 text-slate-300 hover:text-white border border-purple-800/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Rooms Showcase Catalog */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredRooms.map((room) => {
            const price = Math.round(room.priceSAR * rate);
            return (
              <div
                key={room.id}
                className="p-6 rounded-2xl bg-slate-900/90 border border-purple-800/50 hover:border-amber-400/50 transition-all duration-300 flex flex-col md:flex-row gap-6 shadow-xl"
              >
                {/* Room Image */}
                <div className="md:w-1/2 relative rounded-xl overflow-hidden shrink-0 h-56 md:h-full min-h-[220px]">
                  <img
                    src={room.image}
                    alt={room.name}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded bg-slate-950/80 text-amber-300 text-xs font-bold border border-amber-400/30">
                    {room.sizeSqM} m² Space
                  </div>
                </div>

                {/* Content */}
                <div className="md:w-1/2 flex flex-col justify-between space-y-4">
                  <div>
                    <div className="flex items-center justify-between">
                      <h2 className="font-serif text-xl font-bold text-white">{room.name}</h2>
                    </div>

                    <p className="text-xs text-slate-300 mt-1.5 leading-relaxed line-clamp-3">
                      {room.description}
                    </p>

                    <div className="mt-3 space-y-1.5 text-xs text-purple-300">
                      <div className="flex items-center gap-2">
                        <Users className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Capacity: {room.capacity}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Bed className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                        <span>Bedding: {room.bedType}</span>
                      </div>
                    </div>

                    {/* Quick Specs */}
                    <div className="flex flex-wrap gap-1.5 pt-3">
                      {room.amenities.slice(0, 3).map((a, i) => (
                        <span key={i} className="text-[10px] px-2 py-0.5 rounded bg-purple-950 text-slate-300 border border-purple-800/40">
                          {a}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Pricing & CTA */}
                  <div className="pt-3 border-t border-purple-900/40 flex items-center justify-between gap-3">
                    <div>
                      <span className="text-[10px] text-slate-400 block">Starting From</span>
                      <span className="text-xl font-serif font-bold text-amber-300">
                        {currencySymbol} {price} <span className="text-xs font-normal text-slate-400">/ night</span>
                      </span>
                    </div>

                    <div className="flex gap-2">
                      <button
                        onClick={() => setPreviewRoom(room)}
                        className="p-2.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-slate-200 border border-purple-700/50"
                        title="View Full Amenities"
                      >
                        <Eye className="w-4 h-4 text-amber-300" />
                      </button>
                      <button
                        onClick={() => onOpenBooking(room.id)}
                        className="px-4 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider transition-colors"
                      >
                        Book Now
                      </button>
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Hotel Facilities Breakdown Section */}
      <section className="py-16 bg-purple-950/20 border-t border-purple-900/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="text-center space-y-2">
            <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
              Complete Hotel Services
            </span>
            <h2 className="font-serif text-3xl font-bold text-white">
              Facilities Included With Your Stay
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {FACILITIES_DATA.map((fac) => (
              <div key={fac.id} className="p-5 rounded-xl bg-slate-900/80 border border-purple-800/40 flex items-start gap-4">
                <div className="p-2.5 rounded-lg bg-purple-900/80 text-amber-400 shrink-0 mt-0.5">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h3 className="font-serif font-bold text-white text-sm">{fac.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{fac.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Room Detail Modal Preview */}
      {previewRoom && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-xl bg-slate-900 rounded-2xl border border-purple-500/40 shadow-2xl p-6 space-y-6 text-slate-100 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-purple-800/40 pb-3">
              <h3 className="font-serif text-xl font-bold text-white">{previewRoom.name} Details</h3>
              <button
                onClick={() => setPreviewRoom(null)}
                className="p-1.5 rounded-full text-slate-400 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <img
              src={previewRoom.image}
              alt={previewRoom.name}
              className="w-full h-52 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />

            <div className="space-y-3">
              <h4 className="font-semibold text-amber-300 text-xs uppercase tracking-wider">Full In-Room Amenities</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                {previewRoom.amenities.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2 p-2 rounded bg-purple-950/60 border border-purple-800/40 text-slate-200">
                    <Check className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-purple-800/40">
              <div>
                <span className="text-[10px] text-slate-400 block">Rate / Night</span>
                <span className="font-serif text-lg font-bold text-amber-300">
                  {currencySymbol} {Math.round(previewRoom.priceSAR * rate)} {activeCurrency}
                </span>
              </div>
              <button
                onClick={() => {
                  const id = previewRoom.id;
                  setPreviewRoom(null);
                  onOpenBooking(id);
                }}
                className="px-6 py-2.5 rounded-xl bg-amber-500 text-slate-950 font-bold text-xs uppercase"
              >
                Book This Room Now
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
};
