import { Wifi, Car, Utensils, Wind, Coffee, ShieldCheck } from 'lucide-react';
import { Room, Amenity, Testimonial, NavItem } from './types';

// ==========================================
// REPLACE THESE IMAGE URLS WITH YOUR OWN
// ==========================================
export const IMAGES = {
  HERO_BG: "https://picsum.photos/1920/1080?random=1",
  ABOUT_SECTION: "https://picsum.photos/800/600?random=2",
  ROOM_DELUXE: "https://picsum.photos/800/600?random=3",
  ROOM_SUITE: "https://picsum.photos/800/600?random=4",
  ROOM_FAMILY: "https://picsum.photos/800/600?random=5",
  GALLERY_1: "https://picsum.photos/600/800?random=6",
  GALLERY_2: "https://picsum.photos/800/600?random=7",
  GALLERY_3: "https://picsum.photos/600/600?random=8",
  GALLERY_4: "https://picsum.photos/800/800?random=9",
  GALLERY_5: "https://picsum.photos/600/900?random=10",
  GALLERY_6: "https://picsum.photos/800/600?random=11",
};

export const NAV_ITEMS: NavItem[] = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Amenities', href: '#amenities' },
  { label: 'Rooms', href: '#rooms' },
  { label: 'Gallery', href: '#gallery' },
  { label: 'Contact', href: '#contact' },
];

export const AMENITIES: Amenity[] = [
  { icon: Wifi, title: 'Free High-Speed WiFi', description: 'Stay connected with our complimentary gigabit internet.' },
  { icon: Car, title: 'Secure Parking', description: '24/7 monitored private parking for all guests.' },
  { icon: Utensils, title: 'Gourmet Restaurant', description: 'Experience fine dining with local and international cuisines.' },
  { icon: Wind, title: 'Climate Control', description: 'Individually controlled air conditioning in every room.' },
  { icon: Coffee, title: 'Breakfast Included', description: 'Start your day with our signature continental breakfast.' },
  { icon: ShieldCheck, title: '24/7 Security', description: 'Your safety is our priority with round-the-clock surveillance.' },
];

export const ROOMS: Room[] = [
  {
    id: 1,
    name: 'Deluxe Garden View',
    price: '$120/night',
    description: 'A serene escape overlooking our lush gardens, perfect for couples.',
    image: IMAGES.ROOM_DELUXE,
    features: ['King Size Bed', 'Balcony', 'Smart TV', 'Mini Bar']
  },
  {
    id: 2,
    name: 'Executive Suite',
    price: '$200/night',
    description: 'Spacious luxury with a separate living area and premium amenities.',
    image: IMAGES.ROOM_SUITE,
    features: ['Ocean View', 'Jacuzzi', 'Work Desk', 'Lounge Access']
  },
  {
    id: 3,
    name: 'Family Royal',
    price: '$280/night',
    description: 'Designed for families, offering two connecting bedrooms and ample space.',
    image: IMAGES.ROOM_FAMILY,
    features: ['2 Queen Beds', 'Kitchenette', 'Gaming Console', 'Dining Area']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "Travel Blogger",
    text: "The Galaxy Guest House is a hidden gem. The attention to detail is unmatched, and the restaurant serves the best local dishes I've ever tasted.",
    rating: 5
  },
  {
    id: 2,
    name: "Michael Chen",
    role: "Business Traveler",
    text: "Excellent wifi and a quiet environment. Perfect for getting work done and relaxing afterwards. The staff went above and beyond.",
    rating: 5
  },
  {
    id: 3,
    name: "Emma & David",
    role: "Honeymooners",
    text: "Magical experience. The suite was breathtaking and the service made us feel like royalty. We will definitely be back for our anniversary.",
    rating: 4
  }
];

export const GALLERY_IMAGES = [
  IMAGES.GALLERY_1,
  IMAGES.GALLERY_2,
  IMAGES.GALLERY_3,
  IMAGES.GALLERY_4,
  IMAGES.GALLERY_5,
  IMAGES.GALLERY_6,
];