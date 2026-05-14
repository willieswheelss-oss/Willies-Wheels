export default function WilliesWheelsWebsite() {
  const inventory = [
    {
      title: "ATVs",
      image:
        "https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Dirt Bikes",
      image:
        "https://images.unsplash.com/photo-1558981806-ec527fa84c39?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Street Bikes",
      image:
        "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    },
    {
      title: "Side x Sides",
      image:
        "https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop",
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* HEADER */}
      <header className="sticky top-0 z-50 bg-black border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img
              src="https://i.imgur.com/7xQZQ9Y.png"
              alt="Willies Wheels Logo"
              className="w-16 h-16 rounded-full object-cover border border-white"
            />

            <div>
              <h1 className="text-2xl font-black tracking-widest uppercase">
                WILLIES WHEELS
              </h1>

              <p className="text-zinc-400 text-sm uppercase tracking-[0.3em]">
                Sales • Parts • Service
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 uppercase text-sm tracking-widest">
            <a href="#inventory" className="hover:text-zinc-300 transition">
              Inventory
            </a>

            <a href="#about" className="hover:text-zinc-300 transition">
              About
            </a>

            <a href="#contact" className="hover:text-zinc-300 transition">
              Contact
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center">
        <img
          src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1600&auto=format&fit=crop"
          alt="Motorsports"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <div className="relative z-10 px-6 max-w-5xl">
          <h2 className="text-5xl md:text-7xl font-black uppercase leading-tight">
            Ride More.
            <span className="block text-zinc-400">Worry Less.</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto leading-relaxed">
            Tampa’s destination for ATVs, dirt bikes, street bikes, side x sides,
            parts, and service.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black px-8 py-4 rounded-2xl font-bold hover:bg-zinc-200 transition">
              Browse Inventory
            </button>

            <button className="border border-white px-8 py-4 rounded-2xl font-bold hover:bg-white hover:text-black transition">
              Financing Available
            </button>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="bg-zinc-950 py-20 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            "Flexible Financing",
            "Sales • Parts • Service",
            "Top Rated Customer Support",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 rounded-3xl p-8 hover:border-white transition"
            >
              <h3 className="text-2xl font-bold mb-4">{item}</h3>

              <p className="text-zinc-400 leading-relaxed">
                Premium powersports inventory with expert support and affordable
                financing options.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* INVENTORY */}
      <section
        id="inventory"
        className="max-w-7xl mx-auto px-6 py-24"
      >
        <div className="mb-14 text-center">
          <h2 className="text-5xl font-black uppercase">
            Featured Inventory
          </h2>

          <p className="text-zinc-400 mt-4 text-lg">
            Explore our latest motorsports vehicles.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {inventory.map((item, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-[1.03] transition duration-300"
            >
              <img
                src={item.image}
                alt={item.title}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{item.title}</h3>

                <button className="mt-5 w-full bg-white text-black py-3 rounded-xl font-semibold hover:bg-zinc-200 transition">
                  View Inventory
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section
        id="about"
        className="bg-zinc-950 py-24 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-black uppercase mb-6">
            About Willies Wheels
          </h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            Willies Wheels is Tampa’s trusted destination for ATVs, dirt bikes,
            street bikes, side x sides, parts, and professional service. We are
            committed to helping riders find the perfect machine with affordable
            pricing and flexible financing.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto bg-white text-black rounded-[2rem] p-14 text-center shadow-2xl">
          <h2 className="text-5xl font-black uppercase">
            Ready To Ride?
          </h2>

          <p className="mt-6 text-lg max-w-2xl mx-auto">
            Contact us today for inventory availability, financing options,
            parts, and service.
          </p>

          <button className="mt-8 bg-black text-white px-10 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </section>

      {/* FOOTER */}
      <footer
        id="contact"
        className="border-t border-zinc-800 py-12 px-6 text-center"
      >
        <img
          src="https://i.imgur.com/7xQZQ9Y.png"
          alt="Willies Wheels Logo"
          className="w-28 h-28 rounded-full mx-auto mb-6 border border-white"
        />

        <h3 className="text-3xl font-black uppercase tracking-widest">
          WILLIES WHEELS
        </h3>

        <p className="mt-4 text-zinc-400">
          1102 W Waters Ave Tampa, FL 33604
        </p>

        <p className="text-zinc-400">813-280-2550</p>

        <p className="text-zinc-400">
          willieswheelss@gmail.com
        </p>

        <div className="mt-4 text-zinc-400">
          <p>Mon-Sat 9:00AM-7:00PM</p>
          <p>Sunday 12:00PM-6:00PM</p>
        </div>

        <div className="mt-8 flex justify-center gap-6 uppercase tracking-widest text-sm">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
      </footer>
    </div>
  );
}