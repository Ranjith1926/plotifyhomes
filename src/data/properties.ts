export interface Property {
  id: string;
  title: string;
  price: number;
  priceFormatted: string;
  location: string;
  city: string;
  state: string;
  type: 'plot' | 'villa' | 'apartment' | 'farmhouse' | 'commercial';
  typeLabel: string;
  area: number;
  areaUnit: string;
  bedrooms?: number;
  bathrooms?: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  verified: boolean;
  createdAt: string;
  coordinates: {
    lat: number;
    lng: number;
  };
}

export const properties: Property[] = [
  {
    id: '1',
    title: 'Premium Residential Plot in Whitefield',
    price: 8500000,
    priceFormatted: '₹85 Lakhs',
    location: 'Whitefield Main Road',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'plot',
    typeLabel: 'Residential Plot',
    area: 2400,
    areaUnit: 'sq.ft',
    description: 'A prime residential plot located in the heart of Whitefield, Bangalore. This east-facing plot offers excellent connectivity to IT parks, schools, hospitals, and shopping centers. BBMP approved with clear title and all documents ready for immediate registration.',
    features: ['East Facing', 'BBMP Approved', 'Clear Title', 'Corner Plot', 'Near Metro Station', 'Gated Community'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    ],
    featured: true,
    verified: true,
    createdAt: '2024-01-15',
    coordinates: { lat: 12.9698, lng: 77.7500 },
  },
  {
    id: '2',
    title: 'Luxury Villa with Private Garden',
    price: 25000000,
    priceFormatted: '₹2.5 Cr',
    location: 'Sarjapur Road',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'villa',
    typeLabel: 'Villa',
    area: 4500,
    areaUnit: 'sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    description: 'An exquisite 4BHK luxury villa featuring modern architecture, premium finishes, and a beautiful private garden. The villa includes a home theater, modular kitchen, servant quarters, and a covered car parking for 3 vehicles.',
    features: ['Private Garden', 'Home Theater', 'Modular Kitchen', 'Swimming Pool', 'Gym', '24/7 Security'],
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop',
    ],
    featured: true,
    verified: true,
    createdAt: '2024-01-10',
    coordinates: { lat: 12.8666, lng: 77.7839 },
  },
  {
    id: '3',
    title: 'Modern 3BHK Apartment in Prime Location',
    price: 12000000,
    priceFormatted: '₹1.2 Cr',
    location: 'Koramangala 5th Block',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'apartment',
    typeLabel: 'Apartment',
    area: 1850,
    areaUnit: 'sq.ft',
    bedrooms: 3,
    bathrooms: 3,
    description: 'A stunning 3BHK apartment in one of Bangalore\'s most sought-after localities. Features include Italian marble flooring, branded fittings, and panoramic city views from the 15th floor.',
    features: ['City View', 'Italian Marble', 'Branded Fittings', 'Club House', 'Children Play Area', 'Power Backup'],
    images: [
      'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    ],
    featured: true,
    verified: true,
    createdAt: '2024-01-08',
    coordinates: { lat: 12.9352, lng: 77.6245 },
  },
  {
    id: '4',
    title: 'Scenic Farmhouse with Organic Farm',
    price: 45000000,
    priceFormatted: '₹4.5 Cr',
    location: 'Devanahalli',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'farmhouse',
    typeLabel: 'Farmhouse',
    area: 43560,
    areaUnit: 'sq.ft',
    bedrooms: 5,
    bathrooms: 6,
    description: 'A serene 1-acre farmhouse property featuring a fully functional organic farm, fish pond, and a beautifully designed 5BHK farmhouse. Perfect weekend getaway just 45 minutes from the city center.',
    features: ['Organic Farm', 'Fish Pond', 'Fruit Orchard', 'Guest House', 'Outdoor BBQ', 'Bore Well'],
    images: [
      'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1518780664697-55e3ad937233?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1416331108676-a22ccb276e35?w=800&h=600&fit=crop',
    ],
    featured: true,
    verified: true,
    createdAt: '2024-01-05',
    coordinates: { lat: 13.2478, lng: 77.7124 },
  },
  {
    id: '5',
    title: 'Commercial Space in IT Corridor',
    price: 35000000,
    priceFormatted: '₹3.5 Cr',
    location: 'Electronic City Phase 1',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'commercial',
    typeLabel: 'Commercial',
    area: 5000,
    areaUnit: 'sq.ft',
    description: 'A prime commercial property in Electronic City, ideal for IT companies or corporate offices. Features modern infrastructure, ample parking, and excellent connectivity to the metro.',
    features: ['IT Park', 'Metro Connectivity', 'Ample Parking', 'Cafeteria', 'Conference Rooms', 'High-Speed Internet'],
    images: [
      'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=800&h=600&fit=crop',
    ],
    featured: false,
    verified: true,
    createdAt: '2024-01-03',
    coordinates: { lat: 12.8456, lng: 77.6603 },
  },
  {
    id: '6',
    title: 'Budget-Friendly Plot in Growing Area',
    price: 3500000,
    priceFormatted: '₹35 Lakhs',
    location: 'Yelahanka New Town',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'plot',
    typeLabel: 'Residential Plot',
    area: 1200,
    areaUnit: 'sq.ft',
    description: 'An affordable residential plot in the rapidly developing Yelahanka area. Perfect for first-time buyers looking to build their dream home. All basic amenities available nearby.',
    features: ['North Facing', 'BMRDA Approved', 'Near School', 'Near Hospital', 'Water Supply', 'Electricity'],
    images: [
      'https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1501854140801-50d01698950b?w=800&h=600&fit=crop',
    ],
    featured: false,
    verified: true,
    createdAt: '2024-01-01',
    coordinates: { lat: 13.1007, lng: 77.5963 },
  },
  {
    id: '7',
    title: 'Spacious 2BHK Near Tech Park',
    price: 7500000,
    priceFormatted: '₹75 Lakhs',
    location: 'Marathahalli',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'apartment',
    typeLabel: 'Apartment',
    area: 1200,
    areaUnit: 'sq.ft',
    bedrooms: 2,
    bathrooms: 2,
    description: 'A well-designed 2BHK apartment perfect for working professionals. Located just 5 minutes from major IT parks with excellent public transport connectivity.',
    features: ['Near IT Park', 'Gym', 'Swimming Pool', 'Power Backup', 'Covered Parking', 'Intercom'],
    images: [
      'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=600&fit=crop',
    ],
    featured: false,
    verified: true,
    createdAt: '2023-12-28',
    coordinates: { lat: 12.9591, lng: 77.6974 },
  },
  {
    id: '8',
    title: 'Exclusive Penthouse with Terrace',
    price: 55000000,
    priceFormatted: '₹5.5 Cr',
    location: 'Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    type: 'apartment',
    typeLabel: 'Penthouse',
    area: 4200,
    areaUnit: 'sq.ft',
    bedrooms: 4,
    bathrooms: 5,
    description: 'An ultra-luxury penthouse in Indiranagar with a massive private terrace, jacuzzi, and stunning 360-degree city views. Features include smart home automation and imported fixtures.',
    features: ['Private Terrace', 'Jacuzzi', 'Smart Home', 'City Views', 'Wine Cellar', 'Private Elevator'],
    images: [
      'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&h=600&fit=crop',
      'https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800&h=600&fit=crop',
    ],
    featured: true,
    verified: true,
    createdAt: '2023-12-25',
    coordinates: { lat: 12.9784, lng: 77.6408 },
  },
];

