// import Image from "next/image" // Removed for Vite migration

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@9ui/ui";
import { useState } from "react";

const users = {
  "karen-smith": {
    name: "Karen Smith",
    image: "/memoji-1.png",
  },
  "chris-williams": {
    name: "Chris Williams",
    image: "/memoji-3.png",
  },
  "melissa-johnson": {
    name: "Melissa Johnson",
    image: "/memoji-2.png",
  },
  "frank-lee": {
    name: "Frank Lee",
    image: "/memoji-4.png",
  },
};

export default function SelectWithCustomValue() {
  const [selected, setSelected] = useState<keyof typeof users | null>(null);

  return (
    <div className="w-80">
      <Select value={selected} onValueChange={setSelected}>
        <SelectTrigger>
          <SelectValue>
            {() =>
              selected ? (
                <div className="flex items-center gap-2">
                  <img
                    src={users[selected].image}
                    alt={users[selected].name}
                    width={16}
                    height={16}
                    className="rounded-full"
                  />
                  {users[selected].name}
                </div>
              ) : (
                "Assign to"
              )
            }
          </SelectValue>
        </SelectTrigger>
        <SelectContent>
          {Object.entries(users).map(([id, user]) => (
            <SelectItem key={id} value={id}>
              <div className="flex items-center gap-2">
                <img
                  src={user.image}
                  alt={user.name}
                  width={16}
                  height={16}
                  className="rounded-full"
                />
                {user.name}
              </div>
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
