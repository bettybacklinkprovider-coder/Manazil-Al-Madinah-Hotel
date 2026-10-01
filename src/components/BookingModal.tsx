import React, { useState, useEffect } from 'react';
import { X, Calendar, Users, Phone, Mail, CheckCircle2, Bed, Sparkles, AlertCircle } from 'lucide-react';
import { Currency, BookingDetails } from '../types';
import { HOTEL_INFO, ROOMS_DATA } from '../data/hotelData';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedRoomId?: string;
  activeCurrency: Currency;
}

export const BookingModal: React.FC<BookingModalProps> = ({
  isOpen,
  onClose,
  selectedRoomId,
  activeCurrency
}) => {
  const [formData, setFormData] = useState<BookingDetails>({
    roomType: selectedRoomId || 'executive-quad',
    checkIn: new Date().toISOString().split('T')[0],
    checkOut: new Date(Date.now() + 86400000 * 3).toISOString().split('T')[0],
    guests: 2,
    fullName: '',
    email: '',
    phone: '',
    specialRequests: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [bookingRef, setBookingRef] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    if (selectedRoomId) {
      setFormData(prev => ({ ...prev, roomType: selectedRoomId }));
    }
  }, [selectedRoomId]);

  if (!isOpen) return null;

  const currentRoom = ROOMS_DATA.find(r => r.id === formData.roomType) || ROOMS_DATA[0];

  // Calculate pricing based on nights & currency
  const checkInDate = new Date(formData.checkIn);
  const checkOutDate = new Date(formData.checkOut);
  const diffTime = Math.max(1, Math.ceil((checkOutDate.getTime() - checkInDate.getTime()) / (1000 * 60 * 60 * 24)));
  
  const rate = HOTEL_INFO.currencyRates[activeCurrency];
  const pricePerNight = Math.round(currentRoom.priceSAR * rate);
  const totalPrice = pricePerNight * diffTime;

  const currencySymbol = activeCurrency === 'SAR' ? 'SAR' : activeCurrency === 'USD' ? '$' : '€';

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName.trim() || !formData.phone.trim()) {
      setErrorMsg('Please enter your full name and contact phone number.');
      return;
    }
    setErrorMsg('');
    const randomRef = 'MMH-' + Math.floor(100000 + Math.random() * 900000);
    setBookingRef(randomRef);
    setIsSubmitted(true);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setBookingRef('');
    setErrorMsg('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 rounded-2xl border border-purple-500/30 shadow-2xl overflow-hidden text-slate-100 max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 bg-purple-900/40 border-b border-purple-800/40 shrink-0">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
              <Bed className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-serif text-lg font-bold text-white">Book Your Stay</h3>
              <p className="text-xs text-purple-300">Manazil Al Madinah Hotel · King Faisal Rd</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full text-slate-400 hover:text-white hover:bg-purple-900/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-5">
              <div className="w-16 h-16 bg-emerald-500/20 border-2 border-emerald-500 rounded-full flex items-center justify-center mx-auto text-emerald-400 animate-bounce">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <div>
                <h4 className="font-serif text-2xl font-bold text-white">Reservation Request Received!</h4>
                <p className="text-sm text-slate-300 max-w-md mx-auto mt-2">
                  Thank you, <span className="font-semibold text-amber-300">{formData.fullName}</span>. Our reception team will review your booking details and confirm your reservation shortly.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-purple-900/40 border border-purple-700/50 max-w-md mx-auto text-left space-y-2 text-xs text-slate-200">
                <div className="flex justify-between border-b border-purple-800/40 pb-2">
                  <span className="text-slate-400">Booking Ref:</span>
                  <span className="font-mono font-bold text-amber-400">{bookingRef}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Selected Room:</span>
                  <span className="font-semibold text-white">{currentRoom.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-400">Check-In / Out:</span>
                  <span>{formData.checkIn} to {formData.checkOut} ({diffTime} {diffTime === 1 ? 'Night' : 'Nights'})</span>
                </div>
                <div className="flex justify-between border-t border-purple-800/40 pt-2 font-bold text-sm text-amber-300">
                  <span>Estimated Total:</span>
                  <span>{currencySymbol} {totalPrice.toLocaleString()} {activeCurrency}</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                <a
                  href={`https://wa.me/${HOTEL_INFO.whatsappPhone}?text=Hello%20Manazil%20Al%20Madinah%20Hotel,%20I%20have%20a%20booking%20inquiry%20Ref:%20${bookingRef}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-medium text-xs flex items-center justify-center gap-2 transition-colors"
                >
                  <Phone className="w-4 h-4" />
                  <span>Confirm via WhatsApp</span>
                </a>
                <button
                  onClick={handleReset}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-purple-900/60 hover:bg-purple-800 text-slate-200 font-medium text-xs transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              
              {errorMsg && (
                <div className="p-3 rounded-lg bg-red-900/30 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  <span>{errorMsg}</span>
                </div>
              )}

              {/* Room Selection */}
              <div>
                <label className="block text-xs font-semibold text-amber-300 uppercase tracking-wider mb-2">
                  Select Room Accommodation
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {ROOMS_DATA.map(r => {
                    const price = Math.round(r.priceSAR * rate);
                    const isSelected = r.id === formData.roomType;
                    return (
                      <button
                        key={r.id}
                        type="button"
                        onClick={() => setFormData({ ...formData, roomType: r.id })}
                        className={`p-3 rounded-xl border text-left transition-all flex flex-col justify-between ${
                          isSelected
                            ? 'bg-purple-900/70 border-amber-400 text-white shadow-lg'
                            : 'bg-slate-900/60 border-purple-900/60 text-slate-300 hover:border-purple-700'
                        }`}
                      >
                        <div>
                          <div className="font-semibold text-sm">{r.name}</div>
                          <div className="text-[11px] text-slate-400 line-clamp-1">{r.capacity} · {r.bedType}</div>
                        </div>
                        <div className="mt-2 text-xs font-bold text-amber-300">
                          {currencySymbol} {price} <span className="text-[10px] text-slate-400 font-normal">/ night</span>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Dates & Guests */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Check-In Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkIn}
                      onChange={e => setFormData({ ...formData, checkIn: e.target.value })}
                      className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Check-Out Date</label>
                  <div className="relative">
                    <input
                      type="date"
                      value={formData.checkOut}
                      onChange={e => setFormData({ ...formData, checkOut: e.target.value })}
                      className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Guests Count</label>
                  <select
                    value={formData.guests}
                    onChange={e => setFormData({ ...formData, guests: Number(e.target.value) })}
                    className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  >
                    <option value={1}>1 Guest</option>
                    <option value={2}>2 Guests</option>
                    <option value={3}>3 Guests</option>
                    <option value={4}>4 Guests</option>
                    <option value={5}>5+ Guests (Family)</option>
                  </select>
                </div>
              </div>

              {/* Guest Details */}
              <div className="space-y-3 pt-2 border-t border-purple-900/40">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Full Guest Name *</label>
                    <input
                      type="text"
                      placeholder="e.g. Abdullah Rahman"
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-slate-300 mb-1 font-medium">Phone Number (with Country Code) *</label>
                    <input
                      type="tel"
                      placeholder="+966 50 000 0000"
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Email Address (Optional)</label>
                  <input
                    type="email"
                    placeholder="guest@example.com"
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400"
                  />
                </div>

                <div>
                  <label className="block text-xs text-slate-300 mb-1 font-medium">Special Requests / Arriving Time</label>
                  <textarea
                    rows={2}
                    placeholder="e.g. Quiet room away from elevator, ground floor preference, early check-in request..."
                    value={formData.specialRequests}
                    onChange={e => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full bg-slate-900 border border-purple-800/60 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-400 resize-none"
                  />
                </div>
              </div>

              {/* Price Summary Bar & Submit */}
              <div className="p-4 rounded-xl bg-purple-950/80 border border-amber-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>
                  <div className="text-[11px] text-purple-300">Total Stay ({diffTime} {diffTime === 1 ? 'Night' : 'Nights'})</div>
                  <div className="text-xl font-serif font-bold text-amber-300">
                    {currencySymbol} {totalPrice.toLocaleString()} <span className="text-xs font-normal text-slate-400">{activeCurrency}</span>
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto px-6 py-3 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-slate-950 font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-amber-500/20 whitespace-nowrap"
                >
                  Confirm Reservation Request
                </button>
              </div>

            </form>
          )}
        </div>

      </div>
    </div>
  );
};
