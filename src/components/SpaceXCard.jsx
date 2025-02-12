import React from "react";

const SpaceXCard = ({ data }) => {
  return (
    <div className="bg-gray-900 text-white p-6 rounded-lg shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl w-full max-w-lg mx-auto">
      {/* Launch Patch Image */}
      <img
        src={data.links.patch.large}
        alt={data.name}
        className="w-32 h-32 mx-auto object-contain rounded-lg"
      />

      {/* Launch Name */}
      <h2 className="text-3xl font-bold text-yellow-400 mt-4">{data.name}</h2>
      <p className="text-lg opacity-80">Flight Number: {data.flight_number}</p>

      {/* Launch Date */}
      <p className="text-xl font-semibold mt-3 bg-gray-800 p-2 rounded-md">
        📅 Launch Date:{" "}
        <span className="text-blue-400">
          {new Date(data.date_utc).toLocaleDateString()}
        </span>
      </p>

      {/* Rocket & Crew Details */}
      <div className="flex justify-between items-center mt-4 bg-gray-800 p-3 rounded-md">
        <p className="text-lg">
          🚀 Rocket: <span className="text-blue-400">{data.rocket}</span>
        </p>
        <p className="text-lg">
          👨‍🚀 Crew: <span className="text-blue-400">{data.crew.length}</span>
        </p>
      </div>

      {/* Launch Status */}
      <p
        className={`text-lg font-semibold p-2 rounded-lg mt-4 text-center ${
          data.success ? "bg-green-500" : "bg-red-500"
        }`}
      >
        {data.success ? "✅ Successful Launch" : "❌ Launch Failed"}
      </p>

      {/* External Links */}
      <div className="flex justify-center gap-6 mt-4">
        {data.links.wikipedia && (
          <a
            href={data.links.wikipedia}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 hover:text-white transition-colors duration-300 text-lg"
          >
            📖 Wikipedia
          </a>
        )}
        {data.links.reddit.launch && (
          <a
            href={data.links.reddit.launch}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-400 hover:text-white transition-colors duration-300 text-lg"
          >
            🔗 Reddit Discussion
          </a>
        )}
      </div>
    </div>
  );
};

export default SpaceXCard;
