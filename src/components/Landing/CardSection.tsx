import { Card, CardBody, CardFooter, CardHeader } from "@nextui-org/react";

import Image from "next/image";

import { Button } from "../ui/button";

export default function CardSection() {
  const items = [
    {
      category: "PODCAST",
      image: "/images/banners/UI_1.png",
      title: "The Resonance Test 94: Angela Stockman on GenAI in Education",
      description: "EDUCATION",
      link: "#",
    },
    {
      category: "WHITE PAPER",
      image: "/images/banners/UI_2.jpg",
      title: "Maximizing Data Usage: A Strategic Guide for Telcos",
      description: "TELECOM, MEDIA & ENTERTAINMENT, TELECOMMUNICATIONS",
      link: "#",
    },
    {
      category: "BLOG",
      image: "/images/banners/UI_3.jpg",
      title: "Unleash Your Data Superpower with Google Cloud Cortex Framework",
      description: "RETAIL, TELECOM, MEDIA & ENTERTAINMENT, CONSUMER",
      link: "#",
    },
  ];

  return (
    <section className="bg-black py-12 text-white">
      <div className="container mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
        {items.map((item, index) => (
          <Card key={index} className="bg-transparent shadow-none">
            <CardHeader className="flex flex-col items-start">
              <p className="text-sm font-bold tracking-wide text-cyan-400">
                {item.category}
              </p>
            </CardHeader>
            <CardBody>
              <div className="relative mb-4 h-64 w-full">
                <Image
                  src={item.image}
                  alt={item.title}
                  layout="fill"
                  className="rounded-lg object-cover"
                />
              </div>
              <h4 className="mb-2 text-sm font-bold uppercase">
                {item.description}
              </h4>
              <p className="mb-4 text-lg font-semibold">{item.title}</p>
            </CardBody>
            <CardFooter>
              <Button
                variant="ghost"
                className="font-bold text-cyan-400 hover:underline"
                asChild
              >
                <a href={item.link}>Read More &rarr;</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  );
}
