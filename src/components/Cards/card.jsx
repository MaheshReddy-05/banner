import React, { useEffect, useState } from 'react';

function Card() {
  const [youtubeFollowers, setYoutubeFollowers] = useState(0);
  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);
  const [faangHires, setFaangHires] = useState(0);
  const [telegramFollowers, setTelegramFollowers] = useState(0);

  // Set your desired follower counts
  const youtubeCount = 1000;
  const instagramCount = 500;
  const linkedinCount = 200;
  const faangCount = 300;
  const telegramCount = 400;

  useEffect(() => {
    const animateFollowers = () => {
      const interval = setInterval(() => {
        setYoutubeFollowers((prevFollowers) => {
          if (prevFollowers < youtubeCount) {
            return prevFollowers + 1;
          }
          return prevFollowers;
        });

        setInstagramFollowers((prevFollowers) => {
          if (prevFollowers < instagramCount) {
            return prevFollowers + 1;
          }
          return prevFollowers;
        });

        setLinkedinFollowers((prevFollowers) => {
          if (prevFollowers < linkedinCount) {
            return prevFollowers + 1;
          }
          return prevFollowers;
        });

        setFaangHires((prevFollowers) => {
          if (prevFollowers < faangCount) {
            return prevFollowers + 1;
          }
          return prevFollowers;
        });

        setTelegramFollowers((prevFollowers) => {
          if (prevFollowers < telegramCount) {
            return prevFollowers + 1;
          }
          return prevFollowers;
        });
      }, 10); // Adjust the interval as per your desired animation speed

      return () => clearInterval(interval);
    };

    animateFollowers();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="bg-gray-800 py-4">
      <div className="container mx-auto px-4">
        <div className=" justify-between">
        <div className="flex items-center justify-center">
          <h1 className="text-white text-center text-3xl whitespace-nowrap">Social Media Followers</h1>
          <br></br>
          <br></br>
        </div>
          <div className="flex items-center">
            <div className="basis-1/5 text-center mr-4">
              <h2 className="text-white text-2xl font-bold">{youtubeFollowers}</h2>
              <p className="text-gray-400 text-sm">YouTube Followers</p>
            </div>
            <div className="basis-1/5 text-center mr-4">
              <h2 className="text-white text-2xl font-bold">{instagramFollowers}</h2>
              <p className="text-gray-400 text-sm">Instagram Followers</p>
            </div>
            <div className="basis-1/5 text-center">
              <h2 className="text-white text-2xl font-bold">{linkedinFollowers}</h2>
              <p className="text-gray-400 text-sm">LinkedIn Followers</p>
            </div>
            <div className="basis-1/5 text-center">
              <h2 className="text-white text-2xl font-bold">{faangHires}</h2>
              <p className="text-gray-400 text-sm">People Got into FAANG</p>
            </div>
            <div className="basis-1/5 text-center">
              <h2 className="text-white text-2xl font-bold">{telegramFollowers}</h2>
              <p className="text-gray-400 text-sm">Telegram Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
