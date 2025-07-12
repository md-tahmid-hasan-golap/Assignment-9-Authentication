import React from "react";
import Banner from "../Components/Banner";
import { useLoaderData } from "react-router";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      {/* 1. Slider Section: */}
      <Banner></Banner>

      {/* 2. Trending Apps: */}

      {/* Productivity apps */}

      {/* Education apps */}

      {/* Health apps */}
    </div>
  );
};

export default Home;
