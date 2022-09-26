import { useCallback, useRef, useState } from "react";
import { HexColorPicker } from "react-colorful";

import useClickOutside from "../hooks/useClickOutside";

interface Props {
  color: string;
  onChange: (color: string) => void;
}

export const PopoverPicker = ({ color, onChange }: Props) => {
  const popover = useRef<HTMLDivElement>(null);
  const [isOpen, toggle] = useState(false);

  const close = useCallback(() => toggle(false), []);
  useClickOutside(popover, close);

  return (
    <>
      <div className="mx-1.5 my-5">
        <div
          onClick={() => toggle(true)}
          className="cursor-pointer border-white border-2 h-12 w-12 rounded-full shadow"
          style={{
            backgroundColor: color,
          }}
        />
      </div>

      {isOpen && (
        <div className="popover" ref={popover}>
          <HexColorPicker color={color} onChange={onChange} />
        </div>
      )}
    </>
  );
};
