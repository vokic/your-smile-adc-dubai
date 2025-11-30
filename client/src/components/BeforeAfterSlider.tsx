import { useEffect, useRef, useState } from "react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
}

export function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "BEFORE",
  afterLabel = "AFTER",
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [sliderPos, setSliderPos] = useState(50);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPos(Math.max(0, Math.min(percentage, 100)));
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!containerRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const x = e.touches[0].clientX - rect.left;
    const percentage = (x / rect.width) * 100;

    setSliderPos(Math.max(0, Math.min(percentage, 100)));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full max-w-2xl mx-auto rounded-2xl overflow-hidden cursor-col-resize group"
      onMouseMove={handleMouseMove}
      onTouchMove={handleTouchMove}
    >
      {/* Before Image (Full Background) */}
      <div className="relative h-96 md:h-[500px] bg-muted">
        <img
          src={beforeImage}
          alt={beforeLabel}
          className="w-full h-full object-cover"
        />
        <div className="absolute top-4 left-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
          {beforeLabel}
        </div>
      </div>

      {/* After Image (Clipped by slider position) */}
      <div
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${sliderPos}%` }}
      >
        <img
          src={afterImage}
          alt={afterLabel}
          className="w-screen h-full object-cover"
          style={{ width: `${(100 / sliderPos) * 100}%` }}
        />
        <div className="absolute top-4 right-4 bg-black/50 text-white px-4 py-2 rounded-full text-sm font-bold">
          {afterLabel}
        </div>
      </div>

      {/* Slider Handle */}
      <div
        className="absolute top-0 bottom-0 w-1 bg-primary cursor-col-resize group-hover:w-2 transition-all"
        style={{ left: `${sliderPos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-white rounded-full p-3 shadow-lg">
          <div className="flex gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8.5 5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zm6 0a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM2 15.5a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm16 0a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
