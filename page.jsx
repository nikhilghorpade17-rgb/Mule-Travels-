export default function MuleTravelsWebsite() { return ( <div className="min-h-screen bg-slate-950 text-white font-sans"> {/* Hero Section */} <section className="bg-gradient-to-r from-blue-900 to-slate-900 px-6 py-16 md:px-16"> <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center"> <div> <h1 className="text-5xl md:text-6xl font-bold leading-tight"> Mule Travels </h1> <p className="text-yellow-400 text-xl mt-4 font-semibold"> Safe Journey, Happy Memories </p> <p className="mt-6 text-gray-300 text-lg leading-8"> Premium travel service in Andheri East, Mumbai. Comfortable rides for family trips, airport pickup, outstation tours and business travel. </p>

<div className="flex flex-wrap gap-4 mt-8">
          <a
            href="https://wa.me/918169116245"
            className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-2xl text-lg font-semibold transition"
          >
            Book on WhatsApp
          </a>

          <a
            href="tel:+917666388168"
            className="border border-white px-6 py-3 rounded-2xl text-lg hover:bg-white hover:text-black transition"
          >
            Call Now
          </a>
        </div>
      </div>

      <div className="bg-slate-800 rounded-3xl p-8 shadow-2xl">
        <img
          src="https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop"
          alt="Travel"
          className="rounded-2xl w-full h-[350px] object-cover"
        />
      </div>
    </div>
  </section>

  {/* Vehicles */}
  <section className="py-16 px-6 md:px-16 bg-slate-900">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Vehicles
      </h2>

      <div className="grid md:grid-cols-4 gap-6">
        {[
          'Tempo Traveller',
          'Innova Crysta',
          'Ertiga',
          'Dezire',
        ].map((vehicle) => (
          <div
            key={vehicle}
            className="bg-slate-800 rounded-3xl p-6 text-center shadow-xl hover:scale-105 transition"
          >
            <div className="h-40 bg-slate-700 rounded-2xl mb-4 flex items-center justify-center text-gray-400">
              Vehicle Photo
            </div>
            <h3 className="text-2xl font-semibold">{vehicle}</h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Services */}
  <section className="py-16 px-6 md:px-16 bg-slate-950">
    <div className="max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-12">
        Our Services
      </h2>

      <div className="grid md:grid-cols-3 gap-8">
        {[
          'Airport Pickup & Drop',
          'Outstation Tours',
          'Corporate Travel',
          'Family Trips',
          'Wedding Travel',
          '24/7 Booking Support',
        ].map((service) => (
          <div
            key={service}
            className="bg-slate-800 p-8 rounded-3xl text-center shadow-xl"
          >
            <h3 className="text-2xl font-semibold text-yellow-400">
              {service}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </section>

  {/* Contact */}
  <section className="py-16 px-6 md:px-16 bg-gradient-to-r from-blue-950 to-slate-900">
    <div className="max-w-4xl mx-auto text-center">
      <h2 className="text-4xl font-bold mb-6">Contact Us</h2>

      <p className="text-xl text-gray-300 leading-9">
        Andheri East, Mumbai <br />
        Phone: 7666388168 <br />
        WhatsApp: 8169116245
      </p>

      <a
        href="https://wa.me/918169116245"
        className="inline-block mt-8 bg-green-500 hover:bg-green-600 px-8 py-4 rounded-2xl text-xl font-semibold transition"
      >
        Chat on WhatsApp
      </a>
    </div>
  </section>

  {/* Footer */}
  <footer className="bg-black py-6 text-center text-gray-400">
    © 2026 Mule Travels • All Rights Reserved
  </footer>
</div>

); }