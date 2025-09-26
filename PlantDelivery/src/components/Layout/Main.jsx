import React from "react";
import { FaSearch, FaMapMarkerAlt, FaArrowRight } from "react-icons/fa";
import plantBasket from "../../assets/plantBasket.png";
import plantPot from "../../assets/plantPot.png";
import gardeningTools from "../../assets/gardeningTools.png";

const Main = () => {
  return (
    <div className="bg-green-100 min-h-screen flex flex-col items-center px-4 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-green-900 text-center max-w-3xl mb-8">
        Order plants & gardening supplies. Discover best plants. Greenify it!
      </h1>

      <div className="flex flex-col md:flex-row gap-4 w-full max-w-4xl mb-12">
        <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2 flex-1">
          <FaMapMarkerAlt className="text-green-700 mr-2" />
          <input
            type="text"
            placeholder="Enter your delivery location"
            className="outline-none w-full text-gray-700"
          />
        </div>
        <div className="flex items-center bg-white rounded-lg shadow-md px-4 py-2 flex-2">
          <input
            type="text"
            placeholder="Search for plant, pot or more"
            className="outline-none w-full text-gray-700"
          />
          <FaSearch className="text-green-700 ml-2" />
        </div>
      </div>

      <div className="flex flex-col md:flex-row gap-6 w-full max-w-6xl">
        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between transform transition hover:scale-105 cursor-pointer">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-1">
              PLANTS DELIVERY
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-1">
              From nurseries near you
            </p>
            <span className="text-orange-500 font-bold text-lg md:text-xl">
              UPTO 50% OFF
            </span>
          </div>
          <div className="flex justify-between items-end mt-4">
            <button className="bg-green-700 text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
            <img src={plantBasket} alt="Plants basket" className="w-24" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between transform transition hover:scale-105 cursor-pointer">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-1">
              GARDENING SUPPLIES
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-1">
              Instant delivery
            </p>
            <span className="text-orange-500 font-bold text-lg md:text-xl">
              UPTO 40% OFF
            </span>
          </div>
          <div className="flex justify-between items-end mt-4">
            <button className="bg-green-700 text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
            <img src={gardeningTools} alt="Gardening tools" className="w-24" />
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 flex-1 flex flex-col justify-between transform transition hover:scale-105 cursor-pointer">
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-green-900 mb-1">
              PLANT POTS
            </h2>
            <p className="text-lg md:text-xl text-gray-500 mb-1">
              Decor & style your garden
            </p>
            <span className="text-orange-500 font-bold text-lg md:text-xl">
              UPTO 30% OFF
            </span>
          </div>
          <div className="flex justify-between items-end mt-4">
            <button className="bg-green-700 text-white p-3 rounded-full">
              <FaArrowRight />
            </button>
            <img src={plantPot} alt="Plant pot" className="w-24" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
