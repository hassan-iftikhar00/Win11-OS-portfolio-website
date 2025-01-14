"use client";

import { ChangeEvent } from "react";
import dynamic from "next/dynamic";

const DynamicReactPlayer = dynamic(() => import("react-player"), {
  ssr: false,
});

export interface MusicPlayerProps {
  handleNext: () => void;
  togglePlayPause: () => void;
  handlePrevious: () => void;
  handleVolumeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  volume: number;
  currentMusicIndex: number;
  Music: string[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function MusicPlayer({
  handleNext,
  volume,
  currentMusicIndex,
  Music,
  isPlaying,
  setIsPlaying,
}: MusicPlayerProps) {
  const handleEnded = () => {
    handleNext();
  };

  const handlePlay = () => {
    setIsPlaying(true);
  };

  return (
    <div className="w-full">
      <DynamicReactPlayer
        url={Music[currentMusicIndex]}
        controls
        playing={isPlaying}
        volume={volume}
        width="100%"
        height="50px"
        onEnded={handleEnded}
        onPlay={handlePlay}
      />
    </div>
  );
}
