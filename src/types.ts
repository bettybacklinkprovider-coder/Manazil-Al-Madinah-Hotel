export type PagePath = '/' | '/about' | '/rooms' | '/contact';

export type Currency = 'SAR' | 'USD' | 'EUR';

export interface Room {
  id: string;
  name: string;
  category: 'quad' | 'triple' | 'double' | 'suite';
  tagline: string;
  priceSAR: number;
  sizeSqM: number;
  capacity: string;
  bedType: string;
  image: string;
  description: string;
  amenities: string[];
  features: string[];
}

export interface Facility {
  id: string;
  title: string;
  description: string;
  iconName: string;
  badge?: string;
  image?: string;
}

export interface FAQItem {
  question: string;
  answer: string;
  category: string;
}

export interface Testimonial {
  id: string;
  guestName: string;
  origin: string;
  stayDate: string;
  comment: string;
  rating: number;
  roomType: string;
}

export interface BookingDetails {
  roomType: string;
  checkIn: string;
  checkOut: string;
  guests: number;
  fullName: string;
  email: string;
  phone: string;
  specialRequests?: string;
}
