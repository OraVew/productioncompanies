import Image from 'next/image';

export default function UniqueValue() {
  return (
    <section className="py-20 bg-gray-200">
      <div className="container mx-auto flex flex-col lg:flex-row items-center">
        <div className="lg:w-1/2 p-8">
          <h2 className="text-4xl font-bold text-gray-800">What makes OraVew different?</h2>
          <p className="mt-4 text-lg text-gray-600">
          Bring in your crew and equipment without any limitations. Our elevator is easy to load and unload into our suite.
            Our versatile, mid-sized space comfortably accommodates up to 50 people, ideal for everything from intimate interviews to full-scale video shoots.
          </p>
          <button
            className="mt-6 px-6 py-3 bg-[#D69600] text-white font-semibold rounded hover:bg-[#7B61FF]"
            onClick={() => document.getElementById('contactForm').scrollIntoView({ behavior: 'smooth' })}
          >
            Check Availability
          </button>
        </div>
        <div className="lg:w-1/2 p-8">
          <Image
            src="/hero4.jpg"
            alt="Placeholder Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
            style={{ height: 'auto', width: 'auto' }}
          />
        </div>
      </div>
    </section>
  );
}
