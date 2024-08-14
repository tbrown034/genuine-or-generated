"use client";

import React, { useState, useEffect } from "react";

const GameBoard = () => {
  const [nasaImages, setNasaImages] = useState([]); // Storing real NASA images
  const [aiGeneratedImages, setAiGeneratedImages] = useState([]); // Storing AI-generated images
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [fetchError, setFetchError] = useState(null); // Error state

  useEffect(() => {
    const fetchAndGenerateImages = async () => {
      try {
        const nasaResponse = await fetch("/api/nasa");
        const nasaData = await nasaResponse.json();

        // Get the first three NASA images
        const selectedNasaImages = nasaData.slice(0, 3);
        setNasaImages(selectedNasaImages);

        const generatedImages = await Promise.all(
          selectedNasaImages.map(async (imageMetadata) => {
            const aiResponse = await fetch("/api/dalle", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ metadata: imageMetadata }),
            });

            const aiData = await aiResponse.json();
            return aiData.imageUrl;
          })
        );

        setAiGeneratedImages(generatedImages);
      } catch (error) {
        setFetchError(error.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchAndGenerateImages();
  }, []);

  if (isLoading) return <p>Loading...</p>;
  if (fetchError) return <p>Error: {fetchError}</p>;

  return (
    <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
      {nasaImages.map((image, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img src={image.url} alt={image.title} className="w-full h-auto" />
          <p className="mt-2 text-center">{image.title}</p>
        </div>
      ))}
      {aiGeneratedImages.map((url, index) => (
        <div key={index} className="p-4 bg-gray-800 rounded-lg shadow-lg">
          <img
            src={url}
            alt={`AI Generated Image ${index + 1}`}
            className="w-full h-auto"
          />
          <p className="mt-2 text-center">{`AI Generated Image ${
            index + 1
          }`}</p>
        </div>
      ))}
    </div>
  );
};

export default GameBoard;
