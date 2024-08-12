import React from "react";
import GameBoard from "./GameBoard";

const Page = () => {
  return (
    <section className="flex flex-col items-center justify-center ">
      <div className="p-4 mt-4 text-center">
        <h1 className="text-4xl font-bold">Real or AI-Generated?</h1>
        <p className="mt-4 text-2xl">
          Can you tell which images are from NASA and which are AI-generated?
        </p>
        <p className="mt-4 text-lg leading-relaxed">
          Below are images from NASA’s Picture of the Day for the last 10 days,
          along with AI-generated counterparts using the same data. Your task is
          to identify the real NASA photos among the fakes. The game begins as
          soon as the images load below—no need to wait, just start guessing!
        </p>
      </div>
      <div className="p-2 border-2">
        <GameBoard />
      </div>
    </section>
  );
};

export default Page;
