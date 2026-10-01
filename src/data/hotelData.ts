import { Room, Facility, FAQItem, Testimonial } from '../types';

import heroImg from '../assets/images/hero_manazil_hotel_1790835289067.jpg';
import suiteImg from '../assets/images/deluxe_suite_madinah_1790835303961.jpg';
import quadImg from '../assets/images/quad_room_madinah_1790835314750.jpg';
import lobbyImg from '../assets/images/hotel_reception_lobby_1790835326137.jpg';
import locationImg from '../assets/images/madinah_location_view_1790835338133.jpg';

import wifiImg from '../assets/images/wifi_facility_1790836184699.jpg';
import receptionImg from '../assets/images/reception_facility_1790836202004.jpg';
import housekeepingImg from '../assets/images/housekeeping_facility_1790836218429.jpg';
import acImg from '../assets/images/ac_facility_1790836231545.jpg';
import parkingImg from '../assets/images/parking_facility_1790836246770.jpg';
import conciergeImg from '../assets/images/concierge_facility_1790836264084.jpg';

export const HOTEL_INFO = {
  name: "Manazil Al Madinah Hotel",
  arabicName: "فندق منازل المدينة",
  tagline: "Your Peaceful Sanctuary in the Holy City of Madinah",
  address: "King Faisal Rd, Bada'ah, Madinah 42311, Saudi Arabia",
  phone: "+966 14 820 7570",
  whatsappPhone: "966148207570",
  email: "reservations@manazilalmadinah.com",
  googleMapsUrl: "https://maps.google.com/?q=King+Faisal+Rd,+Bada'ah,+Madinah+42311,+Saudi+Arabia",
  distanceToMosque: "300 meters (4 min walk to Al-Masjid an-Nabawi)",
  distanceToAirport: "22 km (20 min drive to Prince Mohammad bin Abdulaziz Airport - MED)",
  checkInTime: "16:00 (4:00 PM)",
  checkOutTime: "12:00 (12:00 PM)",
  currencyRates: {
    SAR: 1,
    USD: 0.2667,
    EUR: 0.2450
  }
};

export const HOTEL_IMAGES = {
  hero: heroImg,
  suite: suiteImg,
  quad: quadImg,
  lobby: lobbyImg,
  location: locationImg
};

export const ROOMS_DATA: Room[] = [
  {
    id: 'executive-quad',
    name: 'Executive Quad Room',
    category: 'quad',
    tagline: 'Ideal for families & pilgrim groups with four single plush beds',
    priceSAR: 380,
    sizeSqM: 32,
    capacity: '4 Guests',
    bedType: '4 Single Orthopedic Beds',
    image: quadImg,
    description: 'Designed specifically for families and Umrah groups, our Executive Quad Room features four single beds equipped with orthopedic mattresses, soft purple luxury accents, private bathroom with power shower, and quiet soundproofing for restful sleep.',
    amenities: ['Free High-Speed Wi-Fi', 'Individually Controlled AC', 'Flat-screen LED TV', 'In-Room Safe Box', 'Mini Refreshment Fridge', 'Electric Tea/Coffee Kettle', 'Prayer Mats & Qibla Direction', 'En-Suite Bathroom & Toiletries'],
    features: ['City View / Courtyard', 'Soundproof Windows', 'Daily Housekeeping', '24/7 Room Service']
  },
  {
    id: 'deluxe-triple',
    name: 'Deluxe Triple Room',
    category: 'triple',
    tagline: 'Comfortable & spacious three-bed accommodation with city views',
    priceSAR: 310,
    sizeSqM: 28,
    capacity: '3 Guests',
    bedType: '3 Single Comfort Beds',
    image: suiteImg,
    description: 'Bright and elegantly furnished, the Deluxe Triple Room offers three comfortable single beds, ambient warm lighting, executive workspace, and modern amenities to ensure maximum peace after prayers at the Prophet\'s Mosque.',
    amenities: ['Free High-Speed Wi-Fi', 'Individually Controlled AC', '43" Smart TV', 'In-Room Safe', 'Mini Refrigerator', 'Tea & Coffee Maker', 'Prayer Rugs', 'Luxury Plush Towels & Toiletries'],
    features: ['Spacious Layout', 'Quiet Corridor Location', 'Daily Linen Change', 'Express Room Service']
  },
  {
    id: 'superior-double',
    name: 'Superior Double / Twin Room',
    category: 'double',
    tagline: 'Sophisticated sanctuary featuring king or twin single bedding',
    priceSAR: 250,
    sizeSqM: 24,
    capacity: '2 Guests',
    bedType: '1 King Bed or 2 Single Beds',
    image: suiteImg,
    description: 'Our Superior Double/Twin Room blends Saudi hospitality with contemporary luxury. Features a plush King size bed or twin singles, dedicated reading lighting, sleek marble bathroom accents, and direct intercom connection to the front desk.',
    amenities: ['Free High-Speed Wi-Fi', 'Climate Control AC', 'Flat-screen TV with Satellite', 'Digital Safe Box', 'Mini Bar Fridge', 'Electric Kettle', 'Prayer Amenities', 'Complimentary Bottled Water'],
    features: ['Romantic & Quiet', 'Ergonomic Desk & Chair', 'Daily Housekeeping', 'Luggage Rack']
  },
  {
    id: 'royal-family-suite',
    name: 'Royal Family Suite',
    category: 'suite',
    tagline: 'Expansive master bedroom with adjoining living lounge & premium amenities',
    priceSAR: 580,
    sizeSqM: 52,
    capacity: '5 Guests',
    bedType: '1 King Bed + 3 Single Beds',
    image: suiteImg,
    description: 'The pinnacle of luxury at Manazil Al Madinah Hotel. Our Royal Family Suite offers a separate master bedroom, a stylish living room lounge, two modern bathrooms, and scenic elevated views towards the city center.',
    amenities: ['Free High-Speed Wi-Fi', 'Dual Zone Climate AC', '55" Ultra HD TV in Lounge', 'In-Room Safe Box', 'Refrigerator & Dining Nook', 'Espresso & Tea Bar', 'Deluxe Prayer Amenities', 'Bathrobes & Premium Toiletries'],
    features: ['Panoramic City View', 'Separate Living Room', 'Priority Front Desk Care', 'Free Valet Parking']
  }
];

