import React, { useEffect, useState } from "react";

function SocialMedia() {
  const [youtubeFollowers, setYoutubeFollowers] = useState(0);
  const [instagramFollowers, setInstagramFollowers] = useState(0);
  const [linkedinFollowers, setLinkedinFollowers] = useState(0);
  const [faangHires, setFaangHires] = useState(0);
  const [telegramFollowers, setTelegramFollowers] = useState(0);

  // Set your desired follower counts
  const youtubeCount = 900;
  const instagramCount = 500;
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
      }, 1000); // Delay of 500ms before starting the animation
  
    };
  
    animateFollowers();
  }, []);

  return (
    <div className="bg-gray-800 py-8">
      <div className="container mx-auto px-16">
        <div className=" justify-between">
          <div className="flex items-center">
            <div className="basis-1/5 text-center mr-4 heading-2 ">
              <h2 className="text-white text-2xl font-bold">
                {youtubeFollowers}
                {"K+"}
              </h2>
              <p className="text-gray-400 text-sm">YouTube Followers</p>
            </div>
            <div className="border border-white h-16 heading-1"> </div>

            <div className="basis-1/5 text-center mr-4 heading-2">
              <h2 className="text-white text-2xl font-bold">
                {instagramFollowers}
                {"K+"}
              </h2>
              <p className="text-gray-400 text-sm">Instagram Followers</p>
            </div>
            <div className="border border-white h-16 heading-1"> </div>

            <div className="basis-1/5 text-center mr-4 heading-2">
              <h2 className="text-white text-2xl font-bold">
                {linkedinFollowers}
                {"K+"}
              </h2>
              <p className="text-gray-400 text-sm">LinkedIn Followers</p>
            </div>

            <div className="border border-white h-16 heading-1"> </div>
            <div className="basis-1/5 text-center mr-4 heading-2">
              <h2 className="text-white text-2xl font-bold">
                {faangHires}
                {"K+"}
              </h2>
              <p className="text-gray-400 text-sm">People Got into FAANG</p>
            </div>

            <div className="border border-white h-16 heading-1"> </div>
            <div className="basis-1/5 text-center mr-4 heading-2">
              <h2 className="text-white text-2xl font-bold">
                {telegramFollowers}
                {"K+"}
              </h2>
              <p className="text-gray-400 text-sm">Telegram Followers</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SocialMedia;
