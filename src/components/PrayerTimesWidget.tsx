import React, { useState, useEffect } from 'react';
import { Clock, MapPin, Compass } from 'lucide-react';
import { HOTEL_INFO } from '../data/hotelData';

interface PrayerTime {
  name: string;
  arabicName: string;
  time: string;
}

export const PrayerTimesWidget: React.FC = () => {
  // Estimated Madinah Prayer Times (Standard calculation)
  const prayerTimes: PrayerTime[] = [
    { name: 'Fajr', arabicName: 'الفجر', time: '04:52 AM' },
    { name: 'Sunrise', arabicName: 'الشروق', time: '06:10 AM' },
    { name: 'Dhuhr', arabicName: 'الظهر', time: '12:18 PM' },
    { name: 'Asr', arabicName: 'العصر', time: '03:42 PM' },
    { name: 'Maghrib', arabicName: 'المغرب', time: '06:24 PM' },
    { name: 'Isha', arabicName: 'العشاء', time: '07:54 PM' },
  ];

  const [currentTime, setCurrentTime] = useState<string>('');

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now.toLocaleTimeString('en-US', { hour12: true, hour: '2-digit', minute: '2-digit', second: '2-digit' }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-gradient-to-r from-purple-950 via-slate-900 to-purple-950 border-y border-purple-800/40 py-3 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
        
        {/* Left: Distance & Mosque Info */}
        <div className="flex items-center gap-3 text-purple-200">
          <div className="w-8 h-8 rounded-full bg-purple-900/60 border border-purple-500/30 flex items-center justify-center shrink-0">
            <MapPin className="w-4 h-4 text-amber-400" />
          </div>
          <div>
            <span className="font-semibold text-white">Al-Masjid an-Nabawi:</span>{' '}
            <span className="text-amber-300 font-medium">{HOTEL_INFO.distanceToMosque}</span>
          </div>
        </div>

        {/* Center: Prayer Times Banner */}
        <div className="hidden lg:flex items-center gap-4 overflow-x-auto py-1">
          <div className="flex items-center gap-1.5 text-purple-300 font-medium pr-2 border-r border-purple-800/50">
            <Compass className="w-3.5 h-3.5 text-amber-400" />
            <span>Madinah Prayer Schedule</span>
          </div>
          <div className="flex items-center gap-3">
            {prayerTimes.map((p) => (
              <div key={p.name} className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-purple-900/40 border border-purple-700/30 text-slate-200">
                <span className="text-amber-200/90 font-medium text-xs">{p.name}:</span>
                <span className="font-semibold text-white tabular-nums text-xs">{p.time}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Phone & Live Clock */}
        <div className="flex items-center gap-4 shrink-0">
          <a
            href={`tel:${HOTEL_INFO.phone}`}
            className="hidden sm:inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-md bg-amber-500/20 text-amber-300 border border-amber-500/40 hover:bg-amber-500/30 transition-colors"
          >
            <Clock className="w-3.5 h-3.5 text-amber-400" />
            <span>Direct Call: {HOTEL_INFO.phone}</span>
          </a>
          <div className="text-purple-300 font-mono text-xs tabular-nums bg-purple-900/30 px-2.5 py-1 rounded border border-purple-800/30">
            {currentTime || '08:00:00 PM'}
          </div>
        </div>

      </div>
    </div>
  );
};
