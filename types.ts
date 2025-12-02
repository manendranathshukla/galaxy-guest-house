import { LucideIcon } from 'lucide-react';

export interface Room {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  features: string[];
}

export interface Amenity {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface NavItem {
  label: string;
  href: string;
}