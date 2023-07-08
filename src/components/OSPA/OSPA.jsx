import React from "react";
import amazonLogo from "../../assets/images/SVG/amazonLogo.png";
import googleLogo from "../../assets/images/SVG/mp.png";
import RZPay from "../../assets/images/SVG/RZPay.png";
import Microsoft from "../../assets/images/SVG/Microsoft.png";
import Adobe from "../../assets/images/SVG/Adobe.png";
import Flipkart from "../../assets/images/SVG/Flipkart.png";
import Goldman from "../../assets/images/SVG/Goldman.png";

const OSPA = () => {
  const companyImages = [amazonLogo, googleLogo, Microsoft,RZPay,Adobe,Flipkart,Goldman];

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 md:py-24 lg:py-16 lg:px-8">
      <div className="placement-container">
        <h1 className="text-3xl font-bold text-center sm:text-4xl lg:text-5xl">Our students are placed at</h1>
          <br />
          <br />
        <div className="flex flex-wrap justify-center items-center">
          {companyImages.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl}
              alt={`Company ${index + 1}`}
              className={`w-40 h-24 object-contain m-4`}
              style={{ maxHeight: "60px", maxWidth: "100%", margin: "20px 30px" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OSPA;
