import React, { useState } from 'react';
import { PagePath } from '../types';
import { HOTEL_INFO, FAQ_DATA } from '../data/hotelData';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle2, ChevronDown, Navigation, MessageSquare, AlertCircle } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (path: PagePath) => void;
  onOpenBooking: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate, onOpenBooking }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Inquiry',
    message: ''
  });

  const [isSent, setIsSent] = useState(false);
  const [error, setError] = useState('');
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formState.name.trim() || !formState.phone.trim() || !formState.message.trim()) {
      setError('Please fill in your name, contact phone number, and message.');
      return;
    }
    setError('');
    setIsSent(true);
  };

  return (
    <div className="space-y-16 pb-20 text-slate-100">
      
      {/* Header Banner */}
      <section className="relative py-20 bg-gradient-to-b from-purple-950 via-slate-900 to-slate-950 border-b border-purple-900/40 text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Get In Touch
          </span>
          <h1 className="font-serif text-4xl sm:text-5xl font-extrabold text-white">
            Contact Manazil Al Madinah Hotel
          </h1>
          <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Our front desk is at your service 24/7 to assist with room bookings, group reservations, and directions in Madinah.
          </p>
        </div>
      </section>

      {/* Main Grid: Direct Contact Cards + Interactive Form */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Column 1: Contact Details Cards */}
          <div className="space-y-4 lg:col-span-1">
            
            <div className="p-6 rounded-2xl bg-purple-950/60 border border-purple-800/50 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Phone Number</span>
                <a href={`tel:${HOTEL_INFO.phone}`} className="font-serif text-lg font-bold text-amber-300 hover:underline block mt-1">
                  {HOTEL_INFO.phone}
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Direct line to 24/7 Reception Desk</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/60 border border-purple-800/50 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Hotel Address</span>
                <p className="font-medium text-white text-sm mt-1 leading-snug">
                  {HOTEL_INFO.address}
                </p>
                <p className="text-[11px] text-amber-300/90 mt-1">
                  {HOTEL_INFO.distanceToMosque}
                </p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-purple-950/60 border border-purple-800/50 space-y-4">
              <div className="w-10 h-10 rounded-xl bg-purple-900 text-amber-400 flex items-center justify-center">
                <Mail className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider block">Email Address</span>
                <a href={`mailto:${HOTEL_INFO.email}`} className="font-medium text-amber-300 hover:underline text-sm block mt-1">
                  {HOTEL_INFO.email}
                </a>
                <p className="text-[11px] text-slate-400 mt-1">Inquiries answered within 2 hours</p>
              </div>
            </div>

          </div>

          {/* Column 2 & 3: Interactive Contact Form */}
          <div className="lg:col-span-2 p-8 rounded-3xl bg-slate-900/90 border border-purple-800/60 shadow-2xl space-y-6">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">Send Us a Direct Message</h2>
              <p className="text-xs text-slate-300 mt-1">Have a question regarding room availability, group bookings, or airport transfers?</p>
            </div>

            {isSent ? (
              <div className="p-8 rounded-2xl bg-purple-950/80 border border-emerald-500/40 text-center space-y-4 animate-fadeIn">
                <div className="w-14 h-14 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white">Message Sent Successfully!</h3>
                <p className="text-xs text-slate-300 max-w-md mx-auto">
                  Thank you, <span className="text-amber-300 font-semibold">{formState.name}</span>. Our guest relations manager will reply to your message shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSent(false);
                    setFormState({ name: '', email: '', phone: '', subject: 'General Inquiry', message: '' });
                  }}
                  className="px-6 py-2.5 rounded-xl bg-purple-900 hover:bg-purple-800 text-xs font-semibold text-white"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                {error && (
                  <div className="p-3 rounded-lg bg-red-900/40 border border-red-500/50 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Sultan Al-Ghamdi"
                      value={formState.name}
                      onChange={e => setFormState({ ...formState, name: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      placeholder="+966 50 000 0000"
                      value={formState.phone}
                      onChange={e => setFormState({ ...formState, phone: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="your.email@example.com"
                      value={formState.email}
                      onChange={e => setFormState({ ...formState, email: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Inquiry Subject</label>
                    <select
                      value={formState.subject}
                      onChange={e => setFormState({ ...formState, subject: e.target.value })}
                      className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400"
                    >
                      <option value="General Inquiry">General Inquiry</option>
                      <option value="Room Reservation">Room Reservation</option>
                      <option value="Group Booking (Umrah Tour)">Group Booking (Umrah Tour)</option>
                      <option value="Airport Shuttle & Transport">Airport Shuttle & Transport</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-300 mb-1">Your Message *</label>
                  <textarea
                    rows={4}
                    placeholder="Write your inquiry or stay requirements here..."
                    value={formState.message}
                    onChange={e => setFormState({ ...formState, message: e.target.value })}
                    className="w-full bg-slate-950 border border-purple-800/60 rounded-xl px-4 py-2.5 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message to Hotel</span>
                </button>
              </form>
            )}

          </div>

        </div>
      </section>

      {/* Map & Directions Banner */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="p-8 rounded-3xl bg-purple-950/40 border border-purple-800/50 space-y-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <h2 className="font-serif text-2xl font-bold text-white">Google Maps Location & Transit Guide</h2>
              <p className="text-xs text-slate-300 mt-1">King Faisal Rd, Bada'ah, Madinah 42311, Saudi Arabia</p>
            </div>
            <a
              href={HOTEL_INFO.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs uppercase tracking-wider flex items-center gap-2 whitespace-nowrap"
            >
              <Navigation className="w-4 h-4" />
              <span>Get Directions</span>
            </a>
          </div>

          <div className="h-64 w-full rounded-2xl bg-slate-950 border border-purple-800/60 overflow-hidden relative flex items-center justify-center">
            <div className="text-center space-y-3 p-6">
              <MapPin className="w-10 h-10 text-amber-400 mx-auto animate-bounce" />
              <h3 className="font-serif font-bold text-white text-lg">Manazil Al Madinah Hotel Pin</h3>
              <p className="text-xs text-slate-300 max-w-md">Located directly on King Faisal Road with dedicated passenger drop-off lane and walking promenade to Al-Masjid an-Nabawi.</p>
              <a
                href={HOTEL_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-xs font-semibold text-amber-300 underline"
              >
                Open Google Maps Application
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions Accordion */}
      <section className="max-w-4xl mx-auto px-4 space-y-8">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-amber-400 uppercase tracking-widest block">
            Got Questions?
          </span>
          <h2 className="font-serif text-3xl font-bold text-white">
            Frequently Asked Questions
          </h2>
        </div>

        <div className="space-y-3">
          {FAQ_DATA.map((faq, idx) => {
            const isOpen = openFaqIndex === idx;
            return (
              <div
                key={idx}
                className="rounded-2xl bg-slate-900/80 border border-purple-800/40 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                  className="w-full p-5 text-left font-serif font-bold text-sm text-white flex items-center justify-between gap-4 hover:text-amber-300"
                >
                  <span>{faq.question}</span>
                  <ChevronDown className={`w-5 h-5 text-amber-400 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 pt-0 text-xs text-slate-300 leading-relaxed border-t border-purple-900/30">
                    <p className="pt-3">{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
};
