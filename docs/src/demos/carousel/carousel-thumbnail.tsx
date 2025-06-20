// import Image from "next/image" // Removed for Vite migration

import {
  AspectRatio,
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@9ui/ui";
import { useState } from "react";

const slides = [
  "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
  "https://images.pexels.com/photos/1293120/pexels-photo-1293120.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
  "https://images.pexels.com/photos/1103970/pexels-photo-1103970.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
  "https://images.pexels.com/photos/2011824/pexels-photo-2011824.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
  "https://images.pexels.com/photos/2471235/pexels-photo-2471235.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2",
];

export default function CarouselThumbnail() {
  const [api, setApi] = useState<CarouselApi>();

  return (
    <div className="w-60 sm:w-80 lg:w-96">
      <Carousel setApi={setApi}>
        <CarouselContent>
          {slides.map((slide) => (
            <CarouselItem key={slide}>
              <AspectRatio
                ratio={16 / 9}
                className="rounded-lg border bg-background"
              >
                <img
                  src={slide}
                  alt="Carousel slide"
                  className="rounded-lg object-cover w-full h-full"
                />
              </AspectRatio>
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="mt-2 flex items-center justify-center gap-2">
          {slides.map((slide, index) => (
            <button
              key={slide}
              className="relative size-10"
              onClick={() => api?.scrollTo(index)}
            >
              <img
                src={slide}
                alt="Carousel slide"
                className="rounded-md object-cover opacity-80 transition-opacity duration-200 hover:opacity-100 w-full h-full"
              />
            </button>
          ))}
        </div>
      </Carousel>
    </div>
  );
}
