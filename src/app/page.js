"use client"
import React from "react";
import { Image, Link } from "@nextui-org/react";
import { useState } from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FcBullish } from "react-icons/fc";
import { FcAssistant } from "react-icons/fc";
import { FcBusinessman } from "react-icons/fc";
import { FcLock } from "react-icons/fc";
import { FcDatabase } from "react-icons/fc";
import { FcSettings } from "react-icons/fc";
export default function Homepage() {

  const [isHovered1, setIsHovered1] = useState(false)

  return (
    <div className="flex flex-row">
      <div className="w-8/12">
        <Image src="/images/imagem-login.png" alt="management hotel" className="h-dvh"></Image>
      </div>
      <div></div>
      <div className="grid grid-cols-3 gap-6 pl-8 pb-4 pt-40 pr-8 h-3/4 w-6/12">
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
          <FcSettings size={120}/>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <p className="text-center pb-1"><b>Software</b></p>
            <p className="text-center">Software Solutions for SMEs, Hotels, Restaurants and Food & Grocery Retail. </p>
          </CardBody>
        </Card>
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
          <FcDatabase size={120}/>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
          <p className="text-center pb-1"><b>Cloud</b></p>
            <p className="text-center">Environment for cloud management services and secure data.</p>
          </CardBody>
        </Card>
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
          <FcLock size={120}/>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
          <p className="text-center pb-1"><b>Cybersecurity</b></p>
            <p className="text-center">Cybersecurity services and protocols to protect your data.</p>
          </CardBody>
        </Card>
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col">
          <FcBusinessman size={120}/>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
          <p className="text-center pb-1"><b>Business Inteligence</b></p>
            <p className="text-center">Analysis tools for strategic decisions.</p>
          </CardBody>
        </Card>
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
          <FcAssistant size={120}/>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
          <p className="text-center pb-1"><b>24/7 assistance service</b></p>
            <p className="text-center">24/7 Italian assistance service with a dedicated customer portal.</p>

          </CardBody>
        </Card>
        <Card className="py-4" radius="none">
          <CardHeader className="pb-0 pt-2 px-4 flex-col ">
          <FcBullish size={120} />
          </CardHeader>
          <CardBody className="overflow-visible py-2 pb-1">
          <p className="text-center"><b>IT specialists for 50 years</b></p>
            <p className="text-center">Effective consulting services with highly qualified professionals.</p>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}