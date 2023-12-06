import React from "react";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white pb-40"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div className="pb-0">
          <h1 className="text-4xl font-bold inline border-b-4 border-gray-500 pt-10">
            About
          </h1>
        </div>

        <p className="text-xl mt-10">
          "As a dedicated BCA student at Shanti Niketan, I am actively honing my skills in computer applications. With a fervor for coding, I am delving into the world of technology, eager to transform theoretical knowledge into hands-on expertise. Watch this space for my exciting journey into the realms of software development!"
        </p>

        <br />

        <p className="text-xl">
          Motivated by a love for problem-solving and a determination to make a meaningful impact in the field of software development. Aspiring frontend developer with a flair for detail and a commitment to clean code practices."
        </p>
      </div>
    </div>
  );
};

export default About;
