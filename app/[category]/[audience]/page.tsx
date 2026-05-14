type Props = {
  params: {
    category: string;
    audience: string;
  };
};

export default function AudiencePage({ params }: Props) {
  const collections = [
    "Baju & Celana",
    "Jaket",
    "Sepatu & Sandal",
    "Topi",
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      {/* Logo */}
      <div className="mb-16 flex justify-center">
        <img
          src="/images/logo.png"
          alt="HIKEKICKS"
          className="h-14 w-auto opacity-90"
        />
      </div>

      {/* Title */}
      <div className="text-center">
        <h1 className="text-5xl font-bold uppercase">
          {params.category}
        </h1>

        <p className="mt-4 text-gray-400 text-xl uppercase">
          {params.audience}
        </p>
      </div>

      {/* Collections */}
      <section className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

        {collections.map((item) => (
          <div
            key={item}
            className="rounded-3xl border border-white/10 bg-white/5 p-6 transition hover:border-white/30"
          >

            <div className="flex h-52 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-black">
              <span className="text-gray-500">
                {item}
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              {item}
            </h2>

            <button className="mt-6 w-full border border-white py-3 transition hover:bg-white hover:text-black">
              VIEW
            </button>

          </div>
        ))}

      </section>

    </main>
  );
}