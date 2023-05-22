import React from "react";

const GridComponent = () => {
  return (
    <div className="mx-auto my-9 max-w-7xl px-4 sm:px-6 md:my-24 lg:my-32 lg:px-8">
      <div className="mx-auto max-w-xl text-center">
        <h2 className="mt-6 text-3xl pt-6 font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
          Coding&nbsp;Decoded&nbsp;Principles
          </h2>
        <p className="mt-4 text-base leading-relaxed text-gray-600">We believe in our audience and would do anything to bolster it up</p>
      </div>
      <div className="mt-12 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 text-gray-700"
            >
              <line x1="12" y1="2" x2="12" y2="22"></line>
              <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">No Click Baits</h3>
          <p className="mt-4 text-sm text-gray-600">Clicks Baits mislead the audience. We respect the audience time and values it the most.</p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 text-gray-700"
            >
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">No false claims</h3>
          <p className="mt-4 text-sm text-gray-600">It is all the game of trust, and we never indulge in giving false hopes to anyone.</p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 text-gray-700"
            >
              <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Be Genuine</h3>
          <p className="mt-4 text-sm text-gray-600">Our authenticity is our asset. You can question us anytime, and we are ready with answers.</p>
        </div>
        <div>
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-9 w-9 text-gray-700"
            >
              <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
            </svg>
          </div>
          <h3 className="mt-8 text-lg font-semibold text-black">Let us grow together</h3>
          <p className="mt-4 text-sm text-gray-600">We believe in growing together. Let us do it for the community and build it together.</p>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
