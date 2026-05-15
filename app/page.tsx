const categories = [
  {
    title: "Formal",
    slug: "formal",
    desc: "Tampilan rapi untuk acara, kerja, sekolah, dan event.",
    items: ["Anak", "Dewasa"],
  },

  {
  title: "Casual & Sport",
  slug: "casual",
  desc: "Daily wear & Sportwear untuk anak dan dewasa.",
  image: "/images/casual.jpg",
  items: ["Anak", "Dewasa"],
},

  {
    title: "Extreme",
    slug: "extreme",
    desc: "Style bold, street, tactical, dan karakter kuat.",
    items: ["Anak", "Dewasa"],
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="flex items-center justify-between border-b border-white/10 px-6 py-5">
        <h1 className="text-xl font-bold tracking-[0.3em]">HIKEKICKS</h1>

        <div className="hidden gap-6 text-sm text-gray-300 md:flex">
          <a href="#">Casual</a>
          <a href="#">Formal</a>
          <a href="#">Extreme</a>
          <a href="#">Contact</a>
        </div>
      </nav>

      <section className="px-6 py-24 text-center">
        <p className="text-sm tracking-[0.4em] text-gray-400">FASHION BRAND</p>

        <img
  src="/images/logo.png"
  alt="HIKEKICKS"
  className="mx-auto w-full max-w-5xl"
/>

        <p className="mx-auto mt-6 max-w-2xl text-gray-400">
          Fashion untuk Anak dan Dewasa dalam satu brand identity.
        </p>

        <button className="mt-10 border border-white px-10 py-4 text-sm tracking-[0.3em] transition hover:bg-white hover:text-black">
          EXPLORE COLLECTION
        </button>
      </section>

      <section className="grid gap-8 px-6 pb-24 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
  {categories.map((cat) => (
    <div
      key={cat.title}
      className="rounded-3xl border border-white/10 bg-white/5 p-6"
    >
      <div className="h-56 overflow-hidden rounded-2xl bg-black sm:h-64 lg:h-64">
        {cat.image ? (
         <img
  src={cat.image}
  alt={cat.title}
  className="h-full w-full object-contain object-center transition duration-500 hover:scale-105"
/>
        ) : (
          <div className="flex h-full items-center justify-center">
            <span className="text-gray-500">{cat.title}</span>
          </div>
        )}
      </div>

      <h3 className="mt-6 text-2xl font-semibold">{cat.title}</h3>

      <p className="mt-3 text-gray-400">{cat.desc}</p>

      <div className="mt-6 flex flex-wrap gap-2">
        {cat.items.map((item) => (
          <a
            key={item}
            href={`/${cat.slug}/${item.toLowerCase()}`}
            className="rounded-full border border-white/10 px-3 py-1 text-xs text-gray-300 transition hover:bg-white hover:text-black"
          >
            {item}
          </a>
        ))}
      </div>

      <button className="mt-8 w-full border border-white py-3 transition hover:bg-white hover:text-black">
        VIEW COLLECTION
      </button>
    </div>
  ))}
</section>
    </main>
  );
}