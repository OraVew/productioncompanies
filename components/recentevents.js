import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import SwiperCore, { Autoplay } from 'swiper';

// Install the Autoplay module
SwiperCore.use([Autoplay]);

export default function RecentEventsCarousel() {
  const events = [
    {
      title: 'Candle True Stories',
      description: '',
      image: '/hero6.jpeg',
    },
    {
      title: 'TMZ',
      description: 'Untitled Primetime Documentary by EHM Productions.',
      image: '/hero3.jpg',
    },
    // Add more events here
  ];

  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Recent Shoots</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{
            delay: 10000, // Set autoplay delay to 10 seconds (same as the background image)
            disableOnInteraction: false,
          }}
          className="w-full"
        >
          {events.map((event, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center h-[400px]">
                <div className="relative w-full md:w-1/2 flex justify-center">
                  <Image
                    src={event.image}
                    alt={event.title}
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                    style={{ height: 'auto', width: 'auto', maxHeight: '70%' }}
                  />
                </div>
                <div className="mt-6 md:mt-0 md:ml-10 flex flex-col justify-center w-full md:w-1/2">
                  <h3 className="text-3xl font-semibold text-gray-800">{event.title}</h3>
                  <p className="mt-4 text-gray-600">{event.description}</p>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="inline-block px-6 py-3 bg-[#D69600] text-white font-semibold rounded-lg hover:bg-[#7B61FF]"
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' });
                      }}
                    >
                      Get Quote
                    </a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
