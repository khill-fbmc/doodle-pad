import { useState } from "react";

import ColorPalette from "./ColorPalette";
import { PopoverPicker } from "./PopoverPicker";
import styles from "./sidenav.module.css";

export default function Sidenav({
  currentColor,
  colorSetter,
}: {
  currentColor: string;
  colorSetter: (color: string) => unknown;
}) {
  const [open, setOpen] = useState(true);
  const toggleOpen = () => setOpen(!open);

  return (
    <aside className={open ? styles.sidenav : styles.sidenavClosed}>
      <div className="py-2">
        <button className={styles.menuBtn} onClick={toggleOpen}>
          {open ? DoubleChevronLeft : DoubleChevronRight}
        </button>

        <div className="picker">
          <PopoverPicker color={currentColor} onChange={colorSetter} />
          <ColorPalette colorSetter={colorSetter} />
        </div>
      </div>
    </aside>
  );
}

const SvgIcon = ({ path }: { path: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path strokeLinecap="round" strokeLinejoin="round" d={path} />
  </svg>
);

const DoubleChevronLeft = (
  <SvgIcon path="M18.75 19.5l-7.5-7.5 7.5-7.5m-6 15L5.25 12l7.5-7.5" />
);

const DoubleChevronRight = (
  <SvgIcon path="M11.25 4.5l7.5 7.5-7.5 7.5m-6-15l7.5 7.5-7.5 7.5" />
);