export const testimonials = [
  {
    id: '1',
    name: 'Rajesh Sharma',
    role: 'IT Professional',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    content: 'PlotifyHomes made my property buying journey incredibly smooth. The team was professional, transparent, and helped me find the perfect plot within my budget. Highly recommended!',
    rating: 5,
  },
  {
    id: '2',
    name: 'Priya Patel',
    role: 'Business Owner',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop&crop=face',
    content: 'I was skeptical about buying property online, but PlotifyHomes exceeded my expectations. Every listing was verified, and the documentation process was hassle-free.',
    rating: 5,
  },
  {
    id: '3',
    name: 'Amit Kumar',
    role: 'Doctor',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    content: 'The team at PlotifyHomes understood exactly what I was looking for. They showed me properties that matched my requirements perfectly. Excellent service!',
    rating: 5,
  },
];

export const stats = [
  { value: '10+', label: 'Years of Experience' },
  { value: '5000+', label: 'Properties Listed' },
  { value: '3500+', label: 'Happy Clients' },
  { value: '50+', label: 'Cities Covered' },
];

export const features = [
  {
    title: 'Verified Listings',
    description: 'Every property is personally verified by our team to ensure authenticity and accuracy.',
    icon: 'shield',
  },
  {
    title: 'Transparent Pricing',
    description: 'No hidden charges. What you see is what you pay. Complete transparency in all dealings.',
    icon: 'tag',
  },
  {
    title: 'Legal Assistance',
    description: 'Our legal team helps you with documentation, title verification, and registration process.',
    icon: 'file',
  },
  {
    title: 'Expert Guidance',
    description: 'Our experienced property consultants guide you through every step of your property journey.',
    icon: 'users',
  },
];
