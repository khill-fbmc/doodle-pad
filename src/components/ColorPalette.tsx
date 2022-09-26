interface Props {
  colorSetter: (color: string) => void;
}

export default function ColorPalette({ colorSetter }: Props) {
  const COLOR_PALLET = [
    "#FF0000", // Red
    "#FFFFFF", // White
    "#00FFFF", // Cyan
    "#C0C0C0", // Silver
    "#0000FF", // Blue
    "#808080", // Gray
    "#0000A0", // DarkBlue
    "#000000", // Black
    "#ADD8E6", // LightBlue
    "#FFA500", // Orange
    "#800080", // Purple
    "#A52A2A", // Brown
    "#FFFF00", // Yellow
    "#800000", // Maroon
    "#00FF00", // Lime
    "#008000", // Green
    "#FF00FF", // Magenta
    "#808000" // Olive
  ];

  return (
    <div className="px-2">
      {COLOR_PALLET.map(color => (
        <button
          key={color}
          className="swatchBtn h-8 w-8 rounded m-1.5"
          style={{ background: color }}
          onClick={() => colorSetter(color)}
        />
      ))}
    </div>
  );
}
