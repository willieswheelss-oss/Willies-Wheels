import logo from "./src/assets/logo.png";

export default function WilliesWheelsWebsite() {
  const products = [
    {
      name: '300cc Terminator ATV',
      price: '$4,500',
      image:
        'https://images.unsplash.com/photo-1517846693594-1567da72af75?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: '125cc Ryder ATV',
      price: '$1,495',
      image:
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: '200cc Sport ATV',
      price: '$2,695',
      image:
        'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=1200&auto=format&fit=crop',
    },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      <header className="flex items-center justify-between px-8 py-5 border-b border-zinc-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="flex items-center gap-4">
          <img
            src={logo}
            alt="Willies Wheels Logo"
            className="h-14 w-auto"
          />

          <h1 className="text-2xl font-bold tracking-wide">
            WILLIES WHEELS
          </h1>
        </div>

        <nav className="hidden md:flex gap-8 text-sm uppercase tracking-widest">
          <a href="#home">Home</a>
          <a href="#inventory">Inventory</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section
        id="home"
        className="relative h-[85vh] flex items-center justify-center text-center overflow-hidden"
      >
        <img
          src="https://images.unsplash.com/photo-1503736334956-4c8f8e92946d?q=80&w=1600&auto=format&fit=crop"
          alt="Motorsports"
          className="absolute inset-0 w-full h-full object-cover opacity-40"
        />

        <div className="relative z-10 max-w-4xl px-6">
          <h2 className="text-5xl md:text-7xl font-extrabold leading-tight uppercase">
            Ride Beyond
            <span className="block text-zinc-300">Limits</span>
          </h2>

          <p className="mt-6 text-lg text-zinc-300 max-w-2xl mx-auto">
            ATVs, dirt bikes, scooters, and go-karts. Find the perfect
            ride for every adventure.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <button className="bg-white text-black hover:bg-zinc-200 px-8 py-4 rounded-2xl font-semibold transition shadow-lg">
              Shop Inventory
            </button>

            <button className="border border-white hover:bg-white hover:text-black px-8 py-4 rounded-2xl font-semibold transition">
              Financing Options
            </button>
          </div>
        </div>
      </section>

      <section className="grid md:grid-cols-3 gap-6 px-8 py-20 bg-zinc-950">
        {[
          'Top Rated Motorsports Dealer',
          'Flexible Financing Available',
          'Sales, Parts & Service',
        ].map((item, index) => (
          <div
            key={index}
            className="bg-zinc-900 rounded-3xl p-8 border border-zinc-800 hover:border-white transition"
          >
            <h3 className="text-2xl font-bold mb-3">{item}</h3>
            <p className="text-zinc-400 leading-relaxed">
              Experience premium customer service and unbeatable deals on all
              motorsport vehicles.
            </p>
          </div>
        ))}
      </section>

      <section id="inventory" className="px-8 py-24">
        <div className="flex items-center justify-between mb-12 flex-wrap gap-4">
          <div>
            <h2 className="text-4xl font-bold">Featured Inventory</h2>
            <p className="text-zinc-400 mt-2">
              Browse our latest ATVs and scooters.
            </p>
          </div>

          <button className="bg-white text-black hover:bg-zinc-200 px-6 py-3 rounded-xl transition font-medium">
            View All Products
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-[1.02] transition duration-300"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-64 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-bold">{product.name}</h3>
                <p className="text-white text-xl mt-2 font-semibold">
                  {product.price}
                </p>

                <button className="mt-5 w-full bg-white text-black hover:bg-zinc-200 py-3 rounded-xl transition font-medium">
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="about"
        className="px-8 py-24 bg-black"
      >
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">About Willies Wheels</h2>

          <p className="text-zinc-300 text-lg leading-relaxed">
            We specialize in high-quality motorsports vehicles including ATVs,
            dirt bikes, scooters, and go-karts. Our mission is to deliver
            thrilling rides, unbeatable service, and affordable financing for
            every customer.
          </p>
        </div>
      </section>

      <section className="px-8 py-24 text-center">
        <div className="max-w-4xl mx-auto bg-white text-black rounded-[2rem] p-12 shadow-2xl">
          <h2 className="text-4xl font-extrabold mb-4">
            Ready To Ride?
          </h2>

          <p className="text-lg max-w-2xl mx-auto">
            Contact us today to learn about inventory, financing, and special
            promotions.
          </p>

          <button className="mt-8 bg-black text-white px-8 py-4 rounded-2xl font-bold hover:scale-105 transition">
            Contact Us
          </button>
        </div>
      </section>

      <footer
        id="contact"
        className="border-t border-zinc-800 px-8 py-10 text-center text-zinc-400"
      >
        <h3 className="text-2xl font-bold text-white mb-3">
          WILLIES WHEELS
        </h3>

        <p>1102 W Waters Ave Tampa, FL 33604</p>
        <p>813-280-2550</p>
        <p>willieswheelss@gmail.com</p>
        <p>Mon-Sat 9:00AM-7:00PM</p>
        <p>Sunday 12:00PM-6:00PM</p>

        <div className="mt-6 flex justify-center gap-6 text-sm uppercase tracking-widest">
          <a href="#">Facebook</a>
          <a href="#">Instagram</a>
          <a href="#">TikTok</a>
        </div>
      </footer>
    </div>
  );
}
