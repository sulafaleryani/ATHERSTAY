export const CATEGORIES = ['All', 'Apartment', 'Studio', 'Villa', 'Modern', 'Luxury', 'Cabin'];

export const MOCK_LISTINGS = [
  {
    id: '1',
    title: 'The Obsidian Pavilion',
    price: 450,
    location: 'Kyoto, Japan',
    category: 'Luxury',
    images: [
      'https://images.unsplash.com/photo-1508333706533-1ab43ecb1606?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Zen Design', 'Geothermal Pool', 'AI-Optimized Climate', 'Hyper-Local Guide'],
    shortDescription: 'An architectural masterpiece blending feudal Japanese design with predictive smart-home automation.',
    isAiRecommended: true,
    amenities: ['Wifi', 'Pool', 'Air Conditioning', 'EV Charger'],
    rating: 4.98
  },
  {
    id: '2',
    title: 'Luminary Mono Studio',
    price: 180,
    location: 'Berlin, Germany',
    category: 'Studio',
    images: [
      'https://images.unsplash.com/photo-1536376072261-38c75010e6c9?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1554995207-c18c203602cb?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Minimalist', 'Creator Studio', 'Soundproofed', 'Urban Core'],
    shortDescription: 'High-ceiling minimalist studio optimized for digital creators and deep work protocols.',
    isAiRecommended: true,
    amenities: ['Wifi', 'Air Conditioning', 'Workspace'],
    rating: 4.89
  },
  {
    id: '3',
    title: 'Elysian Brutalist Villa',
    price: 620,
    location: 'Santorini, Greece',
    category: 'Villa',
    images: [
      'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=1200&q=80',
      'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80'
    ],
    tags: ['Infinity Pool', 'Raw Concrete', 'Panoramic Views', 'Solar Powered'],
    shortDescription: 'Monolithic concrete structures framing the Aegean Sea. Powered entirely by micro-solar grids.',
    isAiRecommended: false,
    amenities: ['Wifi', 'Pool', 'Air Conditioning', 'Kitchen'],
    rating: 4.92
  },
  {
    id: '4',
    title: 'Aura Biophilic Apartment',
    price: 210,
    location: 'Singapore',
    category: 'Apartment',
    images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Living Walls', 'Air Purification', 'Circadian Lighting'],
    shortDescription: 'Experience indoor-outdoor harmony with automated hydroponic walls and wellness tracking.',
    isAiRecommended: false,
    amenities: ['Wifi', 'Air Conditioning', 'Gym'],
    rating: 4.76
  },
  {
    id: '5',
    title: 'Nordic Steading Cabin',
    price: 310,
    location: 'Lofoten, Norway',
    category: 'Cabin',
    images: ['https://images.unsplash.com/photo-1510798831971-661eb04b3739?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Fjord Front', 'Northern Lights', 'Wood Sauna'],
    shortDescription: 'A modern interpretation of Norwegian fishing cabins, optimized for aurora viewing.',
    isAiRecommended: true,
    amenities: ['Wifi', 'Sauna', 'Kitchen'],
    rating: 4.95
  },
  {
    id: '6',
    title: 'Apex Penthouse Suite',
    price: 850,
    location: 'New York, USA',
    category: 'Luxury',
    images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Helipad Access', 'Skyline Views', 'Private Chef Capable'],
    shortDescription: 'Soaring high above Manhattan with biometric access control and unmatched panoramas.',
    isAiRecommended: false,
    amenities: ['Wifi', 'Air Conditioning', 'Gym', 'Workspace'],
    rating: 4.91
  },
  {
    id: '7',
    title: 'Vapor Wave Loft',
    price: 165,
    location: 'Tokyo, Japan',
    category: 'Apartment',
    images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Neon Accents', 'Retro-Tech', 'Subway Adjacent'],
    shortDescription: 'An immersive cyberpunk-inspired retro loft in the bustling heart of Shibuya.',
    isAiRecommended: false,
    amenities: ['Wifi', 'Air Conditioning'],
    rating: 4.65
  },
  {
    id: '8',
    title: 'The Dune Eco-Pod',
    price: 290,
    location: 'Namib Desert, Namibia',
    category: 'Modern',
    images: ['https://images.unsplash.com/photo-1533090161767-e6ffed986c88?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Zero Footprint', 'Stargazing Roof', 'Off-grid'],
    shortDescription: 'A self-sustaining mirror pod that vanishes visually into the oldest desert on earth.',
    isAiRecommended: true,
    amenities: ['EV Charger', 'Solar Power'],
    rating: 4.99
  },
  {
    id: '9',
    title: 'Vessel Glasshouse',
    price: 540,
    location: 'Reykjavik, Iceland',
    category: 'Modern',
    images: ['https://images.unsplash.com/photo-1499955085172-a104c9463ece?auto=format&fit=crop&w=1200&q=80'],
    tags: ['360 Glass', 'Heated Floors', 'Volcanic Vista'],
    shortDescription: 'An all-glass structural polygon offering uninterrupted views of tectonic typography.',
    isAiRecommended: false,
    amenities: ['Wifi', 'Hot Tub', 'Kitchen'],
    rating: 4.88
  },
  {
    id: '10',
    title: 'Sovereign Heritage Manor',
    price: 1200,
    location: 'Cotswolds, UK',
    category: 'Luxury',
    images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=1200&q=80'],
    tags: ['Historic Estate', 'Moat', 'Curated Art Collection'],
    shortDescription: 'A 17th-century estate modernised via seamless, hidden architectural integrations.',
    isAiRecommended: true,
    amenities: ['Wifi', 'Pool', 'Kitchen', 'Workspace'],
    rating: 4.97
  }
];
