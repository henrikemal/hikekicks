type Props = {
  params: Promise<{
    category: string;
    audience: string;
  }>;
};

export default async function AudiencePage({ params }: Props) {

  const { category, audience } = await params;

  let currentImage = "/images/logo.png";

  if (category === "casual" && audience === "anak") {
    currentImage = "/images/casual-anak.png";
  }

  if (category === "casual" && audience === "dewasa") {
    currentImage = "/images/casual-dewasa.png";
  }

  if (category === "formal" && audience === "anak") {
    currentImage = "/images/formal-anak.png";
  }

  if (category === "formal" && audience === "dewasa") {
    currentImage = "/images/formal-dewasa.png";
  }

  if (category === "extreme" && audience === "anak") {
    currentImage = "/images/extreme-anak.png";
  }

  if (category === "extreme" && audience === "dewasa") {
    currentImage = "/images/extreme-dewasa.png";
  }

  const collections = [
    "Baju & Celana",
    "Jaket",
    "Sepatu & Sandal",
    "Topi",
  ];

  return (
    <main className="min-h-screen bg-black px-6 py-16 text-white">

      {/* LOGO */}
      <div className="mb-16 flex justify-center">
        <img
          src={currentImage}
          alt="HIKEKICKS"
          className="h-24 sm:h-32 md:h-40 lg:h-56 w-auto object-contain"
        />
      </div>

      {/* TITLE */}
      <div className="text-center">
        <h1 className="text-4xl font-bold uppercase">
  {category === "casual"
    ? "Casual & Sport"
    : category}
</h1>

       <p className="mt-1 text-lg uppercase tracking-[0.3em] text-gray-500">
          {audience}
        </p>
      </div>

      {/* COLLECTION */}
      <section className="mt-20 grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

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