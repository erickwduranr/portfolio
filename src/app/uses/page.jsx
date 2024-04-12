import React from "react";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
import UsesTable from "./UsesTable";
import ThemeSwitcher from "../../components/ThemeSwitcher"; // Import the ThemeSwitcher component

const Uses = () => {
  return (
    <div className="dark:bg-black dark:text-white min-h-screen">
      <Header title="My Uses" />
      <main className="max-w-screen-lg py-8 md:py-12 px-4 md:px-0 mx-auto">
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-2xl md:text-4xl text-center my-4">
            Software that I use, the most useful and those in which I am an expert
          </h1>
          <p className="text-base md:text-lg text-left">
          We all have applications that we know,
          others that we may not like very much but are really useful and
          others that I am a machine learning myself.
          </p>
          <div className="overflow-x-auto">
            <UsesTable className="w-full" />
          </div>
        </div>
      </main>
      <Footer />
      <ThemeSwitcher />
    </div>
  );
};

export default Uses;
