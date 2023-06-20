import React from "react";

const OSPA = () => {
  const companyImages = [
    "http://example.com/img1",
    "http://example.com/img2",
    "http://example.com/img3"
  ];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:py-24 lg:py-16 lg:px-8">
      <div className="placement-container">
        <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">Our students are placed at</h1>
        <div className="flex flex-wrap justify-center">
          {companyImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Company ${index + 1}`}
              className="w-40 h-24 object-cover m-4"
              style={{ height: "60px", maxwidth: "100%", margin: "20px 30px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OSPA;
