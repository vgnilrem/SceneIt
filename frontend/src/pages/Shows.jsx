import React, { useState } from "react";
import { Star } from "lucide-react";

const ShowDetail = () => {
    const [watched, setWatched] = useState(false);
    const [listed, setListed] = useState(false);

    const [hoveredStar, setHoveredStar] = useState(0);
    const [selectedStar, setSelectedStar] = useState(0);

    const stars = [1, 2, 3, 4, 5];

    const handleMouseEnter = (value) => {
        setHoveredStar(value);
    };

    const handleMouseLeave = () => {
        setHoveredStar(0);
    };

    const handleClick = (value) => {
        setSelectedStar(value);
    };

    return (
        <div className="bg-primary text-white min-h-screen p-8 flex flex-col items-center">
            {/* Show Info */}
            <div className="flex gap-8 w-full max-w-5xl">
                {/* Placeholder image */}
                <div className="border-4 rounded w-48 h-64 flex items-center justify-center text-gray-500">
                    Breaking Bad
                </div>
                <div className="flex flex-col justify-start gap-4">
                    <h1 className="text-3xl font-bold">Breaking Bad</h1>
                    <p className="text-yellow-400 font-semibold">⭐ 4.7 (356.2k)</p>
                    <p className="text-gray-300">
                        5 seasons | 62 episodes
                    </p>
                    <p className="text-gray-300">
                        2008 | Director: Vince Gilligan
                    </p>
                    <p className="text-gray-400">
                        Mild-mannered high school chemistry teacher Walter White thinks his life
                        can't get much worse. His salary barely makes ends meet... [truncated for brevity]
                    </p>

                    <div className="flex gap-4 mt-4">
                        {/* Watched */}
                        <div className="flex items-center gap-1">
                            <span
                                onClick={() => setWatched(!watched)}
                                className={`p-2 rounded-full cursor-pointer transition-colors duration-200 ${!watched ? 'hover:bg-orange-500' : 'bg-green-500 text-white'
                                    }`}
                            >
                                {watched ? '✔️' : '📺'}
                            </span>
                            <span>512k watched</span>
                        </div>

                        {/* Listed */}
                        <div className="flex items-center gap-1">
                            <span
                                onClick={() => setListed(!listed)}
                                className={`p-2 rounded-full cursor-pointer transition-colors duration-200 ${!listed ? 'hover:bg-orange-500' : 'bg-green-500 text-white'
                                    }`}
                            >
                                {listed ? '✔️' : '📃'}
                            </span>
                            <span>512k listed</span>
                        </div>
                    </div>

                    {/* Rating Stars */}
                    <div className="flex items-center gap-1 mt-4">
                        <span>Rate?</span>
                        <div className="flex gap-1 ml-2">
                            {stars.map((star) => (
                                <Star
                                    key={star}
                                    className={`w-6 h-6 cursor-pointer ${star <= (hoveredStar || selectedStar) ? "text-yellow-400" : "text-gray-500"
                                        }`}
                                    onMouseEnter={() => handleMouseEnter(star)}
                                    onMouseLeave={handleMouseLeave}
                                    onClick={() => handleClick(star)}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Playlists & Recommendations */}
            <div className="mt-12 w-full max-w-5xl">
                <h2 className="text-xl font-bold mb-4">Popular Playlists With Breaking Bad</h2>
                <div className="flex gap-4 overflow-x-auto">
                    {[1, 2, 3].map((_, idx) => (
                        <div key={idx} className="min-w-[160px]">
                            <img
                                src="/playlist-placeholder.jpg"
                                alt="playlist"
                                className="rounded-lg"
                            />
                            <p className="text-sm mt-1">Shows that give me life.</p>
                            <p className="text-xs text-gray-400">by user238548</p>
                        </div>
                    ))}
                </div>

                <h2 className="text-xl font-bold my-4">Shows Like Breaking Bad</h2>
                <div className="flex gap-4 overflow-x-auto">
                    {["Game of Thrones", "SpongeBob", "Attack on Titan", "Friends", "Everybody Hates Chris"].map(
                        (show, idx) => (
                            <img
                                key={idx}
                                src="/show-placeholder.jpg"
                                alt={show}
                                className="w-32 h-48 object-cover rounded-lg"
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default ShowDetail;
