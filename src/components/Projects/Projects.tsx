import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Projects() {
  return (
    <section
      id="projects"
      className="md:h-screen h-[200vh] p-8 pt-25 bg-blue-100 flex flex-col items-center"
    >
      <h1>Projects</h1>
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-8/10 h-fit"
      >
        <CarouselContent>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <Card className="border-0">
                  <CardContent className="flex aspect-square items-center justify-center flex-col">
                    <Image
                      src="/images/profile.png"
                      width={20}
                      alt="card"
                      height={20}
                      className="p-2 h-5/10 w-auto"
                    />
                    <span className="">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ducimus, laudantium minima tempora dolores iste corporis
                      deleniti numquam amet et tempore?
                    </span>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}
