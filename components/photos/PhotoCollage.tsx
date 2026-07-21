"use client";
import { useState } from "react";
import { photos } from "@/components/lib/photos";
import type { Photo } from "@/components/lib/types";
import PhotoModal from "./PhotoModal";

const ROWS = 5;

type Tile = { photo: Photo; long: boolean };

const buildTiles = (): Tile[] => {
  const tiles: Tile[] = [];
  for (let row = 0; row < ROWS; row++) {
    const a = photos[(row * 2) % photos.length];
    const b = photos[(row * 2 + 1) % photos.length];
    const longFirst = row % 2 === 0;
    tiles.push({ photo: a, long: longFirst });
    tiles.push({ photo: b, long: !longFirst });
  }
  return tiles;
};

const PhotoCollage = () => {
  const [selected, setSelected] = useState<Photo | null>(null);
  const tiles = buildTiles();

  return (
    <div>
      <div className="grid grid-cols-3 gap-2 sm:gap-2">
        {tiles.map((tile, i) => (
          <button
            key={`${tile.photo.id}-${i}`}
            onClick={() => setSelected(tile.photo)}
            className={`
              ${tile.long ? "col-span-2 h-full" : "col-span-1 aspect-square"}
              w-full bg-secondary/15
              hover:bg-accent/20
              transition-colors duration-300
              flex items-end p-1.5 sm:p-3
            `}
          >
            <span className="text-secondary text-[10px] sm:text-sm truncate w-full text-left">
              {tile.photo.caption}
            </span>
          </button>
        ))}
      </div>

      {selected && (
        <PhotoModal photo={selected} onClose={() => setSelected(null)} />
      )}
    </div>
  );
};

export default PhotoCollage;
