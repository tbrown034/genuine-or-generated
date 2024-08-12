// app/game/GameBoard.jsx\
"use client";
import React, { useState, useEffect } from "react";

const GameBoard = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/nasa"); // Fetch data from your API route
        const data = await res.json();
        setImages(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages(); // Call the function to fetch data when the component mounts
  }, []); // Empty dependency array means this effect runs only once

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
      {images.map((image, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img src={image.url} alt={image.title} className="w-full h-auto" />
          <p className="mt-2 text-center">{image.title}</p>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
