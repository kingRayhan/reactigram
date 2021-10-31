import React from "react";
import Card from "../components/Card";
import LoginForm from "../components/LoginForm";

const LandingScreen = () => {
  return (
    <div>
      <div className="container flex items-center h-screen max-w-screen-md mx-auto">
        <div className="hidden w-3/5 md:flex">
          <img
            src="/images/iphone-with-profile.jpg"
            alt="iPhone with Instagram app"
          />
        </div>
        <div className="flex flex-col px-5 lg:w-2/5 lg:px-0">
          <LoginForm onSubmitForm={(e) => console.log(e)} />
        </div>
      </div>
    </div>
  );
};

export default LandingScreen;
