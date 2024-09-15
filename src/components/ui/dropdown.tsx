"use client";

import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuSeparator,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";


const UzFlag = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg"
    alt="Uzbekistan"
    className="w-5 h-5"
  />
);

const UsFlag = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg"
    alt="USA"
    className="w-5 h-5"
  />
);

const RuFlag = () => (
  <img
    src="https://upload.wikimedia.org/wikipedia/en/f/f3/Flag_of_Russia.svg"
    alt="Russia"
    className="w-5 h-5"
  />
);

export function Dropdown() {
  const [position, setPosition] = React.useState("uz");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex items-center gap-2">
          {position === "uz" && <UzFlag />}
          {position === "eng" && <UsFlag />}
          {position === "ru" && <RuFlag />}
          {position.toUpperCase()}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="uz">
            <span className="flex items-center gap-2">
              <UzFlag /> Uz
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="eng">
            <span className="flex items-center gap-2">
              <UsFlag /> Eng
            </span>
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ru">
            <span className="flex items-center gap-2">
              <RuFlag /> Ru
            </span>
          </DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
