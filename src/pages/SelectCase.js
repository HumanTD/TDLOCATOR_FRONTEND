import React from 'react';

const SelectCase = () => (
  <div className="relative h-screen w-full bg-black">
    <div className="relative h-screen w-full">
      <div className="absolute flex h-full w-1/2 flex-col justify-center bg-blue-500 pt-72 hover:opacity-50">
        <a
          className="flex justify-center  text-5xl font-semibold"
          href="/login"
        >
          PreExisting Case
        </a>
        <p className="border-2 p-10 px-24">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div className="absolute right-0 h-full w-1/2 bg-red-500 pt-96 hover:opacity-50">
        <a
          className="flex justify-center pt-4 text-5xl font-semibold"
          href="/login"
        >
          PreExisting Case
        </a>
        <p className="border-2 p-10 px-24">
          lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
    </div>
  </div>
);

export default SelectCase;
