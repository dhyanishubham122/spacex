import React, { useState, useEffect } from "react";
import SpaceXCard from './SpaceXCard';
function SpacexDetails() {
  const [data, setData] = useState(null);
  const [showVideo, setShowVideo] = useState(false); // State to toggle video
  const [showLanding, setShowLanding] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches/latest");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();
        console.log(jsonData);

        setData(jsonData);
      } catch (err) {
        console.error("Error fetching data:", err.message);
      }
    };

    fetchData();
  }, []);

  if (!data) return <p className="text-center text-lg font-semibold text-gray-600">Loading...</p>;

  return (
    <>
      {/* 🚀 Banner Section */}
      <div className="relative w-full h-[60vh] md:h-[70vh] lg:h-[80vh]">
        <img
          src={data.links?.patch?.large || "https://via.placeholder.com/800"}
          alt={data.name}
          className="absolute inset-0 w-full h-full object-cover brightness-75"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-6">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold drop-shadow-lg 
                         transition-all duration-300 ease-in-out 
                         hover:scale-110 hover:text-blue-400 
                         hover:drop-shadow-[0_0_25px_rgba(59,130,246,0.9)]">
            {data.name}
          </h1>
          <p className="text-xl md:text-3xl lg:text-4xl mt-2 opacity-90 
                        transition-all duration-300 ease-in-out 
                        hover:text-yellow-400 hover:scale-105">
            Flight Number: {data.flight_number}
          </p>
          <div className="mt-6 flex gap-4">
            {data.links?.wikipedia && (
              <a
                href={data.links.wikipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold rounded-lg bg-blue-500 hover:bg-blue-600 transition duration-300 text-white shadow-lg flex items-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 .5l2.75 8.26h8.69l-7.03 5.1 2.74 8.27L12 17.26l-7.15 5.87 2.74-8.27-7.03-5.1h8.69z" />
                </svg>
                Wikipedia
              </a>
            )}
            {data.links?.reddit?.launch && (
              <a
                href={data.links.reddit.launch}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 text-lg font-semibold rounded-lg bg-red-500 hover:bg-red-600 transition duration-300 text-white shadow-lg flex items-center gap-2"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm5.85 10.85c-.23.23-.51.34-.85.34-.34 0-.63-.11-.85-.34l-1.3-1.3c-.23-.23-.51-.34-.85-.34s-.63.11-.85.34l-1.3 1.3c-.23.23-.51.34-.85.34-.34 0-.63-.11-.85-.34-.23-.23-.34-.51-.34-.85s.11-.63.34-.85l1.3-1.3c.23-.23.51-.34.85-.34s.63.11.85.34l1.3 1.3c.23.23.51.34.85.34s.63-.11.85-.34l1.3-1.3c.23-.23.51-.34.85-.34s.63.11.85.34c.23.23.34.51.34.85s-.11.63-.34.85l-1.3 1.3z" />
                </svg>
                Reddit Discussion
              </a>
            )}
          </div>
        </div>
      </div>
      <p className={`text-lg font-semibold p-2 mt-3 rounded-lg cursor-pointer transition-all duration-300
       ${showLanding ? (data.cores[0].landing_success ? 'bg-green-500 text-white' : 'bg-red-500 text-white') : 'bg-gray-500 text-white'}`}
  onClick={() => setShowLanding(!showLanding)}
>
  {showLanding 
    ? (data.cores[0].landing_success ? '✅ Successful Landing' : '❌ Landing Failed') 
    : ' Click to Reveal Landing Status'}
</p>
      {/* 🎬 YouTube Preview Section */}
      <div className="flex flex-col items-center justify-center mt-3 bg-amber-100">
        <h2 className="text-2xl md:text-4xl font-bold text-black mb-8">Watch Launch Video</h2>

        {!showVideo ? (
          <div className="relative cursor-pointer group flex justify-center" onClick={() => setShowVideo(true)}>
            <img
              src={`https://img.youtube.com/vi/${data.links?.youtube_id}/maxresdefault.jpg`}
              alt="YouTube Thumbnail"
              className="w-[90%] md:w-[60%] lg:w-[70%] rounded-lg shadow-lg transition-transform duration-300 transform group-hover:scale-105"
            />
            {/* Play Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="bg-black bg-opacity-60 p-4 rounded-full transition-opacity duration-300 group-hover:bg-opacity-80">
                <svg
                  className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14.752 11.168l-4.586-2.577a1 1 0 00-1.5.864v5.15a1 1 0 001.5.864l4.586-2.577a1 1 0 000-1.728z" />
                </svg>
              </div>
            </div>
          </div>
        ) : (
          <iframe
            className="w-[90%] md:w-[60%] h-64 md:h-96 rounded-lg shadow-lg"
            src={`https://www.youtube.com/embed/${data.links?.youtube_id}?autoplay=1`}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        )}
      </div>
     

      <div className="bg-cyan-100 text-white p-6 rounded-lg text-center shadow-xl mt-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl min-h-[350px]">
  {/* Launch Date */}
  <p className="text-lg md:text-xl font-semibold opacity-90 text-cyan-800">📅 Launch Date</p>
  <p className="text-3xl md:text-4xl font-bold text-yellow-400 mt-2">
    {new Date(data.date_utc).toLocaleDateString()}
  </p>

  <div className="flex flex-col md:flex-row justify-between items-center w-full bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-4 transition-all duration-300 hover:bg-gray-700">
    
    <p className="text-xl md:text-2xl font-semibold flex items-center gap-3 transition-colors duration-300 hover:text-blue-400">
      Rocket Used: <span className="text-blue-500">{data.rocket}</span>
    </p>
    <p className="text-xl md:text-2xl font-semibold flex items-center gap-3 transition-colors duration-300 hover:text-green-400 mt-3 md:mt-0">
       Crew Members: <span className="text-blue-500">{data.crew.length}</span>
    </p>
  </div>
  <div className="flex flex-col md:flex-row justify-between items-center w-full bg-gray-900 text-white p-4 rounded-lg shadow-lg mt-4 transition-all duration-300 hover:bg-gray-700">
    
    <p className="text-xl md:text-2xl font-semibold flex items-center gap-3 transition-colors duration-300 hover:text-blue-400">
    landpad: <span className="text-blue-500">{data.cores[0].landpad}</span>
    </p>
    <p className="text-xl md:text-2xl font-semibold flex items-center gap-3 transition-colors duration-300 hover:text-green-400 mt-3 md:mt-0">
    landing_type: <span className="text-blue-500">{data.cores[0].landing_type}</span>
    </p>

  </div>
  
      <button
        onClick={() => setShowDetails(!showDetails)}
        className="bg-blue-500 text-white px-6 py-2 mt-2 rounded-lg shadow-lg hover:bg-blue-600 transition-all duration-300"
      >
        {showDetails ? "Hide Details" : "More Details"}
      </button>
      {showDetails && (
        <div className="mt-6">
          <SpaceXCard data={data} />
        </div>
      )}
    </div>




    </>
  );
}

export default SpacexDetails;
