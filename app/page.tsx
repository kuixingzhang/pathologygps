export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white">

      {/* Logo */}
      <h1 className="text-6xl font-bold tracking-tight">
        Pathology GPS
      </h1>

      {/* Search Box */}
      <div className="mt-12 w-full max-w-2xl">

        <input
          type="text"
          placeholder="Search diagnosis..."
          className="w-full rounded-full border border-gray-300 px-8 py-5 text-xl shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

      </div>

      {/* Organ Navigation */}

      <div className="mt-20 grid grid-cols-3 gap-6 text-lg">

        <button>Breast</button>
        <button>GI</button>
        <button>Liver</button>

        <button>Pancreas</button>
        <button>GU</button>
        <button>GYN</button>

        <button>Lung</button>
        <button>Head & Neck</button>
        <button>Soft Tissue</button>

        <button>Bone</button>
        <button>Neuro</button>
        <button>Heme</button>

      </div>

    </main>
  );
}