export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-white px-6">

      {/* Logo */}
      <h1 className="text-6xl font-bold tracking-tight text-black">
        Pathology GPS
      </h1>

      {/* Search Box */}
      <div className="mt-12 w-full max-w-4xl">
        <input
          type="text"
          placeholder="Search diagnosis, stain, pattern, gene..."
          className="w-full rounded-full border border-gray-300 bg-white px-10 py-5 text-xl text-gray-700 shadow-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
      </div>

      {/* Main Navigation */}
      <div className="mt-16 grid w-full max-w-md grid-cols-2 gap-x-16 gap-y-6 text-lg">

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          Organ
        </button>

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          Morphology
        </button>

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          IHC
        </button>

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          Molecular
        </button>

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          WHO Classification
        </button>

        <button className="rounded-md py-1 text-left transition-colors duration-200 hover:bg-gray-50">
          AI Assistant
        </button>

      </div>

    </main>
  );
}