export const FACILITIES_DATA: Facility[] = [
  {
    id: 'wifi',
    title: 'High-Speed Wi-Fi',
    description: 'Complimentary fiber-optic internet connection accessible throughout all guest rooms, corridors, and the grand lobby.',
    iconName: 'Wifi',
    badge: 'Free & Unlimited',
    image: wifiImg
  },
  {
    id: 'reception',
    title: '24/7 Front Desk & Reception',
    description: 'Round-the-clock multilingual reception staff to assist with check-in, keycards, local guidance, taxi bookings, and Umrah inquiries.',
    iconName: 'Clock',
    badge: 'Always Open',
    image: receptionImg
  },
  {
    id: 'housekeeping',
    title: 'Daily Housekeeping & Laundry',
    description: 'Rigorous daily room sanitation, fresh bed linen replacement, pristine towels, and fast express laundry services upon request.',
    iconName: 'Sparkles',
    badge: 'Daily Service',
    image: housekeepingImg
  },
  {
    id: 'ac-rooms',
    title: 'Comfortable AC Rooms',
    description: 'Individual digital climate control in every room, soundproof double-glazed windows, and premium orthopedic bedding.',
    iconName: 'Wind',
    badge: 'Climate Control',
    image: acImg
  },
  {
    id: 'parking',
    title: 'Valet & Secure Parking',
    description: 'Dedicated parking facilities and valet assistance for guests traveling with personal vehicles or private transport.',
    iconName: 'Car',
    badge: 'On-Site Facility',
    image: parkingImg
  },
  {
    id: 'concierge',
    title: 'Luggage Storage & Concierge',
    description: 'Secure luggage holding before check-in or after check-out, wheelchair accessibility, and prayer timetable guidance.',
    iconName: 'Briefcase',
    badge: 'Guest Care',
    image: conciergeImg
  }
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: '1',
    guestName: 'Tariq Al-Mansoor',
    origin: 'Dubai, UAE',
    stayDate: 'August 2026',
    comment: 'Exceptional stay! The location on King Faisal Road made walking to Al-Masjid an-Nabawi effortless for all five daily prayers. Staff were extremely polite and welcoming.',
    rating: 5,
    roomType: 'Royal Family Suite'
  },
  {
    id: '2',
    guestName: 'Farida Binte Mahmood',
    origin: 'London, UK',
    stayDate: 'July 2026',
    comment: 'Cleanliness was 10/10. The Executive Quad Room was very spacious for my family of four. High speed Wi-Fi helped us stay connected with relatives back home.',
    rating: 5,
    roomType: 'Executive Quad Room'
  },
  {
    id: '3',
    guestName: 'Muhammad Rizwan',
    origin: 'Lahore, Pakistan',
    stayDate: 'June 2026',
    comment: 'Great value for money in Madinah. The 24/7 reception desk helped us arrange late night airport transport without any hassle. Highly recommended for Umrah pilgrims.',
    rating: 5,
    roomType: 'Deluxe Triple Room'
  }
];

export const FAQ_DATA: FAQItem[] = [
  {
    question: "How close is Manazil Al Madinah Hotel to Al-Masjid an-Nabawi (Prophet's Mosque)?",
    answer: "The hotel is located on King Faisal Road in Bada'ah, approximately 300 meters from the Northern Courtyard of Al-Masjid an-Nabawi — a short, flat 4-minute walk.",
    category: "Location"
  },
  {
    question: "What are the standard Check-in and Check-out times?",
    answer: "Standard check-in starts at 16:00 (4:00 PM) and check-out is until 12:00 (12:00 PM). Early check-in or late check-out can be requested subject to availability.",
    category: "Policies"
  },
  {
    question: "Does the hotel provide Wi-Fi and air conditioning?",
    answer: "Yes, complimentary high-speed fiber Wi-Fi is provided in all guest rooms and public areas. All rooms feature individual digital air conditioning units.",
    category: "Amenities"
  },
  {
    question: "Is parking available at the hotel?",
    answer: "Yes, we offer parking facilities and valet assistance for our registered guests. Please inform us during reservation if you require parking space.",
    category: "Services"
  },
  {
    question: "How can I contact the hotel directly for reservations?",
    answer: "You can call our front desk directly at +966 14 820 7570 or send an inquiry via our online booking form or official email.",
    category: "Reservations"
  }
];
