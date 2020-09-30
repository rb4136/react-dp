import React from "react";

function Home() {
  return (
    <div className="home container-fluid">
      <div className="row">
        <div className="col">
          <img className="react-image" alt="react-logo" src={process.env.PUBLIC_URL + "/images/reacticon.png"} />
        </div>
        <div className="col">
          <p className="home-text">
            Welcome to my site where I will be playing around with React and putting my little projects up here.
          </p>
        </div>
      </div>
    </div>
  )
};

export default Home;
