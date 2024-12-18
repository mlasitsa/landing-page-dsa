export default function Home() {
    return (
      <main className="bg-gray-100 min-h-screen flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-red-600 mb-4">
            Master Data Structures & Algorithms
          </h1>
          <p className="text-gray-700 text-lg mb-8">
            Learn the fundamentals of DSA with{" "}
            <span className="text-blue-500 underline">detailed, easy-to-follow</span> tutorials. Perfect for beginners and intermediate learners.
          </p>
          <button className="bg-red-500 text-white px-6 py-3 rounded-md hover:bg-red-600 transition">
            Sign Up Now
          </button>
        </div>
      </main>
    );
  }
  