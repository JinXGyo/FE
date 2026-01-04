import { useState } from "react";
import dropdownIcon from "../assets/dropdownIcon.svg";
import type { SortOption } from "../types";
import { SORT_OPTIONS } from "../constants";

export function SortDropdown() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<SortOption>(SORT_OPTIONS[0]);

  return (
    <div className="relative">
      {/* Trigger */}
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="
          flex
          items-center
          justify-between
          gap-2
          px-4
          h-10
          w-44
          rounded-lg
          border-1
          border-[#5A4A3A26]
          bg-white
          text-sm
          text-[#2A2418]
          hover:bg-[#EFE8DA]
        "
      >
        <span className="flex-1 truncate text-left">{selected.label}</span>
        <img src={dropdownIcon} alt="dropdown" className="flex-shrink-0" />
      </button>

      {/* Dropdown */}
      {open && (
        <div className="
          absolute
          right-0
          mt-2
          w-48
          rounded-xl
          bg-white
          shadow-lg
          border
          border-[#5A4A3A26]
          overflow-hidden
          z-10
          p-2
        ">
          {SORT_OPTIONS.map((option) => {
            const isActive = option.value === selected.value;

            return (
              <button
                key={option.value}
                onClick={() => {
                  setSelected(option);
                  setOpen(false);
                }}
                className="
                  w-full
                  flex
                  items-center
                  justify-between
                  px-4
                  py-3
                  text-sm
                  text-left
                  transition
                  font-inter
                  rounded-lg
                  text-[#2A2418] 
                  hover:bg-[#D9CBB1]
                  "
              >
                {option.label}
                {isActive && <span>✓</span>}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}


