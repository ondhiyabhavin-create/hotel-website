import Link from 'next/link';
import Image from 'next/image';
import { Hotel } from '@/data/hotels';

interface HotelCardProps {
  hotel: Hotel;
}

export default function HotelCard({ hotel }: HotelCardProps) {
  return (
    <Link
      href={`/hotels/${hotel.slug}`}
      className="group flex flex-col h-full bg-white rounded-xl sm:rounded-2xl shadow-soft overflow-hidden transition-all duration-300 hover:shadow-soft-lg active:scale-[0.98] touch-manipulation"
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden flex-shrink-0">
        <Image
          src={hotel.imageUrl}
          alt={hotel.name}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      <div className="p-4 sm:p-6 flex flex-col flex-grow">
        <div className="mb-2">
          <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-1 line-clamp-2">{hotel.name}</h3>
          <p className="text-primary-600 font-medium text-xs sm:text-sm uppercase tracking-wide">{hotel.city}</p>
        </div>
        <p className="text-gray-600 text-xs sm:text-sm leading-relaxed mb-3 sm:mb-4 line-clamp-2 flex-grow">
          {hotel.shortDescription}
        </p>
        <div className="inline-block w-full text-center bg-primary-700 text-white py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg sm:rounded-xl font-medium text-sm sm:text-base transition-all duration-200 group-hover:bg-primary-800 group-hover:shadow-lg touch-manipulation">
          View Details
        </div>
      </div>
    </Link>
  );
}

