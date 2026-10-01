import React, { useState, useEffect } from 'react';
import { PagePath, Currency } from './types';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { PrayerTimesWidget } from './components/PrayerTimesWidget';
import { BookingModal } from './components/BookingModal';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RoomsPage } from './pages/RoomsPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PagePath>(() => {
    const path = window.location.pathname as PagePath;
    if (['/', '/about', '/rooms', '/contact'].includes(path)) {
      return path;
    }
    return '/';
  });

  const [activeCurrency, setActiveCurrency] = useState<Currency>('SAR');
  const [isBookingOpen, setIsBookingOpen] = useState<boolean>(false);
  const [selectedRoomId, setSelectedRoomId] = useState<string | undefined>(undefined);

  // Sync with browser history and popstate
  useEffect(() => {
    const handlePopState = () => {
      const path = window.location.pathname as PagePath;
      if (['/', '/about', '/rooms', '/contact'].includes(path)) {
        setCurrentPage(path);
      } else {
        setCurrentPage('/');
      }
    };

    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const handleNavigate = (path: PagePath) => {
    setCurrentPage(path);
    if (window.location.pathname !== path) {
      window.history.pushState({}, '', path);
    }
  };

  const handleOpenBooking = (roomId?: string) => {
    setSelectedRoomId(roomId);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedRoomId(undefined);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col justify-between font-sans selection:bg-purple-900 selection:text-purple-100">
      
      {/* Top Section */}
      <div>
        <PrayerTimesWidget />
        <Navbar
          currentPage={currentPage}
          onNavigate={handleNavigate}
          onOpenBooking={() => handleOpenBooking()}
          activeCurrency={activeCurrency}
          onCurrencyChange={setActiveCurrency}
        />

        {/* Dynamic Route View */}
        <main>
          {currentPage === '/' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              activeCurrency={activeCurrency}
            />
          )}

          {currentPage === '/about' && (
            <AboutPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}

          {currentPage === '/rooms' && (
            <RoomsPage
              onNavigate={handleNavigate}
              onOpenBooking={handleOpenBooking}
              activeCurrency={activeCurrency}
            />
          )}

          {currentPage === '/contact' && (
            <ContactPage
              onNavigate={handleNavigate}
              onOpenBooking={() => handleOpenBooking()}
            />
          )}
        </main>
      </div>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenBooking={() => handleOpenBooking()}
      />

      {/* Booking Engine Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        selectedRoomId={selectedRoomId}
        activeCurrency={activeCurrency}
      />

    </div>
  );
}
