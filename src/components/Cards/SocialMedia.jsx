import React, { useEffect, useState } from "react";

function SocialMedia() {
  const [youtubeFollowers, setYoutubeFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);
  const [faangHires, setFaangHires] = useState(0);
  const [telegramFollowers, setTelegramFollowers] = useState(0);

  // Set your desired follower counts
  const youtubeCount = 900;
  const linkedinCount = 200;
  const faangCount = 300;
  const telegramCount = 400;

  useEffect(() => {
    const animateFollowers = () => {
      setTimeout(() => {
        const interval = setInterval(() => {
          setYoutubeFollowers((prevFollowers) => {
            if (prevFollowers < youtubeCount) {
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
      }, 1000); // Delay of 500ms before starting the animation
    };

    animateFollowers();
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto sm:max-w-6xl py-16 grid grid-cols-1 gap-y-4 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
          <div>
            <div className="text-center mb-8">
              <h2 className="text-white text-4xl font-bold">
                {youtubeFollowers}K+
              </h2>
              <p className="text-gray-400 text-xl">YouTube Followers</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-white text-4xl font-bold">
                {linkedinFollowers}K+
              </h2>
              <p className="text-gray-400 text-xl">LinkedIn Followers</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-white text-4xl font-bold">{faangHires}K+</h2>
              <p className="text-gray-400 text-xl">People into FAANG</p>
            </div>
          </div>
          <div>
            <div className="text-center mb-8">
              <h2 className="text-white text-4xl font-bold">
                {telegramFollowers}K+
              </h2>
              <p className="text-gray-400 text-xl">Telegram Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
