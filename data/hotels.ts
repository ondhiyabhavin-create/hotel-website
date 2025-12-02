export interface Hotel {
  slug: string;
  name: string;
  city: string;
  imageUrl: string;
  images: string[]; // Multiple images for detail page
  shortDescription: string;
  detailDescription: string;
  whatsappNumber: string;
}

export const HOTELS: Hotel[] = [
  {
    slug: 'hotel-lotus',
    name: 'HOTEL LOTUS',
    city: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80',
    ],
    shortDescription: 'A peaceful retreat offering stunning views and world-class amenities for a comfortable stay.',
    detailDescription: 'HOTEL LOTUS offers a tranquil environment combining modern luxury with timeless elegance, providing guests with an unforgettable experience. Each room is thoughtfully designed with comfort in mind, featuring plush bedding, premium amenities, and excellent service. Our restaurant serves exquisite cuisine, and our facilities ensure every moment is perfect for both business and leisure travelers.',
    whatsappNumber: '8183872222',
  },
  {
    slug: 'hotel-grand-lotus-banquet-and-rooms',
    name: 'HOTEL GRAND LOTUS BANQUET AND ROOMS',
    city: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d5?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
    ],
    shortDescription: 'Premium hotel with elegant banquet facilities and luxurious rooms for events and accommodation.',
    detailDescription: 'HOTEL GRAND LOTUS BANQUET AND ROOMS is a premier destination offering luxurious accommodation and world-class banquet facilities. Perfect for weddings, corporate events, and special celebrations. Our spacious rooms feature modern amenities and elegant decor, while our banquet halls can accommodate events of all sizes. Experience exceptional hospitality and impeccable service in a sophisticated setting.',
    whatsappNumber: '8183872222',
  },
  {
    slug: 'ospite-hotel',
    name: 'OSPITE HOTEL',
    city: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
    ],
    shortDescription: 'Modern hotel offering comfortable accommodation with excellent service and convenient amenities.',
    detailDescription: 'OSPITE HOTEL provides a warm, inviting atmosphere designed for both business and leisure travelers. Our hotel features well-appointed rooms with modern amenities, ensuring a comfortable and relaxing stay. Enjoy our excellent dining options, attentive service, and convenient location. Whether you\'re traveling for work or pleasure, OSPITE HOTEL ensures a memorable experience with personalized hospitality.',
    whatsappNumber: '8183872222',
  },
  {
    slug: 'hotel-paras-tower',
    name: 'HOTEL PARAS TOWER',
    city: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1200&q=80',
      'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&q=80',
      'https://images.unsplash.com/photo-1596394516093-501ba68a0ba6?w=1200&q=80',
      'https://images.unsplash.com/photo-1618773928121-c32242e63f39?w=1200&q=80',
      'https://images.unsplash.com/photo-1571003123894-1f0594d2b5d5?w=1200&q=80',
    ],
    shortDescription: 'Towering luxury hotel combining style, comfort, and convenience in the heart of the city.',
    detailDescription: 'HOTEL PARAS TOWER stands as a landmark of hospitality excellence, offering modern luxury and exceptional service. Located in a prime location, our hotel provides easy access to business districts, shopping, and entertainment. Our elegantly designed rooms feature contemporary amenities, stunning city views, and premium comfort. Experience fine dining at our restaurants, relax in our well-appointed spaces, and enjoy personalized service that makes every stay special.',
    whatsappNumber: '8183872222',
  },
  {
    slug: 'hotel-krb-paradise',
    name: 'HOTEL KRB PARADISE',
    city: 'India',
    imageUrl: 'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=800&q=80',
    images: [
      'https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1200&q=80',
      'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=1200&q=80',
      'https://images.unsplash.com/photo-1590490360182-c33d57733427?w=1200&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=1200&q=80',
      'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?w=1200&q=80',
    ],
    shortDescription: 'A paradise of comfort and luxury, offering an exceptional stay experience with premium amenities.',
    detailDescription: 'HOTEL KRB PARADISE lives up to its name, providing a true paradise for guests seeking comfort, luxury, and exceptional hospitality. Our hotel features beautifully designed rooms with premium amenities, creating a perfect retreat for relaxation. Enjoy our excellent dining facilities, attentive service, and serene ambiance. Whether you\'re on a business trip or vacation, HOTEL KRB PARADISE ensures a delightful and memorable stay.',
    whatsappNumber: '8183872222',
  },
];

