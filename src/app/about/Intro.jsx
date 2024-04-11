import React from "react";

export const metadata = {
  title: "Portfolio - About",
  description: "The about page of my portfolio.",
};
export default function IntroAbout() {
  return (
    <div className="flex flex-col justify-start items-start max-w-1380 h-1412 p-6 ">
      <div className="hidden w-full h-112 bg-white bg-opacity-90 rounded-full"></div>

      <h1 className="w-full h-30 text-4xl tracking-tight font-bold ">
        Hello! I'm Erick and I want to be part of the world of technology in this country!
      </h1>

      <p className="w-full h-42 text-base p-4 ">
        Hello! I'm Erick and I would like to tell you a little about myself. Personally, I am married and I have
        15-year-old twins, Sofia and Sebastian. My wife is great and we have lived in the United States for 5 years. I
        have worked successfully all my life in technology in my country of origin, Chile, and I want to continue my
        professional and personal history here in this country.
      </p>

      <p className="w-full h-42 text-base p-4">
        However, I am restless and curious. I was a private airplane pilot in my twenties and I have studied three
        majors related to projects and technology. I speak native Spanish, obviously, and professional English.
      </p>

      <p className="w-full h-42 text-base p-4">
        I have vast experience as a professional speaker on topics related to technology, financial risk and personal
        improvement. My entire career has been developed in private banks in various positions as a programmer, data
        analyst, project manager in Quality Assurance and Data Governance with demonstrable success.
      </p>

      <p className="w-full h-42 text-base p-4">
        Finally, as a fan fact I have great knowledge on an old machine called IBM's AS400 and I am an expert and
        romantic Cobol 400 programmer. I offer my services in these fields of technology, and I enjoy having an open
        mind learning and teachings!
      </p>
    </div>
  );
}
