import { Wifi, Car, Utensils, Wind, Coffee, ShieldCheck } from 'lucide-react';
import { Room, Amenity, Testimonial, NavItem } from './types';

// ==========================================
// REPLACE THESE IMAGE URLS WITH YOUR OWN
// ==========================================
export const IMAGES = {
  HERO_BG: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/ca454b04_z.jpg",
  ABOUT_SECTION: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/641415e8_z.jpg",
  ROOM_DELUXE: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/50efc4d9_z.jpg",
  ROOM_SUITE: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/a3928a9c_z.jpg",
  ROOM_FAMILY: "https://q-xx.bstatic.com/xdata/images/hotel/max500/147782017.jpg?k=e320e1ad9405877b0022861ab61d4768ef37b911dbf6fadfad26d9d5207be941&o=",
  GALLERY_1: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/e00e835c_z.jpg",
  GALLERY_2: "https://q-xx.bstatic.com/xdata/images/hotel/max500/582756496.jpg?k=4178fe4b6e5c79f22199ce3ac4899b877cad1c2a5d552b1b4f33a4c04016da99&o=&s=312x",
  GALLERY_3: "https://i.travelapi.com/lodging/37000000/36560000/36553800/36553729/d5694569_z.jpg",
  GALLERY_4: "https://q-xx.bstatic.com/xdata/images/hotel/max500/582751188.jpg?k=d9ee3ebd9a56e4d1f9a000f75cda74cfad1658be170218381ef8f7e4cb5af713&o=&s=312x",
  GALLERY_5: "https://q-xx.bstatic.com/xdata/images/hotel/max500/582747546.jpg?k=f598c68beaa45eead618dc9c49860070e982cce73f72f45141b72ad35ffc15d4&o=&s=312x",
  GALLERY_6: "https://q-xx.bstatic.com/xdata/images/hotel/max500/582747445.jpg?k=d3f9ed0d08c7e5075653895594cac759a0e42d87545261355033b97c70307004&o=&s=312x",
  LOGO: "https://q-xx.bstatic.com/xdata/images/hotel/max500/138337306.jpg?k=f430af9d7dd9b99ff8beb8f9f8819770a3ac5cd405deea4d847afaa2a399a386&o=&s=312x",
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