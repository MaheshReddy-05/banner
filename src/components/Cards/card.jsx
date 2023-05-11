import React, { useEffect, useState } from 'react';

function Card() {
  const [youtubeFollowers, setYoutubeFollowers] = useState(0);
  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);

  // Set your desired follower counts
  const youtubeCount = 1000;
  const instagramCount = 500;
  const linkedinCount = 200;

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
      }, 10); // Adjust the interval as per your desired animation speed

      return () => clearInterval(interval);
    };

    animateFollowers();
  }, []); // Empty dependency array to run the effect only once

  return (
    <div className="bg-gray-800 py-4">
              <h1 className="text-white text-lg flex items-center">Social Media Followers</h1>
      <div className="container mx-auto px-4  flex items-center ">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="mr-4">
            </div>
            <div className="flex items-center">
              <div className="mr-4">
                <h2 className="text-white text-2xl font-bold">{youtubeFollowers}</h2>
                <p className="text-gray-400 text-sm">YouTube Followers</p>
              </div>
              <div className="mr-4">
                <h2 className="text-white text-2xl font-bold">{instagramFollowers}</h2>
                <p className="text-gray-400 text-sm">Instagram Followers</p>
              </div>
              <div>
                <h2 className="text-white text-2xl font-bold">{linkedinFollowers}</h2>
                <p className="text-gray-400 text-sm">LinkedIn Followers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
