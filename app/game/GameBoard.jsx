"use client";

import React, { useState, useEffect } from "react";

const GameBoard = () => {
  const [realImage, setRealImage] = useState(null);
  const [generatedImageUrl, setGeneratedImageUrl] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("/api/nasa");
        const data = await res.json();

        const todayImage = data[0]; // Get today's image
        setRealImage(todayImage);

        const generateRes = await fetch("/api/dalle", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ metadata: todayImage }),
        });

        const generateData = await generateRes.json();
        setGeneratedImageUrl(generateData.imageUrl);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-2">
      {realImage && (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src={realImage.url}
            alt={realImage.title}
            className="w-full h-auto"
          />
          <p className="mt-2 text-center">{realImage.title}</p>
        </div>
      )}
      {generatedImageUrl && (
        <div className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src={generatedImageUrl}
            alt="AI Generated"
            className="w-full h-auto"
          />
          <p className="mt-2 text-center">AI Generated Image</p>
        </div>
      )}
    </div>
  );
};

export default GameBoard;
