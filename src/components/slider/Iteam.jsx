import React from 'react';

export function TeamItem(){
  return (
    <div>
      <a href="https://www.linkedin.com/company/codingdecoded/" target="_blank">

      <div className="col-sm-6 col-md-4">
        <div className="team-item bg-gray-100 text-center mx-auto my-8 px-4 py-6 rounded transition-colors duration-250 ease-in-out hover:bg-blue-300 hover:text-white">
          <img
            src="https://demo.epic-webdesign.com/tf-pacifico/v1/images/team1a.jpg"
            className="team-img w-32 h-32 mx-auto rounded-full p-1 bg-gray-400"
            alt="pic"
          />
          <h3 className="text-lg font-semibold mt-4 mb-1">JOHNATHAN HAWKINS</h3>
          <div className="team-info">
            <p className="text-gray-600">Head of SEO</p>
          </div>
          <br />
          <p className="text-gray-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, vero?
          </p>
          <button className='mt-5 py-2 px-4 bg-rose-400 rounded-md'>Connect </button>
        </div>
      </div>
      </a>

    </div>
  );
};

export default TeamItem;
