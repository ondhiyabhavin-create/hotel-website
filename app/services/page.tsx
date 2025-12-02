import Link from 'next/link';
import Image from 'next/image';
import MobileMenu from '@/components/MobileMenu';

const services = [
  {
    title: 'Room Booking & Reservations',
    description: 'Easy online booking system with instant confirmation. Flexible cancellation policies and special rates for extended stays.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Event Planning & Banquet Services',
    description: 'Professional event planning for weddings, corporate meetings, conferences, and celebrations. Full-service catering and venue management.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    title: '24/7 Concierge Service',
    description: 'Round-the-clock assistance for travel arrangements, restaurant reservations, local recommendations, and special requests.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: 'Fine Dining & Catering',
    description: 'Multi-cuisine restaurants offering exquisite dining experiences. Room service available 24/7 with a diverse menu selection.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
  {
    title: 'Business Facilities',
    description: 'Fully equipped business centers, meeting rooms, conference halls with modern AV equipment and high-speed internet.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    title: 'Transportation Services',
    description: 'Airport transfers, car rentals, and local transportation arrangements. Valet parking available at all properties.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
      </svg>
    ),
  },
  {
    title: 'Laundry & Housekeeping',
    description: 'Professional laundry services and daily housekeeping to ensure your room is always clean and comfortable.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      </svg>
    ),
  },
  {
    title: 'Wellness & Recreation',
    description: 'Fitness centers, spa services, and recreational facilities to help you relax and rejuvenate during your stay.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
  },
  {
    title: 'Security & Safety',
    description: '24/7 security surveillance, secure parking, and comprehensive safety protocols to ensure your peace of mind.',
    icon: (
      <svg className="w-10 h-10 sm:w-12 sm:h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
];

export default function ServicesPage() {
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
              <Link href="/#hotels" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Hotels
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                About
              </Link>
              <Link href="/services" className="text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Services
              </Link>
              <Link href="/gallery" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Gallery
              </Link>
              <Link href="/#contact" className="text-gray-700 hover:text-primary-700 font-medium transition-colors text-sm lg:text-base">
                Contact
              </Link>
            </div>
            <MobileMenu />
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 md:pt-24 pb-12 sm:pb-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            Our Services
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 leading-relaxed">
            Comprehensive hospitality services designed to make your stay exceptional
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-20 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <div className="text-primary-700 mb-4 sm:mb-6">{service.icon}</div>
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>
              <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary-700 to-primary-800 text-white py-12 sm:py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
            Ready to Experience Our Services?
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-primary-100 mb-6 sm:mb-8">
            Contact us today to book your stay or inquire about our services
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://wa.me/8183872222"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] text-white py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:bg-[#20BA5A] transition-all duration-200 hover:shadow-xl active:scale-95"
            >
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Contact on WhatsApp
            </a>
            <Link
              href="/#contact"
              className="inline-flex items-center justify-center gap-2 sm:gap-3 bg-white text-primary-700 py-3 sm:py-4 px-6 sm:px-8 rounded-xl sm:rounded-2xl font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-50 transition-all duration-200 hover:shadow-xl active:scale-95"
            >
              Contact Form
            </Link>
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
                  <Link href="/#hotels" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Our Hotels
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link href="/#contact" className="text-gray-400 hover:text-white transition-colors text-sm sm:text-base">
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
            <div className="flex justify-center items-center">
              <p className="text-gray-500 text-xs sm:text-sm text-center">
                © {new Date().getFullYear()} Avyay Group of Hotels. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

