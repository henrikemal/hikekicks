type Props = {
  params: {
    category: string;
    audience: string;
  };
};

export default function AudiencePage({ params }: Props) {
  const products = [
    "Baju & Celana",
    "Jaket",
    "Sepatu & Sandal",
    "Topi",
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">
      <h1 className="text-5xl font-bold uppercase">
        <div className="mb-12 flex justify-center">
  <img
    src="/images/logo.png"
    alt="HIKEKICKS"
    className="h-28 w-auto opacity-90"
  />
</div>
        {params.category} / {params.audience}
      </h1>

      <p className="mt-4 text-gray-400">
        HIKEKICKS category collection page.
      </p>

      <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {products.map((product) => (
          <div
            key={product}
            className="rounded-3xl border border-white/10 bg-white/5 p-6"
          >
            <div className="flex h-48 items-center justify-center rounded-2xl bg-gradient-to-br from-gray-800 to-black">
              <span className="text-gray-500">
                {product}
              </span>
            </div>

            <h2 className="mt-6 text-2xl font-semibold">
              {product}
            </h2>

            <button className="mt-6 w-full border border-white py-3 transition hover:bg-white hover:text-black">
              VIEW
            </button>
          </div>
        ))}
      </div>
    </main>
  );
}