import React, { useEffect, useState } from "react";

const TotalLaunches = () => {
  const [totalLaunches, setTotalLaunches] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the SpaceX API
    const fetchData = async () => {
      try {
        const response = await fetch("https://api.spacexdata.com/v4/launches");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }
        const data = await response.json();
        setTotalLaunches(data.length); // Set total launches
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-32">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-red-500 text-center p-4 bg-red-100 rounded-lg">
        Error: {error}
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-r  p-8 rounded-lg shadow-lg text-yellow-400 text-center">
      <h2 className="text-3xl font-bold mb-4">Total SpaceX Launches</h2>
      <p className="text-6xl font-extrabold">{totalLaunches}</p>
      <p className="mt-4 text-sm">As of today</p>
    </div>
  );
};

export default TotalLaunches;