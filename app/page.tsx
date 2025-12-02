import Link from 'next/link';
import Image from 'next/image';
import { HOTELS } from '@/data/hotels';
import HotelCard from '@/components/HotelCard';
import ContactForm from '@/components/ContactForm';
import MobileMenu from '@/components/MobileMenu';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      {/* Header / Navbar */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-2 sm:gap-3 hover:opacity-80 transition-opacity">
              <Image
                src="/hotel.jpg"
                alt="Avyay Group of Hotels Logo"
                width={40}
                height={40}
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg object-cover flex-shrink-0"
              />
              <span className="text-sm sm:text-lg md:text-xl lg:text-2xl font-bold text-primary-700 hover:text-primary-800 transition-colors whitespace-nowrap">
                Avyay Group of Hotels
              </span>
            </Link>
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              <Link href="#hotels" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Hotels
              </Link>
              <Link href="#about" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                About
              </Link>
              <Link href="#contact" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Contact
              </Link>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-16 sm:pb-24 md:pb-32">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-2">
            Discover Your
            <span className="block text-primary-700">Perfect Getaway</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 mb-6 sm:mb-8 leading-relaxed px-4">
            Experience luxury, comfort, and unforgettable moments at our handpicked collection of premium hotels
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
            <a
              href="#hotels"
              className="inline-block bg-primary-700 text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:bg-primary-800 transition-all duration-200 hover:shadow-xl active:scale-95 touch-manipulation"
            >
              Explore Hotels
            </a>
            <a
              href="#about"
              className="inline-block bg-white text-primary-700 border-2 border-primary-700 py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg hover:bg-primary-50 transition-all duration-200 active:scale-95 touch-manipulation"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Hotel List Section */}
      <section id="hotels" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="text-center mb-8 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
            Our Collection
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Each property is carefully selected to offer you an exceptional experience
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {HOTELS.map((hotel) => (
            <HotelCard key={hotel.slug} hotel={hotel} />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-white border-t border-gray-100 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 px-2">
              About Avyay Group of Hotels
            </h2>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-4 px-4">
              At Avyay Group of Hotels, we believe that every journey deserves a perfect destination. Our curated collection of luxury hotels represents the finest in hospitality, combining exceptional service, stunning locations, and unforgettable experiences.
            </p>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed mb-6 sm:mb-8 px-4">
              Whether you&apos;re seeking a beachfront paradise, a mountain retreat, or an urban escape, we have the perfect property waiting for you. Each hotel in our collection has been personally selected to ensure the highest standards of comfort, style, and service.
            </p>
          </div>
          
          {/* Owner Information */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-soft">
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">About Avyay Group</h3>
              <div className="text-center mb-6">
                <p className="text-base sm:text-lg text-gray-700 mb-2">
                  <span className="font-semibold">Owner:</span> Neeraj Swami
                </p>
                <p className="text-sm sm:text-base text-gray-600">
                  Avyay Group of Hotels is committed to providing exceptional hospitality and memorable experiences across all our properties.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Information */}
          <div className="mb-8 sm:mb-12">
            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 lg:p-10 shadow-soft">
              <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900 mb-4 sm:mb-6 text-center">Get in Touch</h3>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-12">
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-sm flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-700"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">WhatsApp</p>
                    <a
                      href="https://wa.me/8183872222"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm sm:text-base md:text-lg font-semibold text-primary-700 hover:text-primary-800 transition-colors break-all"
                    >
                      +91 8183872222
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-center sm:justify-start">
                  <div className="bg-white p-2 sm:p-3 rounded-lg sm:rounded-xl shadow-sm flex-shrink-0">
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-primary-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs sm:text-sm text-gray-600 mb-1">Email</p>
                    <a
                      href="mailto:info@avyayhotels.com"
                      className="text-sm sm:text-base md:text-lg font-semibold text-primary-700 hover:text-primary-800 transition-colors break-all"
                    >
                      info@avyayhotels.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div id="contact">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-8">
            {/* Company Info */}
            <div className="text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 mb-4">
                <Image
                  src="/hotel.jpg"
                  alt="Avyay Group of Hotels Logo"
                  width={40}
                  height={40}
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg object-cover"
                />
                <h3 className="text-lg sm:text-xl font-bold">Avyay Group of Hotels</h3>
              </div>
              <p className="text-gray-400 text-sm sm:text-base mb-4">
                Your journey to perfect stays begins here. Experience luxury, comfort, and exceptional hospitality.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm">
                <span className="font-semibold text-gray-400">Owner:</span> Neeraj Swami
              </p>
            </div>

            {/* Quick Links */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Quick Links</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="#hotels" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Our Hotels
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Contact Us</h4>
              <ul className="space-y-3 sm:space-y-4">
                <li>
                  <a
                    href="https://wa.me/8183872222"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-sm sm:text-base group"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 text-[#25D366] group-hover:scale-110 transition-transform"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                    </svg>
                    <span>+91 8183872222</span>
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:info@avyayhotels.com"
                    className="flex items-center justify-center md:justify-start gap-2 sm:gap-3 text-gray-400 hover:text-white transition-colors text-sm sm:text-base group"
                  >
                    <svg
                      className="w-5 h-5 sm:w-6 sm:h-6 group-hover:scale-110 transition-transform"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                    <span className="break-all">info@avyayhotels.com</span>
                  </a>
                </li>
              </ul>
            </div>

            {/* Our Hotels */}
            <div className="text-center md:text-left">
              <h4 className="text-base sm:text-lg font-semibold mb-4 sm:mb-5">Our Hotels</h4>
              <ul className="space-y-2 sm:space-y-3">
                <li>
                  <Link href="/hotels/hotel-lotus" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Hotel Lotus
                  </Link>
                </li>
                <li>
                  <Link href="/hotels/hotel-grand-lotus-banquet-and-rooms" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Hotel Grand Lotus
                  </Link>
                </li>
                <li>
                  <Link href="/hotels/ospite-hotel" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Ospite Hotel
                  </Link>
                </li>
                <li>
                  <Link href="/hotels/hotel-paras-tower" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Hotel Paras Tower
                  </Link>
                </li>
                <li>
                  <Link href="/hotels/hotel-krb-paradise" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Hotel KRB Paradise
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-6 sm:pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
              <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-left">
                © {new Date().getFullYear()} Avyay Group of Hotels. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs sm:text-sm text-center sm:text-right">
                Designed with ❤️ for exceptional hospitality
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

