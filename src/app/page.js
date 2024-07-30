"use client";
import React from "react";
import { Image } from "@nextui-org/react";
import { FaGear } from "react-icons/fa6";
import { FaCloud } from "react-icons/fa";
import { MdOutlineSecurity, MdBusinessCenter  } from "react-icons/md";
import { RiCustomerService2Line } from "react-icons/ri";
import { GrUserExpert } from "react-icons/gr";

export default function Homepage() {
  const cardStyle = "bg-red-200 h-30 text-black text-center";
  return (
    <main className="overflow-x-hidden">
      <div className="w-screen">
        <Image src="/images/homepage-img.png" alt="Homepage Image" className="w-screen" />
        <h1 className="text-center -mt-72"><b>Os nossos serviços.</b></h1>
      </div>

      <div className="mt-72 flex justify-center">
        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <FaGear size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>Software</b></p>
            <p className="mt-2 mb-5">Software Solutions for SMEs, Hotels, Restaurants and Food & Grocery Retail.</p>
          </div>
        </div>

        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <FaCloud size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>Cloud</b></p>
            <p className="mt-2 mb-5">Environment for cloud management services and secure data.</p>
          </div>
        </div>

        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <MdOutlineSecurity size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>Cybersecurity</b></p>
            <p className="mt-2 mb-5">Cybersecurity services and protocols to protect your data.</p>
          </div>
        </div>
      </div>

      <div className="mt-5 flex justify-center">
        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <MdBusinessCenter size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>Business Inteligence</b></p>
            <p className="mt-2 mb-5">Analysis tools for strategic decisions.</p>
          </div>
        </div>

        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <RiCustomerService2Line size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>24/7 assistance service</b></p>
            <p className="mt-2 mb-5">24/7 Italian assistance service with a dedicated customer portal.</p>
          </div>
        </div>

        <div className="text-black bg-white border b-2px-gray w-72 rounded rounded-lg m-5">
          <div className="bg-blue-200 w-20 h-20 rounded-full flex justify-center items-center m-5">
            <GrUserExpert size={35} color="#192a51" />
          </div>
          <div className="px-5">
            <p><b>IT specialists for 50 years</b></p>
            <p className="mt-2 mb-5">Effective consulting services with highly qualified professionals.</p>
          </div>
        </div>
      </div>
    </main>
  );
}