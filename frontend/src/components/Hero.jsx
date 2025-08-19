export default function Hero() {
    return (
      <section className="bg-primary flex flex-col items-center text-center py-10">
        {/* Tagline */}
        <h2 className="text-lg md:text-xl text-gray-300 max-w-lg leading-relaxed">
          <p><span className="text-secondary font-semibold">Watch</span> your favorite shows.{" "}</p>
          <p><span className="text-secondary font-semibold">Share</span> your ratings.</p>
          <p><span className="text-secondary font-semibold">Connect</span> with fans just like you.</p>
        </h2>
  
        {/* Get Started Button */}
        <button className="mt-4 px-6 py-2 bg-secondary text-white rounded-lg hover:bg-orange-500 transition">
          Get started
        </button>
  
        {/* Featured Shows */}
        <div className="mt-10 flex gap-4 flex-wrap justify-center">
          {/* Placeholder 1 */}
          <div className="hover:border-4 hover:border-secondary rounded w-48 h-64 flex items-center justify-center text-gray-500">
            Big Time Rush
          </div>
  
          {/* Placeholder 2 */}
          <div className="hover:border-4 hover:border-secondary rounded w-48 h-64 flex items-center justify-center text-gray-500">
            Breaking Bad
          </div>
  
          {/* Placeholder 3 */}
          <div className="hover:border-4 hover:border-secondary rounded w-48 h-64 flex items-center justify-center text-gray-500">
            Adventure Time
          </div>
        </div>
      </section>
    );
  }
  