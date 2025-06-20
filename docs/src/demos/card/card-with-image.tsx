// import Image from "next/image" // Removed for Vite migration

import {
  Button,
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@9ui/ui";

export default function CardWithImage() {
  return (
    <Card className="max-w-80">
      <CardHeader>
        <div className="relative aspect-video rounded-lg">
          <img
            src="https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=450&h=800&dpr=2"
            alt="Blog Image"
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <CardTitle className="mt-2">What is 9ui?</CardTitle>
        <CardDescription>
          Deep dive into the 9ui components and learn how to use them in your
          own projects.
        </CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full">Read more</Button>
      </CardFooter>
    </Card>
  );
}
