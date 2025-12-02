'use client';

import Image from 'next/image';
import { Hotel } from '@/data/hotels';

interface HotelDetailProps {
  hotel: Hotel;
}

export default function HotelDetail({ hotel }: HotelDetailProps) {
  const handleWhatsAppClick = () => {
    const message = `Hi, I would like to enquire about booking at ${hotel.name} in ${hotel.city}.`;
    const url = `https://wa.me/${hotel.whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    if (typeof window !== 'undefined') {
      window.open(url, '_blank');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
      {/* Hero Image */}
      <div className="relative aspect-video w-full rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden mb-4 sm:mb-6 md:mb-8 shadow-soft-lg">
        <Image
          src={hotel.images[0] || hotel.imageUrl}
          alt={hotel.name}
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-4 sm:p-6 md:p-8 lg:p-12">
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-white mb-1 sm:mb-2">{hotel.name}</h1>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-white/90 font-medium">{hotel.city}</p>
        </div>
      </div>

      {/* Image Gallery */}
      {hotel.images && hotel.images.length > 1 && (
        <div className="mb-4 sm:mb-6 md:mb-8">
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">Gallery</h2>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-3 md:gap-4">
            {hotel.images.slice(1, 5).map((image, index) => (
              <div
                key={index}
                className="relative aspect-square rounded-xl sm:rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-lg transition-all duration-300 active:scale-95 touch-manipulation"
              >
                <Image
                  src={image}
                  alt={`${hotel.name} - Image ${index + 2}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 50vw, 25vw"
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {/* About Section */}
      <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl shadow-soft p-4 sm:p-6 md:p-8 lg:p-10 mb-4 sm:mb-6 md:mb-8">
        <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-2 sm:mb-3 md:mb-4">About This Hotel</h2>
        <p className="text-gray-700 leading-relaxed text-sm sm:text-base md:text-lg">
          {hotel.detailDescription}
        </p>
      </div>

      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={handleWhatsAppClick}
          className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white py-3 sm:py-3.5 md:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-sm sm:text-base md:text-lg shadow-lg hover:bg-[#20BA5A] transition-all duration-200 hover:shadow-xl active:scale-95 touch-manipulation w-full sm:w-auto min-h-[48px]"
        >
          <svg
            className="w-5 h-5 sm:w-6 sm:h-6"
            fill="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
          </svg>
          Enquire on WhatsApp
        </button>
      </div>
    </div>
  );
}

